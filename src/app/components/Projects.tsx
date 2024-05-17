import React from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'

export default function Projects() {
  return (
    <div className='col-start-3 col-end-7 xl:col-start-5 xl:col-end-9 xl:row-start-5 xl:row-end-7 relative shadow-container rounded-2xl download-container overflow-hidden cursor-pointer'>
      <div className='absolute w-full h-full top-0 left-0 bg-blue-300 z-0'>
        <img src="/assets/images/developer.webp" alt="image position" className='w-full absolute -top-[50%] left-0'/>
      </div>
      <div className='flex flex-col justify-between h-full bg-primary/60 relative z-10'>
        <div className='flex justify-end p-4'>
          <div className='w-10 h-10'>
            <BsArrowUpCircle className='text-[40px] arrow-click'/>
          </div>
        </div>
        <div className='p-8 gap-3 flex flex-col'>
          <h3 className='text-titleH3 text-secondary leading-normal font-bold'>Proyectos y Pruebas</h3>
          <p className='text-paragraph text-primary-200 font-bold leading-normal'>Aquí tu puedes encontrar algunos de mis proyectos, pruebas o experimentos</p>
        </div>
      </div>
    </div>
  )
}
