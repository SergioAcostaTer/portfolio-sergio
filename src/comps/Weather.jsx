import { useEffect, useState } from "react"
import getWeather from "../services/getWeather"
import formattedDate from "../utils/formattedDate"

/* eslint-disable react/prop-types */
const Weather = ({ actual = 1 }) => {
    const weathers = [
        {
            place: "Tenerife",
            temperature: "__._",
            latitude: 28.46642706093388,
            longitude: -16.293991432629536
        },
        {
            place: "Las Palmas",
            temperature: "__._",
            latitude: 28.100198530242306,
            longitude: -15.45529291340189
        },
    ]

    const [actualSub, setActualSub] = useState(actual)
    const [weather, setWeather] = useState(weathers[actual])
    const [time, setTime] = useState(formattedDate(new Date()))

    useEffect(() => {
        getWeather({ 
            latitude: weathers[actualSub].latitude,
            longitude: weathers[actualSub].longitude,
            place: weathers[actualSub].place
         }).then(setWeather)
    }, [actualSub])

    useEffect(() => {
        setActualSub(actual)
    }, [actual])

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            const finalDate = formattedDate(date)
            setTime(finalDate)
        }, 1000)
        return () => clearInterval(interval)
    }, [])


    const handleClicked = () => {
        setActualSub(actualSub => {
            if (actualSub >= 1) {
                return 0
            } else {
                return actualSub + 1
            }
        })
    }



    return (
        <>

            <div 
            onClick={handleClicked}
            style={{
                backgroundColor: weather.isDay ? "#0D66A8" : "#101630",
                gridArea: "2 / 4 / 2 / 2"
            }} className={`cursor-pointer h-full w-full md:max-w-[230px]  m:min-w-[200px] m:h-[120px] rounded-[20px] transition-all duration-150 hover:scale-[1.04] flex items-center justify-center relative`}>
                <div className="static w-full h-full">
                    <div></div>
                </div>
                <div className="w-[65%] flex flex-col justify-center items-center h-full relative">
                    <p className="noselect text-white text-xl font-bold">{weather.temperature}°C</p>
                    <p className="noselect text-white text-sm text-center ">{weather.place}</p>
                    <p className="noselect text-white text-sm">{time}</p>
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