import React from 'react'

const Nav = () => {
  return (
    <nav className='flex fixed top-0 z-50 w-full justify-center items-center gap-20 bg-[#FFFDED]'>
        <img className='logo-img h-8' src='https://cdn.prod.website-files.com/5f64ed8f58fceb18f90d0ebd/5f64ed8f58fceb35310d0f15_CV_WordMark_Green.svg' />
        <div className='nav-headings flex items-center gap-16 pt-7 pb-7 justify-between  text-[#02564A]  font-extrabold text-lg  '>
            <h4 className='hover:text-[#FF8674] cursor-pointer'>MENUS</h4>
            <h4 className='hover:text-[#FF8674] cursor-pointer' >SUNDAY ASADO</h4>
            <h4 className='hover:text-[#FF8674] cursor-pointer'>NOCTURNOS</h4>
            <h4 className='hover:text-[#FF8674] cursor-pointer'>RESERVE</h4>
            <h4 className='hover:text-[#FF8674] cursor-pointer'>CONTACT</h4>
        </div>
    </nav>
  )
}

export default Nav