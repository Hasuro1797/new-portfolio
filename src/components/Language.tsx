import { getLocale } from 'next-intl/server'
import Link from 'next/link'

export default async function Language({}) {
  const local = await getLocale()
  return (
    <Link 
      className='border-[1px] shadow-inner border-primary-300 border-opacity-30 hover:scale-105 duration-200 p-2 xs:p-4 flex flex-col justify-center items-center col-start-1 col-end-3 row-start-2 row-end-4 xl:col-start-7 xl:col-end-9 xl:row-start-1 xl:row-end-3 aspect-square rounded-2xl' 
      href={local === 'es' ? '/en': '/es'}
    >
      <h2 className='text-[48px] xs:text-[60px] sm:text-[80px] font-bold text-center leading-[100%] text-primary-300'>{local === 'es'? 'ES': 'EN' }</h2>
      <div className='text-primary-200 text-paragraph xs:text-[24px] sm:text-titleH2 font-bold '>
        <span className={`${local === 'en'? 'text-[24px] xs:text-[30px] sm:text-[40px] text-primary-300': ''}`}>EN</span>  <span className={`${local === 'es'? 'text-[24px] xs:text-[30px] sm:text-[40px] text-primary-200': ''}`}>ES</span>
      </div>
    </Link>
  )
}
