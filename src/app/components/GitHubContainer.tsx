import React from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'

export default function GitHubContainer() {
  return (
    <article className='col-start-1 col-end-3 xl:col-start-3 xl:col-end-5 xl:row-start-5 xl:row-end-7 bg-primary shadow-container rounded-2xl aspect-square download-container overflow-hidden'>
      <a 
        href="https://github.com/Hasuro1797" 
        target='_blank' 
        referrerPolicy='no-referrer' 
        className='flex w-full h-full flex-col relative'>
          <div className='absolute z-[1] right-5 -bottom-[120px]'>
            <img src="/assets/images/section_animate.png" alt="icon" />
          </div>
          <span className='w-[500px] h-[500px] absolute bg-primary-900 rounded-full -bottom-[80%]'></span>
          <div className='self-stretch p-4 gap-4 flex items-start relative z-10'>
            <h3 className='text-titleH3 font-bold text-secondary'>¡Descubre mi trabajo en GitHub!</h3>
            <div className='w-10 h-10'>
              <BsArrowUpCircle className='text-[40px] arrow-click'/>
            </div>
          </div>
      </a>
    </article>
  )
}
