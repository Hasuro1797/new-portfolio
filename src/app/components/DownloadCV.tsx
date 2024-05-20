import React from 'react'
import {ReactComponent as CvIcon} from './icons/document_cv_icon.svg' 
import {ReactComponent as ArrowTop} from './icons/arrow_top.svg' 
import { BsArrowUpCircle } from "react-icons/bs";
import { motion } from 'framer-motion'
import { HiOutlineDocument } from "react-icons/hi2";

export default function DownloadCV() {
  return (
    <article className='shadow-container bg-primary aspect-square rounded-2xl relative xl:col-start-7 xl:col-end-9 xl:row-start-3 xl:row-end-5 col-start-3 col-end-5 row-start-2 row-end-4 self-stretch shrink-0 overflow-hidden'>
    <a 
      href="https://drive.google.com/uc?export=download&id=1MCRtQEEZCuhaezj8ixbScS8bDViV4VWN"
      download={'CV-profesional'}
      className='relative h-full flex flex-col justify-between items-start download-container'>
        <div className='absolute opacity-10 -bottom-2 xxl:-bottom-0 -left-10 xs:-left-[80px] fileIcon'>
          {/* <CvIcon className='w-[50%]'/> */}
          <HiOutlineDocument className='text-primary-200 text-[150px] xs:text-[200px] sm:text-[270px] md:text-[310px] lg:text-[360px] xxl:text-[320px]'/>
        </div>
        <div className='px-2 pt-2 xs:px-4 xs:pt-4 flex justify-end self-stretch relative z-10'>
            <BsArrowUpCircle className='text-[24px] xs:text-[30px] sm:text-[40px] arrow-click'/>
        </div>
        <div className='self-stretch px-2 pb-2 xs:px-4 xs:pb-4 lg:px-8 lg:pb-8 relative z-10'>
          <span className='text-secondary hidden xs:block  xs:text-[18px] sm:text-[24px] md:text-titleH3 font-bold leading-normal text-pretty'>Averigua más sobre mí</span>
          <span className='text-secondary block xs:hidden xs:text-[18px] sm:text-[24px] md:text-titleH3 font-bold leading-normal text-pretty'>Descargar CV</span>
        </div>
    </a>
    </article>
  )
}
