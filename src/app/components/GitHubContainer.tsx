import React from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'
import { FaGithub } from "react-icons/fa6";

export default function GitHubContainer() {
  return (
    <article className='col-start-1 col-end-3 xl:col-start-3 xl:col-end-5 xl:row-start-5 xl:row-end-7 bg-primary shadow-container rounded-2xl aspect-square download-container overflow-hidden'>
      <a 
        href="https://github.com/Hasuro1797" 
        target='_blank' 
        referrerPolicy='no-referrer' 
        className='flex p-2 xs:p-0 justify-center items-center xs:justify-start xs:items-start w-full h-full flex-col relative'>
          <div className='hidden absolute md:flex justify-end z-[1] right-5 -bottom-[120px]'>
            <img src="/assets/images/section_animate.png" alt="icon" className='w-[90%] lg:w-full'/>
          </div>
          <span className='hidden md:block w-[500px] h-[500px] absolute bg-primary-900 rounded-full -bottom-[80%]'></span>
          <div className='hidden self-stretch p-4 gap-4 xs:flex flex-col-reverse justify-between h-full md:flex-row md:items-start relative z-10'>
            <h3 className='xs:text-[18px] sm:text-[24px] lg:text-titleH3 font-bold text-secondary text-pretty'>Mi código en GitHub</h3>
            <div className='flex justify-end md:justify-start  md:w-10 md:h-10'>
              <BsArrowUpCircle className='text-[24px] xs:text-[30px] sm:text-[40px] arrow-click'/>
            </div>
          </div>
          <FaGithub className='block xs:hidden text-[48px] text-primary-200 '/>
      </a>
    </article>
  )
}
