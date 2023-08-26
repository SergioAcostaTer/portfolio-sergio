import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { Icons } from '../consts/Icons';

const TornadoGroup = ({ number = 1, container, icons }) => {
    /*--------------------
   Vars
   --------------------*/
    let time = 0;
    let x = 0;
    let mouseX = 180;
    /*--------------------
    Options
    --------------------*/
    const opt = {
        radius: number === 1 ? 70 : number === 2 ? 120 : 70,
        radiusY: 0.08,
        maxSpeed: 0.05,
        maxRotation: 50,
        minOpacity: .9,
        spacer: ''
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
        console.log(mouseX); //always 754.5
        let iconsElements = document.querySelectorAll(`.span${number}`);
        x = lerp(x, mouseX / container.current.offsetWidth, 0.1);
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

        requestAnimationFrame(animate);
    };


    useEffect(() => {
        animate();

        container.current.addEventListener('mouseleave', () => {
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
        container.current.addEventListener('touchstart', handleMouse);
        container.current.addEventListener('touchmove', handleMouse);

        return () => {
            container.current.removeEventListener('mousemove', handleMouse);
            container.current.removeEventListener('touchstart', handleMouse);
            container.current.removeEventListener('touchmove', handleMouse);
        };
    }, []);


    return (
        <div className="icons relative
        mt-[-50px] 
    ">
            {
                icons.map((i, ind) => {
                    return (
                        <span key={ind} className={`span${number}`}>
                            <Icon img={i.path} color={i.color} />
                        </span>
                    );
                })
            }

        </div>

    );

};


const Tornado = () => {
    const container = useRef(null);

    return (
        <div ref={container} className='flex justify-center items-center relative z-[50] w-[350px] h-[255px]'
        >
            <TornadoGroup number={1} container={container} icons={[...Icons].slice(0, 4)} />
            <TornadoGroup number={2} container={container} icons={[...Icons].slice(4, 9)} />
            <TornadoGroup number={3} container={container} icons={[...Icons].slice(9, 13)} />
        </div>
    );
};

export default Tornado;
