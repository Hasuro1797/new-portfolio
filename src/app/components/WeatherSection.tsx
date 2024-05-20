import React from 'react'
import { WEATHER_API_KEY } from '../../../config'
console.log("las variables", WEATHER_API_KEY)

async function getWeatherData(lang: string) {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=arequipa,peru&appid=${WEATHER_API_KEY}&units=metric${lang === 'es'? '&lang=es': ''}`);
    const data = await res.json()
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}

export default function WeatherSection() {
  return (
    <div className='col-start-1 col-end-4 bg-red-500 rounded-2xl'>WeatherSection</div>
  )
}

