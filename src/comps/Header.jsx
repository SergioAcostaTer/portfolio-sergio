//Header.jsx

import { Link } from 'react-router-dom';
import { DarkModeButton } from './DarkModeButton';
import Tag from './Tag';

const niceTextStyle = "tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b"

export const Header = () => {
    return (
        <>
            <header className="bg-[color:var(--header-back-opacity)] text-[color:var(--header-back-sub)] h-[64px]
            flex items-center justify-center fixed
            w-full
            z-[100] backdrop-filter backdrop-blur-[10px] backdrop-saturate-150left-0 right-0  transition-all duration-150
            [@media(max-width:768px)]:hidden

            ">
                <nav className="flex items-center justify-between h-full w-[85%] [@media(max-width:1300px)]:w-[100%] px-[20px]">
                    <div className='flex gap-[30px] items-center'>
                        <Link to="/" className="text-2xl font-bold">Sergio Acosta <span
                            className={`${niceTextStyle}`}
                            style={{
                                lineHeight: 0
                            }}
                        >.</span></Link>

                        <div className="grid grid-flow-col gap-[30px] items-center">
                            <Link to="/about" className="text-lg font-light hover:font-normal transition-all duration-150">About</Link>
                            <Link to="/projects" className="text-lg font-light hover:font-normal transition-all duration-150">Projects</Link>
                            <Link to="/contact" className="text-lg font-light hover:font-normal transition-all duration-150">Contact</Link>
                        </div>

                       <Tag text="New something lol 🎉" />
                    </div>

                    <div className="flex items-center h-full gap-4">
                        <DarkModeButton />
                        <button className="
                        bg-[color:var(--header-back-sub)] text-[color:var(--header-back)] rounded-[50px] m-[4px] box-border h-[calc(100%-8px)]
                        min-w-[120px]
                        ">Hire me!</button>
                    </div>


                </nav>
            </header>

            <div className="hidden
                absolute top-[35px] right-[40px] z-[100]
                [@media(max-width:768px)]:block
            ">
                <svg
                    className='cursor-pointer 
                    h-[30px] w-[30px]

                    '
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
        </>
    );
}