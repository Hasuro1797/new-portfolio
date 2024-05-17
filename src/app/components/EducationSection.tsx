import React from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'

export default function EducationSection() {
  return (
    <div className='col-start-3 col-end-7 xl:col-start-1 container xl:col-end-5 relative shadow-container rounded-2xl download-container overflow-hidden cursor-pointer'>
      <div className='absolute w-full h-full top-0 left-0 bg-blue-300 z-0'>
        <img src="/assets/images/education.webp" alt="image position" className='w-full absolute -top-[50%] left-0'/>
      </div>
      <div className='flex flex-col justify-between h-full bg-primary/60 relative z-10'>
        <div className='flex justify-end p-4'>
          <div className='w-10 h-10'>
            <BsArrowUpCircle className='text-[40px] arrow-click'/>
          </div>
        </div>
        <div className='p-8 gap-3 flex flex-col'>
          <h3 className='text-titleH3 text-secondary leading-normal font-bold'>Educación</h3>
          <p className='text-paragraph text-primary-200 font-bold leading-normal'>Mi viaje educativo es más que solo adquirir conocimientos; es una travesía hacia el crecimiento personal y profesional</p>
        </div>
      </div>
    </div>
  )
}
