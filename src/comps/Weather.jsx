import { useEffect, useState } from "react"
import getWeather from "../services/getWeather"
import { getDiscordUser } from "../services/getDiscordUser"

/* eslint-disable react/prop-types */
const Weather = ({ latitude, longitude, place }) => {
    const [weather, setWeather] = useState({
        place: "Tenerife",
        temperature: "__._"
    })
    const [time, setTime] = useState(`${new Date().getHours()}:${new Date().getMinutes()}`)

    useEffect(() => {
        getWeather({ latitude, longitude, place }).then(setWeather)
        getDiscordUser()
    }, [latitude, longitude, place])

    useEffect(() => {
        console.log(weather)
    }, [weather])

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            setTime(`${date.getHours()}:${date.getMinutes()}`)
        }, 1000)
        return () => clearInterval(interval)
    }, [])



    return (
        <>

            <div style={{
                backgroundColor: weather.isDay ? "#0D66A8" : "#101630",
                gridArea: "2 / 4 / 2 / 2"
            }} className={`cursor-pointer h-full w-full md:max-w-[230px]  m:min-w-[200px] m:h-[120px] rounded-[20px] transition-all duration-150 hover:scale-[1.04] flex items-center justify-center relative`}>
                <div className="static w-full h-full">
                    <div></div>
                </div>
                <div className="w-[65%] flex flex-col justify-center items-center h-full relative">
                    <p className="text-white text-xl font-bold">{weather.temperature}°C</p>
                    <p className="text-white text-sm text-center ">{weather.place}</p>
                    <p className="text-white text-sm">{time}</p>
                </div>
                <div className="w-[35%] flex flex-col justify-center items-center h-full relative overflow-hidden rounded-r-[20px]">

                    {
                        weather.isDay ?
                            <div className="h-full aspect-square rounded-full bg-orange-500 absolute top-0 right-[-50px]">
                            </div>
                            :
                            <div className="h-full aspect-square rounded-full bg-[#f5f5f5] absolute top-0 right-[-50px]">
                            </div>
                    }
                </div>

            </div>

        </>
    )
}

export default Weather