import { useTranslations } from 'next-intl'

export default function LanguageCertification() {
  const t = useTranslations("English")
  return (
    <article className='col-start-5 col-end-7 xl:col-start-5 xl:col-end-7 hover:scale-105 duration-200 border-[1px] shadow-inner border-primary-300 border-opacity-30 aspect-square rounded-2xl'>
      <a href="https://www.efset.org/cert/qqwWnF" target='_blank' referrerPolicy='no-referrer' className='flex h-full flex-col shrink-0 p-2 xs:p-4 md:p-8 gap-1 xs:gap-3 justify-center items-center'>
        <span className='text-center text-[14px] sm:text-paragraph text-primary-200 font-medium xs:font-bold uppercase'>{t("title")}</span>
        <span className='text-center text-[36px] xs:text-[64px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[90%] text-primary-200 font-extrabold'>B2</span>
        <span className='text-center text-[14px] sm:text-paragraph text-primary-200 font-medium xs:font-bold'>EF SET</span>
      </a>
    </article>
  )
}
