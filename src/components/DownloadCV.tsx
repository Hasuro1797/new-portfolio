import { useTranslations } from "next-intl";
import { BsArrowUpCircle } from "react-icons/bs";
import { HiOutlineDocument } from "react-icons/hi2";

export default function DownloadCV() {
  const t = useTranslations("CVDownload")
  return (
    <article className='border-[1px] hover:scale-105 duration-200 shadow-inner border-primary-300 border-opacity-30 aspect-square rounded-2xl relative xl:col-start-7 xl:col-end-9 xl:row-start-3 xl:row-end-5 col-start-3 col-end-5 row-start-2 row-end-4 self-stretch shrink-0 overflow-hidden'>
    <a 
      href="https://drive.google.com/uc?export=download&id=1MCRtQEEZCuhaezj8ixbScS8bDViV4VWN"
      download={'CV-profesional'}
      className='relative h-full flex flex-col justify-between items-start download-container'>
        <div className='absolute opacity-10 -bottom-2 xxl:-bottom-0 -left-10 xs:-left-[80px] fileIcon'>
          <HiOutlineDocument className='text-primary-200 text-[150px] xs:text-[200px] sm:text-[270px] md:text-[310px] lg:text-[360px] xxl:text-[320px]'/>
        </div>
        <div className='px-2 pt-2 xs:px-4 xs:pt-4 flex justify-end self-stretch relative z-10'>
            <BsArrowUpCircle className='text-[24px] xs:text-[30px] sm:text-[40px] arrow-click'/>
        </div>
        <div className='self-stretch px-2 pb-2 xs:px-4 xs:pb-4 lg:px-8 lg:pb-8 relative z-10'>
          <span className='text-primary-300 hidden xs:block  xs:text-[18px] sm:text-[24px] lg:text-titleH3 font-bold leading-normal text-pretty'>{t("firstTitle")}</span>
          <span className='text-primary-300 block xs:hidden xs:text-[18px] sm:text-[24px] md:text-titleH3 font-bold leading-normal text-pretty'>{t("secondTitle")}</span>
        </div>
    </a>
    </article>
  )
}
