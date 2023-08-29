import { Link } from "react-router-dom"
import confetti from 'canvas-confetti';

// eslint-disable-next-line react/prop-types
const Tag = ({ text = "New something lol 🎉", link = "" }) => {


    const handleConfetti = () => {
        confetti({
            particleCount: 150,     // Increase the number of particles for a fuller look
            spread: 100,             // Widen the spread of particles
            origin: {
                y: 0.8,             // Adjust the starting y-coordinate to make it appear higher
            },
            colors: [
                "#FF5733", // Red-Orange
                "#FFC300", // Vivid Yellow
                "#FF48A0", // Fuchsia Pink
                "#00E5A0", // Teal Green
                "#9A2EFE", // Purple
                "#00BFFF", // Deep Sky Blue
                "#FF1493", // Deep Pink
                "#32CD32", // Lime Green
                "#FFA500", // Orange
                "#800080"  // Purple
            ],
            gravity: 0.7,           // Add a bit of gravity to the confetti particles
            scalar: 1.2,            // Scale the size of particles to add depth
            zIndex: 9999,           // Set a high zIndex to ensure confetti appears on top
            disableForReducedMotion: true, // Disable confetti for users with reduced motion preference
        });
    };


    return (

        link ?
            (
                <Link to={link}>
                    <div
                        className={
                            `
                        gap-[10px] items-center border-[1px] border-[color:var(--color80)]
                        rounded-full transition-all duration-150 cursor-pointer hover:bg-[#ffffffe0]
                        flex
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

                    <div
                        onClick={handleConfetti}
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