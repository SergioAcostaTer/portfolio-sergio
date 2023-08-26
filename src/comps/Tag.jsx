import { Link } from "react-router-dom"
import { useState } from "react";
import Confetti from "./Confetti";

// eslint-disable-next-line react/prop-types
const Tag = ({ text = "New something lol 🎉", link = "" }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (

        link ?
            (
                <Link to={link}>
                    <div
                        className={
                            `
                        gap-[10px] items-center border-[1px] border-[color:var(--color80)]
                        rounded-full transition-all duration-150 cursor-pointer hover:bg-[#ffffffe0]
                        hidden lg:flex
                `
                        }
                    >
                        <div
                            className='ml-[10px] h-[8px] w-[8px] bg-[violet] rounded-full transition-all duration-150'
                        ></div>
                        <p className='
                            text-[white] hover:text-[#000000] transition-all duration-150
                            ' >{text}</p>
                    </div>
                </Link>
            )


            :

            (
                <>
                    {isVisible && <Confetti />}

                    <div
                        onClick={() => {
                            setIsVisible(false);
                            console.log(false, "is visible");

                            setTimeout(() => {
                                setIsVisible(true);
                                console.log(true, "is visible");
                            }, 0);
                        }}

                        className={
                            `gap-[10px] items-center border-[1px] border-[color:var(--color80)]
                         rounded-full transition-all duration-150 cursor-pointer hover:bg-[color:var(--header-back-sub)]
                         hidden lg:flex group noselect relative`}
                    >

                        <div
                            className='ml-[10px] h-[8px] w-[8px] bg-[violet] rounded-full transition-all duration-150'
                        ></div>
                        <p className='
                        noselect
                             text-[color:var(--header-back-sub)] group-hover:text-[color:var(--header-back)] transition-all duration-150 
                             ' >{text}</p>
                    </div>
                </>

            )

    )
}

export default Tag