//Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { DarkModeButton } from './DarkModeButton';
import Tag from './Tag';

const niceTextStyle = "tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b"

export const Header = () => {
    const [darkMode, setDarkMode] = React.useState(true);

    const handleClick = () => {
        // body and body.light are classes in public\index.html
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
        setDarkMode(!darkMode);
    }

    return (
        <>
            <header className="bg-[color:var(--header-back-opacity)] text-[color:var(--header-back-sub)] h-[64px]
            flex items-center justify-center fixed
            w-full
            z-[100] backdrop-filter backdrop-blur-[10px] backdrop-saturate-150left-0 right-0  transition-all duration-150
            hidden md:flex

            ">
                <nav className="flex items-center justify-between h-full w-[85%] [@media(max-width:1300px)]:w-[100%] px-[20px]">
                    <div className='flex gap-[30px] items-center'>
                        <Link to="/" className="noselect text-2xl font-bold">Sergio Acosta <span
                            className={`${niceTextStyle}`}
                            style={{
                                lineHeight: 0
                            }}
                        >.</span></Link>

                        {/* <div className="grid grid-flow-col gap-[30px] items-center">
                            <Link to="/about" className="noselect text-lg font-light hover:font-normal transition-all duration-150">About</Link>
                            <Link to="/projects" className="noselect text-lg font-light hover:font-normal transition-all duration-150">Projects</Link>
                            <Link to="/contact" className="noselect text-lg font-light hover:font-normal transition-all duration-150">Contact</Link>
                        </div> */}

                        <Tag text="New portfolio 🎉" />
                    </div>

                    <div className="noselect flex items-center h-full gap-4">
                        <DarkModeButton setDarkMode={setDarkMode} darkMode={darkMode} />
                        {/* <button className="noselect bg-[color:var(--header-back-sub)] text-[color:var(--header-back)] rounded-[20px] px-[20px] py-[10px] text-lg font-light transition-all duration-150 poppins">Resume</button> */}
                    </div>


                </nav>
            </header>

            <div className="
                absolute top-[35px] right-[40px] z-[100]
                block md:hidden
            "
                onClick={handleClick}
            >
                {/* <svg
                    className='cursor-pointer 
                    h-[30px] w-[30px]

                    '
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg> */}

                {
                    darkMode ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                        </svg>
                }

            </div>
        </>
    );
}