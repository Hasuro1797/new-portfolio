import React from 'react'

export default function Profile() {
  return (
    <article className='col-start-1 col-end-7 xl:col-start-1 xl:col-end-7 xl:row-start-1 xl:row-end-5 rounded-2xl flex p-4 sm:p-8 flex-col justify-center items-start shrink-0 shadow-container relative overflow-hidden'>
      <span className='w-[1000px] h-[1000px] absolute bg-primary-900 rounded-full hidden md:block sm:-right-[80%] md:-right-[50%] lg:-right-[35%]  xl:-bottom-[25%]'></span>
      <div className='absolute bottom-0 right-0 flex justify-end xxl:-right-[.4%]'>
        <img src="/assets/images/perfil_photo.png" alt="imagen de perfil Manuel Villarroel" className='hidden md:block w-[70%] md:w-[83%] lg:w-[90%] xl:w-[85%] xxl:w-full'/>
      </div>
      <div className='flex flex-col items-start gap-4 py-[20px] md:py-[50px] lg:py-[100px] md:max-w-[320px] lg:max-w-[400px] xl:max-w-[430px] xxl:max-w-[470px] relative z-10'>
        <h1 className='text-secondary text-pretty text-[32px] xs:text-[48px] lg:text-titleH1 font-bold leading-[120%]'>
          Desarrollador Full Stack
        </h1>
        <p className='text-primary-200 text-pretty text-[16px] xs:text-paragraph font-medium'>
        Soy Manuel Villarroel. Explora mi portfolio y descubre soluciones web dinámicas y escalables. Con más de <span className='text-secondary font-bold'>dos años de experiencia</span>, estoy listo para llevar proyectos al siguiente nivel. ¡Conéctate conmigo para discutir tus necesidades!
        </p>
      </div>
    </article>
  )
}
