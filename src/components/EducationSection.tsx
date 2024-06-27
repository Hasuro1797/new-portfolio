/* eslint-disable @next/next/no-img-element */
"use client"
import { educationList } from '@/lib/education'
import { useTranslations } from 'next-intl'
import { Fragment, useState } from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'
import { PiStudentThin } from "react-icons/pi"
import ModalLayout from './LayoutModal'
import Trayectory from './trayectory/Trayectory'

export default function EducationSection() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const t = useTranslations("Education")
  const changeModal = () =>{
    if(isOpenModal) document.body.classList.remove('modal-open')
    else document.body.classList.add('modal-open')
    setIsOpenModal(!isOpenModal)
  }
  return (
    <Fragment>
      <div 
        className='col-start-3 col-end-7 xl:col-start-1 container xl:col-end-5 relative hover:scale-105 duration-200 border-[1px] shadow-inner border-primary-300 border-opacity-30 rounded-2xl download-container overflow-hidden cursor-pointer'
        onClick={changeModal}
      >
        <div className='absolute w-full h-full top-0 left-0 bg-blue-300 z-0'>
          <img src="/assets/images/education.webp" alt="image position" className='w-full absolute -top-[50%] left-0'/>
        </div>
        <div className='flex flex-col justify-between h-full bg-primary/70 relative z-10'>
          <div className='flex justify-end px-2 pt-2 xs:px-4 xs:pt-4'>
            <div className=''>
              <BsArrowUpCircle className='text-[24px] xs:text-[30px] sm:text-[40px] arrow-click'/>
            </div>
          </div>
          <div className='px-2 pb-2 xs:px-4 xs:pb-4 lg:px-8 lg:pb-8 sm:gap-2 md:gap-3 flex flex-col'>
            <h3 className='xs:text-[24px] sm:text- drop-shadow-2xl text-primary-300 leading-normal font-bold'>{t("title")}</h3>
            <p className='text-[12px] xs:text-[16px] sm:text-paragraph drop-shadow-lg text-primary-200 font-medium line-clamp-2 sm:line-clamp-none leading-normal'>{t("description")}</p>
          </div>
        </div>
      </div>
        <ModalLayout
          closeModal={changeModal}
          isOpenModal={isOpenModal}
        >
          <Trayectory
            icon={
              <PiStudentThin className='w-5 h-5 text-primary'/>
            }
            items={educationList}
            title={t("title")}
          />
        </ModalLayout>
    </Fragment>
  )
}
