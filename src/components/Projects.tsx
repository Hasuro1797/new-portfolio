/* eslint-disable @next/next/no-img-element */
"use client"
import { useTranslations } from 'next-intl'
import { Fragment, useState } from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'
import ModalLayout from './LayoutModal'
import ProjectList from './projects/ProjectList'

export default function Projects() {
  const t = useTranslations("Projects")
  const [isOpenModal, setIsOpenModal] = useState(false)
  const changeModal = () =>{
    if(isOpenModal) document.body.classList.remove('modal-open')
    else document.body.classList.add('modal-open')
    setIsOpenModal(!isOpenModal)
  }
  return (
    <Fragment>
      <div 
        onClick={changeModal}
        className='col-start-3 col-end-7 xl:col-start-5 xl:col-end-9 xl:row-start-5 xl:row-end-7 hover:scale-105 duration-200 relative border-[1px] shadow-inner border-primary-300 border-opacity-30 rounded-2xl download-container overflow-hidden cursor-pointer'>
        <div className='absolute w-full h-full top-0 left-0 bg-blue-300 z-0 '>
          <img src="/assets/images/developer.webp" alt="image position" className='w-full absolute -top-[50%] left-0'/>
        </div>
        <div className='flex flex-col justify-between h-full bg-primary-900/40 relative z-10'>
          <div className='flex justify-end px-2 pt-2 xs:px-4 xs:pt-4'>
            <div className=''>
              <BsArrowUpCircle className='text-[24px] xs:text-[30px] sm:text-[40px] arrow-click'/>
            </div>
          </div>
          <div className='px-2 pb-2 xs:px-4 xs:pb-4 lg:px-8 lg:pb-8 sm:gap-2 md:gap-3 flex flex-col'>
            <h3 className='xs:text-[24px] sm:text-titleH3 text-primary-300 leading-normal font-bold'>{t("title")}</h3>
            <p className='text-[12px] xs:text-[16px] sm:text-paragraph text-primary-200 font-medium line-clamp-2 sm:line-clamp-none leading-normal'>{t("description")}</p>
          </div>
        </div>
      </div>
      <ModalLayout
          closeModal={changeModal}
          isOpenModal={isOpenModal}
        >
          <ProjectList
            title={t("title")}
          />
        </ModalLayout>
    </Fragment>
  )
}
