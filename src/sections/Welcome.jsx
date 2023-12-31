/* eslint-disable react/no-unescaped-entities */
//Welcome.jsx
import { Boxes } from "../comps/Boxes";

const niceTextStyle = "tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] bg-clip-text text-transparent bg-gradient-to-b"

export const Welcome = () => {
    return (
        <>
            <div
                className='relative flex justify-center z-[50]'
            >
                <div className="background">
                    <img src='./looper-pattern.svg' alt="background" className="noselect pattern" />
                    <img src='./blue-purple-1.svg' alt="background" className="noselect blur" />
                    <img src='./blue-purple-1.svg' alt="background" className="noselect blur2" />
                </div>
                <div className='box-border pt-[90px] h-full flex flex-col
                    w
                '>

                    <div className="w-full flex pt-[0px] md:pt-[25px]
                    items-center justify-center md:justify-between flex-col md:flex-row md:items-end
                        xl:w-[1000px] m:w-[788px] md:w-[642px] 
                    ">
                        <div className="flex flex-col justify-end">
                            <h1 className={`${niceTextStyle}
                                text-4xl md:text-5xl lg:text-6xl font-bold poppins
                                transition-all duration-150
                                text-center md:text-left
                                leading-tight md:leading-tight noselect
                            `}>
                                FRONT-END
                                <br></br>
                                DEVELOPER
                            </h1>
                            <h1 className={`
                                text-4xl md:text-5xl lg:text-6xl font-bold poppins noselect
                            `}>
                                Sergio Acosta
                            </h1>
                        </div>
                        <div className="flex flex-col h-full load pb-0 md:mb-[5px] mt-[20px] md:mt-[0px] rounded-[50px]">
                            <img src="./sergio.webp" alt="Sergio Acosta" className="rounded-[50px] aspect-square object-cover 
                            transition-all duration-150 w-[200px] h-[200px] md:w-full md:h-[300px] noselect
                            " />
                        </div>
                    </div>
                    
                </div>
            </div>
            <Boxes />

        </>
    );
}