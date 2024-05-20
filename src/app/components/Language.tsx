'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Switch from './Switch'

export default function Language({}) {
  const [language, setLanguage] = useState(true)

  const changeLanguage = () => {
    setLanguage(!language)
  }

  return (
   
    <div className='bg-primary shadow-container gap-2 sm:gap-4 p-2 xs:p-4 flex flex-col justify-center items-center col-start-1 col-end-3 row-start-2 row-end-4 xl:col-start-7 xl:col-end-9 xl:row-start-1 xl:row-end-3 aspect-square rounded-2xl'>
      <Switch cb={changeLanguage}/>
      <div className='text-primary-200 hidden xs:block text-[24px] sm:text-titleH2 font-bold '>
        <span className={`${!language? ' text-[30px] sm:text-[40px] text-white': ''}`}>EN</span>  <span className={`${language? 'text-[30px] sm:text-[40px] text-white': ''}`}>ES</span>
      </div>
    </div>
  )
}
