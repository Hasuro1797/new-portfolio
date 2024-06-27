import React from 'react';


export default function SkillComponent({position, children}:{position: string, children: React.ReactNode}) {
  return (
    <article className={`${position} aspect-square border-[1px] shadow-inner border-primary-300 border-opacity-30 rounded-2xl overflow-hidden p-2 xs:p-4 md:p-8`}>
      {children}
    </article>
  )
}
