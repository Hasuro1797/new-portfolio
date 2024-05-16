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
   
    <div className='bg-primary shadow-container gap-4 p-4 flex flex-col justify-center items-center col-start-7 col-end-9 row-start-1 row-end-3 aspect-square rounded-2xl'>
      <Switch cb={changeLanguage}/>
      <div className='text-primary-200 text-titleH2 font-bold '>
        <span className={`${!language? 'text-[40px] text-white': ''}`}>EN</span>  <span className={`${language? 'text-[40px] text-white': ''}`}>ES</span>
      </div>
    </div>
  )
}
