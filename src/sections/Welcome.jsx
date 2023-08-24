/* eslint-disable react/no-unescaped-entities */
//Welcome.jsx

const niceTextStyle = "tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] bg-clip-text text-transparent bg-gradient-to-b"

export const Welcome = () => {
    return (
        <>
            <div
                className='relative flex justify-center z-[50]'
            >
                <div className="background">
                    <img src='./looper-pattern.svg' alt="background" className="pattern" />
                    <img src='./blue-purple-1.svg' alt="background" className="blur" />
                    <img src='./blue-purple-1.svg' alt="background" className="blur2" />
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
                                leading-tight md:leading-tight
                            `}>
                                FRONT-END
                                <br></br>
                                DEVELOPER
                            </h1>
                            <h1 className={`
                                text-4xl md:text-5xl lg:text-6xl font-bold poppins
                            `}>
                                Sergio Acosta
                            </h1>
                        </div>
                        <div className="flex flex-col h-full">
                            <img src="./sergio.jpeg" alt="Sergio Acosta" className="rounded-[50px] aspect-square object-cover pb-0 md:pb-[5px] mt-[20px] md:mt-[0px]
                            transition-all duration-150 w-[200px] h-[200px] md:w-full md:h-[300px]
                            " />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}