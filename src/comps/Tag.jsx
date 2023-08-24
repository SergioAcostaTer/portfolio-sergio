import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Tag = ({ text = "New something lol 🎉", link = "" }) => {
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
                <div
                    className={
                        `gap-[10px] items-center border-[1px] border-[color:var(--color80)]
                        rounded-full transition-all duration-150 cursor-pointer hover:bg-[#ffffffe0]
                        hidden lg:flex`}
                >
                    <div
                        className='ml-[10px] h-[8px] w-[8px] bg-[violet] rounded-full transition-all duration-150'
                    ></div>
                    <p className='
                            text-[white] hover:text-[#000000] transition-all duration-150
                            ' >{text}</p>
                </div>

            )

    )
}

export default Tag