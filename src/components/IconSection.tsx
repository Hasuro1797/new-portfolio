/* eslint-disable @next/next/no-img-element */
"use client"
import { add, isAfter } from 'date-fns'
import { get } from 'lodash'
import { WeatherType } from '../../declaration'
import useDateHook from '../hooks/useDateHook'
import Moon from './icons/Moon'
import Sun from './icons/Sun'

export default function IconComponent({data, sunset, sunrise}: {data: WeatherType, sunset: string, sunrise: string}) {
  const time = useDateHook()
  return (
    <div className="border-[1px] shadow-inner border-primary-300 border-opacity-30 w-full rounded-2xl flex items-center overflow-hidden text-primary-300 py-2 px-4 md:p-4 lg:p-8">
      <div className={`flex-col justify-center lg:h-full w-2/3 absolute lg:static z-10 p-0 md:p-4 lg:p-0 flex`}>
        <div className="flex items-center">
          <p className="text-[24px] xs:text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-[110%] font-bold">
            {Math.round(get(data,"main.temp",0)) + "°"}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${get(data,"weather.[0].icon", "")}@2x.png`}
            width={100}
            height={100}
            className="w-5 h-5 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20"
            alt="weather icon"
          />
        </div>
        <p className="capitalize text-[12px] xs:text-[16px] sm:text-paragraph lg:text-xl font-semibold lg:mb-0">
          {get(data,"weather.[0].description", "")}
        </p>
        <p className="text-[14px] xs:text-[20px] sm:text-paragraph md:text-[24px] lg:text-2xl text-primary-200">{time}</p>
        <p className="text-[12px] xs:text-[16px] sm:text-paragraph lg:text-xl text-primary-200">
          {get(data, "name","") + ", " + get(data, "sys.country", "")}
        </p>
      </div>
      <div
        className={`absolute right-0 top-0 flex z-0 items-center w-full h-full overflow-hidden justify-end pr-2 xs:pr-5`}
      >
        {
        isAfter(new Date(), add(sunset, { hours: 1 })) ?
        (
          // <NightComponent data={dataWeather}/>
          // <DayComponent data={dataWeather}/>
          // <Sun/>
          <Moon/>
        ): isAfter(new Date(), sunrise) ?
        (
          // <DayComponent data={dataWeather}/>
          <Sun />
        ) :
        (
          <Moon/>
        )
      }
      </div>
    </div>
  )
}
