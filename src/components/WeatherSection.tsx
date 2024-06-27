import { getLocale } from 'next-intl/server';
import { WEATHER_API_KEY } from '../../config';
import IconComponent from './IconSection';

async function getWeatherData(lang: string) {
  try {
    const currentInfo = await fetch('https://api.sunrise-sunset.org/json?lat=-16.3989&lng=-71.535&formatted=0')
    const weatherInfo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=arequipa,peru&appid=${WEATHER_API_KEY}&units=metric${lang === 'es'? '&lang=es': ''}`);
    // const res = await  Promise.all([currentInfo, weatherInfo])
    // return [await res[0].json(), await res[1].json()]
    return [await currentInfo.json(), await weatherInfo.json()]
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}

export default async function WeatherSection() {
  const local = await getLocale()
  const [dataSunrise, dataWeather] = await getWeatherData(local)

  return (
    <div className='col-start-1 col-end-5 xl:col-start-3 xl:col-end-7 flex relative overflow-hidden rounded-2xl'>
      <IconComponent 
        data={dataWeather} 
        sunset={dataSunrise?.results?.sunset}
        sunrise={dataSunrise?.results?.sunrise}
        />
    </div>
  )
}

