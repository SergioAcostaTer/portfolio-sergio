/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import Icon from './Icon';
import { Icons } from '../consts/Icons';

const TornadoGroup = React.memo(({ number = 1, container, icons }) => {
    /*--------------------
   Vars
   --------------------*/
    let time = 0;
    let x = 0;
    let mouseX = 180;
    let maxX = 0.15
    /*--------------------
    Options
    --------------------*/
    const sizes = [65, 110]

    const opt = {
        radius: sizes[number === 2 ? 1 : 0],
        radiusY: 0.08,
        maxSpeed: 0.1,
        maxRotation: 50,
        minOpacity: .9,
        maxX: .12
    };
    /*--------------------
    Utils
    --------------------*/
    const scale = (a, b, c, d, e) => {
        return (a - b) * (e - d) / (c - b) + d;
    };
    const lerp = (v0, v1, t) => {
        return v0 * (1 - t) + v1 * t;
    };
    /*--------------------
    Animation
    --------------------*/
    const animate = () => {
        let iconsElements = document.querySelectorAll(`.span${number}`);
        x = lerp(x, (mouseX - container.current.offsetLeft - container.current.offsetParent.offsetLeft) / container.current.offsetWidth, 0.1); 4
        x = x > 0.5 + maxX ? 0.5 + maxX : x < 0.5 - maxX ? 0.5 - maxX : x


        if (mouseX === 180) {
            x = 0.52
        }

        const rotation = -opt.maxRotation + x * opt.maxRotation * 2;
        const speed = (-opt.maxSpeed + x * opt.maxSpeed * 2);
        const modY = 1 + x * -2;

        time -= speed;

        iconsElements.forEach((i, ind) => {
            const theta = 1 - ind / iconsElements.length;
            const x = opt.radius * Math.sin(time + theta * Math.PI * 2);
            const y = opt.radius * opt.radiusY * Math.cos(modY + time + theta * Math.PI * 2);
            const s = scale(y, -opt.radius * opt.radiusY, opt.radius * opt.radiusY, opt.minOpacity, 1);

            i.style.zIndex = Math.min(2, Math.max(-2, Math.ceil(y)));
            i.style.filter = `blur(${Math.abs(s - 1) * 5}px)`;
            i.style.opacity = s;
            i.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`;
        });


        // requestAnimationFrame(animate); //3300

        setTimeout(() => {
            requestAnimationFrame(animate); //1800
          }, 1000 / 100); 
    };


    useEffect(() => {
        animate();
        const iconsElements = document.querySelectorAll(`.span${number}`);

        container.current.addEventListener('mouseleave', () => {
            iconsElements.forEach((i) => {
                i.style.transition = 'transform 0.1s ease';
            });
            mouseX = 180;
        });
    }, []);

    /*--------------------
    Events
    --------------------*/
    const handleMouse = e => {
        mouseX = e.clientX;
    };

    useEffect(() => {
        container.current.addEventListener('mousemove', handleMouse);
        return () => {
            container.current.removeEventListener('mousemove', handleMouse);
        };
    }, []);


    return (
        <div className={`icons relative mt-[-50px] ${number === 1 || number === 3 ? 'ml-[-0px]' : ""}`}>
            {
                icons.map((i, ind) => {
                    return (
                        <span key={ind} className={`span${number} `}>
                            <Icon img={i.path} color={i.color} />
                        </span>
                    );
                })
            }

        </div>

    );

});


const Tornado = () => {
    const container = useRef(null);

    return (
        <div ref={container} className='flex justify-center items-center relative z-[50] w-[350px] h-[255px] cursor-pointer pt-[80px] md:pt-[0px]'
        >
            <TornadoGroup number={1} container={container} icons={[...Icons].slice(0, 3)} />
            <TornadoGroup number={2} container={container} icons={[...Icons].slice(3, 8)} />
            <TornadoGroup number={3} container={container} icons={[...Icons].slice(8, 11)} />
            <div className='absolute h-[120px] w-[120px] rounded-full bg-[#fff] floating'></div>
        </div>
    );
};

export default Tornado;
