import React from 'react'
import {ReactComponent as CvIcon} from './icons/document_cv_icon.svg' 
import {ReactComponent as ArrowTop} from './icons/arrow_top.svg' 
import { BsArrowUpCircle } from "react-icons/bs";
import { motion } from 'framer-motion'

export default function DownloadCV() {
  return (
    <article className='shadow-container bg-primary aspect-square rounded-2xl relative xl:col-start-7 xl:col-end-9 xl:row-start-3 xl:row-end-5 col-start-3 col-end-5 row-start-2 row-end-4 self-stretch shrink-0 overflow-hidden'>
    <a 
      href="https://drive.google.com/uc?export=download&id=1MCRtQEEZCuhaezj8ixbScS8bDViV4VWN"
      download={'CV-profesional'}
      className='relative h-full flex flex-col justify-between items-start download-container'>
        <div className='absolute opacity-10 bottom-4 fileIcon'>
          <CvIcon className=''/>
        </div>
        <div className='p-4 flex justify-end self-stretch relative z-10'>
            <BsArrowUpCircle className='text-[40px] arrow-click'/>
        </div>
        <div className='self-stretch p-8 relative z-10'>
          <span className='text-secondary text-titleH3 font-bold leading-normal text-pretty'>Descarga mi CV ahora mismo</span>
        </div>
    </a>
    </article>
  )
}
