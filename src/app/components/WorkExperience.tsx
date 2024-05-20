import React from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'

export default function WorkExperience() {
  return (
    <div className='col-start-1 col-end-5 xl:col-start-1 xl:col-end-5 relative shadow-container rounded-2xl download-container overflow-hidden cursor-pointer'>
      <div className='absolute w-full h-full top-0 left-0 bg-blue-300 z-0'>
        <img src="/assets/images/iIqmM5tTjmpOB9mpbn.webp" alt="image position" className='w-full'/>
      </div>
      <div className='flex flex-col justify-between h-full bg-primary/60 relative z-10'>
        <div className='flex justify-end px-2 pt-2 xs:px-4 xs:pt-4'>
          <div className=''>
            <BsArrowUpCircle className='text-[24px] xs:text-[30px] sm:text-[40px] arrow-click'/>
          </div>
        </div>
        <div className='px-2 pb-2 xs:px-4 xs:pb-4 lg:px-8 lg:pb-8 sm:gap-2 md:gap-3 flex flex-col'>
          <h3 className='xs:text-[24px] sm:text-titleH3 text-secondary leading-normal font-bold'>Experiencia Laboral</h3>
          <p className='text-[12px] xs:text-[16px] sm:text-paragraph text-primary-200 font-medium line-clamp-2 sm:line-clamp-none leading-normal'>¡Descubre mi recorrido profesional!, espero que encuentres algo relevante para ti</p>
        </div>
      </div>
    </div>
  )
}
