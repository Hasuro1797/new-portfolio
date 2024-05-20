import React from 'react';


export default function SocialComponent({url, position, children}:{url:string, position: string, children: React.ReactNode}) {
  return (
    <article className={`${position} aspect-square bg-primary shadow-container rounded-2xl overflow-hidden`}>
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
