"use client"
import moment from 'moment';
import { useTranslations } from 'next-intl';
import { CountUp } from 'use-count-up';

export default function BirthComponent() {
  const t = useTranslations("Age")
  const getBirth = () => {
    let years = moment().diff(moment([1997, 5, 17]), "years");
    return years;
  };
  return (
    <article className='col-start-5 col-end-7 xl:col-start-7 xl:col-end-9 border-[1px] shadow-inner border-primary-300 border-opacity-30 aspect-square rounded-2xl'>
      <div className='flex h-full flex-col shrink-0 p-2 xs:p-4 md:p-8 gap-1 xs:gap-3 justify-center items-center'>
        <span className='text-center text-[14px] sm:text-paragraph text-primary-200 font-medium xs:font-bold uppercase'>{t("title")}</span>
        <span className='text-center text-[36px] xs:text-[64px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[90%] text-primary-200 font-extrabold'>
          <CountUp isCounting end={getBirth()} duration={3} />
        </span>
        <span className='text-center text-[14px] sm:text-paragraph text-primary-200 font-medium xs:font-bold uppercase'>{t("subtitle")}</span>
      </div>
    </article>
  )
}
