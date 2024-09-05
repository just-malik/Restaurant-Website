import React from 'react'

const Hero2 = () => {
  return (
    <div className='grid grid-cols-2 '>
    <div className='flex flex-col justify-center items-center h-screen w-full bg-no-repeat bg-cover' style={{backgroundImage:" url('https://cdn.prod.website-files.com/5f64ed8f58fceb18f90d0ebd/5f64ed8f58fceb2c280d0ee6_drinks.webp')"}}>
        <h1 className='border-white text-white border-b-8 w-fit text-[5rem] cursor-pointer hover:text-[#FF8674] hover:border-[#FF8674]'>MENU</h1>
    </div>
    <div className='bg-[#D9E5DB] flex flex-col justify-center px-[4.5rem]'>
        <h4 className='hero-2 text-[#02594D] text-[1.3rem]'>Enjoy our current offering of delicious dishes, made with local ingredients sourced from our friends and neighbors.</h4>
        <button className='bg-[#02594D] mt-6 text-white w-44 font-bold px-4 py-3 hover:bg-[#FF8674]'>VIEW OUR MENU</button>
    </div>
    <div className='bg-[#FFDE9F] flex flex-col justify-center px-[4.5rem]'>
        <h4 className='hero-2 text-[#02594D] text-[1.3rem]'>Our Sunday Asado Series invites chefs and grill masters from all over the world to take over our backyard for a no fuss, no thrills bbqing afternoon amongst friends and neighbors.</h4>
        <button className='bg-[#02594D]  mt-6 text-white w-[60%] font-bold px-4 py-3  hover:bg-[#FF8674]'>LEARN MORE ABOUT OUR SUNDAY ASADO</button>
    </div>
    <div className='h-screen w-full bg-no-repeat bg-cover flex flex-col justify-center items-center' style={{backgroundImage:" url('https://cdn.prod.website-files.com/5f64ed8f58fceb18f90d0ebd/5f64ed8f58fcebde3c0d0efe_asado-5.webp')"}}>
        <h1 className='border-white text-white border-b-8 w-fit text-[5rem]  cursor-pointer hover:text-[#FF8674] hover:border-[#FF8674]'>SUNDAY</h1>
        <h1 className='border-white text-white border-b-8 w-fit text-[5rem]  cursor-pointer hover:text-[#FF8674] hover:border-[#FF8674]'>ASADO</h1>
        <h1 className='border-white text-white border-b-8 w-fit  text-[5rem] cursor-pointer hover:text-[#FF8674] hover:border-[#FF8674]'>SERIES</h1>
    </div>
    </div>
  )
}

export default Hero2