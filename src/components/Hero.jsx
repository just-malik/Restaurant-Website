import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="relative">
        <img className='w-full h-[100vh]' src='https://cdn.prod.website-files.com/5f64ed8f58fceb18f90d0ebd/5f64ed8f58fceb78610d0f0e_171220_ColoniaVerde_SocialMedia-13.webp' />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className='absolute font-bold  text-center leading-[13rem] text-white top-[7rem] left-0 right-0 z-10 mx-auto w-max text-[12rem]'>Colonia<br/> Verde</h1>
    </div>
    <div className='bg-[#FFFDED]  '>
        <h2 className='hero-2 text-[#02594D] text-[2rem] px-[20rem] py-[5rem]   text-center '>Inspired by the hearth of Latin American fincas.<br/>
Built on the principle that food tastes better when shared.<br/>
For the vibrant community of Fort Greene.</h2>
    </div>
    </>
  )
}

export default Hero