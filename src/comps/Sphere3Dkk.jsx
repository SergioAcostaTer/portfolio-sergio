import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const sceneSize = {
	width: 600,
	height: 600,
};


const Sphere3D = () => {
	const mountRef = useRef(null);

	useEffect(() => {
		let scene, camera, renderer, planet, satellites;

		// Set up the scene
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(50, sceneSize.width / sceneSize.height, 0.1, 1000);
		renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setSize(sceneSize.width, sceneSize.height);
		renderer.autoClearColor = false;
		mountRef.current.appendChild(renderer.domElement);

		// Create a sphere (planet)
		const planetGeometry = new THREE.SphereGeometry(5, 32, 32);
		const planetMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.7 });
		planet = new THREE.Mesh(planetGeometry, planetMaterial);
		scene.add(planet);

		// Create an array to hold the rounded boxes (satellites)
		satellites = [];

		// Create satellites and position them in orbits
		const numOrbits = 3;
		const numSatellites = 5;
		const satelliteDistance = 7;

		const orbitsHeight = [-2.7, 0, 2.7];
		const orbitsOffset = [1.8, 0, -1.8];

		const satelliteInfo = [
			{ color: 0xffff00, path: "./logos/react.png" },
			{ color: 0xff0000, path: "./logos/tailwind.png" },
			{ color: 0x00ff00, path: "./logos/node.png" },
			{ color: 0x0000ff, path: "./logos/express.png" },
			{ color: 0xff00ff, path: "./logos/next.png" },
			{ color: 0x00ffff, path: "./logos/mongodb.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
			{ color: 0xffffff, path: "./logos/scss.png" },
		]


		for (let i = 0; i < numOrbits; i++) {
			const orbit = new THREE.Object3D();
			orbit.rotation.x = 0;
			orbit.rotation.y = orbitsOffset[i];
			orbit.rotation.z = 0;
			scene.add(orbit);

			for (let j = 0; j < numSatellites; j++) {
				const angle = (j / numSatellites) * Math.PI * 2;
				const x = Math.cos(angle) * satelliteDistance;
				const z = Math.sin(angle) * satelliteDistance;

				const y = orbitsHeight[i];

				const satelliteGeometry = new THREE.PlaneGeometry(1.7, 1.7); // Adjust the size if needed
				const satelliteTexture = new THREE.TextureLoader().load(satelliteInfo[i * numSatellites + j].path);
				const satelliteMaterial = new THREE.MeshBasicMaterial({ map: satelliteTexture, transparent: false, color: satelliteInfo[i * numSatellites + j].color });
				const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
				satellite.position.set(x, y, z);
				orbit.add(satellite);
				satellites.push(satellite);
			}
		}

		// Set the camera position
		camera.position.z = 30;

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);

			scene.traverse((object) => {
				if (satellites.includes(object)) {
					const time = Date.now() * 0.002;
					const floatingAmplitude = 0.35;
					object.position.y = Math.sin(time + satellites.indexOf(object)) * floatingAmplitude + orbitsHeight[Math.floor(satellites.indexOf(object) / numSatellites)];

					// Make the satellite always face the camera
					object.lookAt(camera.position);
				}
			});

			scene.traverse((object) => {
				if (object instanceof THREE.Object3D) {
					object.rotation.y += 0.001;
				}
			});

			renderer.render(scene, camera);
		};

		animate();

		return () => {
			if (renderer) {
				renderer.dispose();
			}
		};
	}, [sceneSize]);

	return <div className='z-[300] relative' ref={mountRef} />;
};

export default Sphere3D;
