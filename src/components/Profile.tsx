/* eslint-disable @next/next/no-img-element */
import { useTranslations } from 'next-intl'

export default function Profile() {
  const t = useTranslations("Profile")
  return (
    <article className='col-start-1 col-end-7 xl:col-start-1 xl:col-end-7 xl:row-start-1 xl:row-end-5 rounded-2xl flex p-4 sm:p-8 flex-col justify-center items-start shrink-0 border-[1px] shadow-inner border-primary-300 border-opacity-30 relative overflow-hidden'>
      <span className='w-[1000px] h-[1000px] absolute bg-primary-800 opacity-15  rounded-full hidden md:block sm:-right-[80%] md:-right-[50%] lg:-right-[35%]  xl:-bottom-[25%]'></span>
      <div className='absolute bottom-0 right-0 flex justify-end xxl:-right-[.4%]'>
        <img src="/assets/images/perfil_photo.png" alt="imagen de perfil Manuel Villarroel" className='hidden md:block w-[70%] md:w-[83%] lg:w-[90%] xl:w-[85%] xxl:w-full'/>
      </div>
      <div className='flex flex-col items-start gap-4 py-[20px] md:py-[50px] lg:py-[100px] md:max-w-[320px] lg:max-w-[400px] xl:max-w-[430px] xxl:max-w-[470px] relative z-10'>
        <div className='block mx-auto  shadow-inner border-[1px] border-primary-300 border-opacity-30 md:hidden max-w-[150px] aspect-square rounded-full overflow-hidden'>
          <img src='/assets/images/logo2.png' alt='profile-mobile' className='object-cover object-left-top w-full'/>
        </div>
        <h1 className='text-primary-300 text-pretty text-[32px] sm:text-[48px] lg:text-titleH1 font-bold leading-[120%]'>
          {t("title")}
        </h1>
        <p className='text-primary-200 text-pretty text-[14px] xs:text-[16px] sm:text-paragraph font-medium'>
        {t("descriptionOne")}<span className='text-primary-400 font-bold'>{t("descriptionRelevance")}</span>{t("descriptionTwo")}
        </p>
      </div>
    </article>
  )
}
