// Boxes.jsx

import { useEffect, useState } from "react"
import Box from "./Box"
import DiscordBox from "./DiscordBox"
import Weather from "./Weather"

export const Boxes = () => {
    const [weather, setWeather] = useState(0)


    useEffect(() => {
        setInterval(() => {
            setWeather(weather => {
                if (weather >= 1) {
                    return 0
                } else {
                    return weather + 1
                }
            })
        }, 10000)
    }, [])

    return (
        <>
            <div className="flex justify-center z-[50] relative">
                <div className="w-full mt-[30px] 
                    xl:w-[1000px] m:w-[788px] md:w-[642px] 
                    md:flex flex-row md:flex-row md:gap-[25px] items-center gap-[10px]
                    grid grid-cols-3 px-[20px] md:px-0
                ">
                    <Box url="https://github.com/SergioAcostaTer" img="./logos/github.svg" color="#101630" />
                    <Box url="https://www.linkedin.com/in/sergioacostaquintana" img="./logos/linkedin.svg" color="#0C64C5" /> 
                    <Box url="mailto:sergioacostaquintana@gmail.com?subject=Job%20Interview&body=Hi%20Sergio!" img="./logos/mail.svg" color="#D44638" />
                    <DiscordBox url="https://discord.com/users/402939270601506817" img="./logos/discord.svg" />
                    <Weather actual={weather} />
                </div>
            </div>
        </>
    )
}