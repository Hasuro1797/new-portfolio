import React from 'react'

export default function Profile() {
  return (
    <article className='col-start-1 col-end-7 row-start-1 row-end-5 rounded-2xl flex p-8 flex-col justify-center items-start shrink-0 shadow-container relative overflow-hidden'>
      <span className='w-[1000px] h-[1000px] absolute bg-primary-900 rounded-full -right-[35%] -bottom-[25%]'></span>
      <div className='absolute bottom-0 -right-[.4%]'>
        <img src="/assets/images/perfil_photo.png" alt="imagen de perfil Manuel Villarroel" />
      </div>
      <div className='flex flex-col items-start gap-4 max-w-[470px] relative z-10'>
        <h1 className='text-secondary text-titleH1 font-bold leading-[120%]'>
          Desarrollador Full Stack
        </h1>
        <p className='text-primary-200 text-paragraph font-medium'>
        Soy Manuel Villarroel. Explora mi portfolio y descubre soluciones web dinámicas y escalables. Con más de <span className='text-secondary font-bold'>dos años de experiencia</span>, estoy listo para llevar proyectos al siguiente nivel. ¡Conéctate conmigo para discutir tus necesidades!
        </p>
      </div>
    </article>
  )
}
