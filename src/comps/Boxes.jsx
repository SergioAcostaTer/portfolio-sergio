// Boxes.jsx

import Box from "./Box"
import DiscordBox from "./DiscordBox"
import Weather from "./Weather"

export const Boxes = () => {
    return (
        <>
            <div className="w-full mt-[30px] 
                px-[20px] md:px-[70px] lg:px-[130px] l:px-[200px]  xl:px-[300px]
                md:flex flex-row md:flex-row md:gap-[25px] items-center gap-[10px]

                grid grid-cols-3 
            ">
                <Box url="https://github.com/SergioAcostaTer" img="./github.svg" color="#101630" />
                <Box url="https://www.linkedin.com/in/sergioacostaquintana" img="./linkedin.svg" color="#0C64C5" /> 
                <Box url="mailto:sergioacostaquintana@gmail.com" img="./mail.svg" color="#D44638" />
                <DiscordBox url="https://discord.com/users/402939270601506817" img="./discord.svg" />
                <Weather latitude= "28.4682" longitude= "-16.2546" place= "Tenerife" />
            </div>
        </>
    )
}