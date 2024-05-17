import React from 'react';


export default function SkillComponent({position, children}:{position: string, children: React.ReactNode}) {
  return (
    <article className={`${position} aspect-square bg-primary shadow-container rounded-2xl overflow-hidden p-8`}>
      {/* <ul className='w-full h-full flex justify-center items-center p-4 social-container text-[50px] text-primary-200'>
      </ul> */}
      {children}
    </article>
  )
}
