import React from 'react';


export default function SocialComponent({url, position, children}:{url:string, position: string, children: React.ReactNode}) {
  return (
    <article className={`${position} aspect-square border-[1px] shadow-inner border-primary-300 border-opacity-30 hover:scale-105 duration-200 rounded-2xl overflow-hidden`}>
      <a 
        href={url} 
        target='_blank' 
        referrerPolicy='no-referrer' 
        className='w-full h-full flex justify-center items-center p-4 social-container text-[25px] xs:text-[30px] sm:text-[50px] text-primary-200'>
      {children}
      </a>
    </article>
  )
}
