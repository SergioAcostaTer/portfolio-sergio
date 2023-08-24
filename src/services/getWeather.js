import axios from "axios"

export default async function getWeather({latitude = "28.4682", longitude = "-16.2546", place = "Tenerife"}){
    const date = new Date()
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=apparent_temperature,precipitation_probability,rain,cloudcover,is_day&forecast_days=1`
    const {data} = await axios.get(url)
    const closestHour = date.getHours() + date.getMinutes() > 30 ? date.getHours() + 1 : date.getHours()
    const result = {
        place,
        temperature: data.hourly.apparent_temperature[closestHour],
        rain: data.hourly.precipitation_probability[closestHour],
        isDay: data.hourly.is_day[closestHour] === 1 ? true : false,
        cloudCover: data.hourly.cloudcover[closestHour],
    }
    return result
}