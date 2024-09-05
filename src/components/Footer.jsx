import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=' flex justify-center gap-28 h-[60vh] w-full bg-[#FFFDED] pt-20 '>
        <img src="https://cdn.prod.website-files.com/5f64ed8f58fceb18f90d0ebd/5f651e6bb8c7851f843d90e5_CV_Seal.svg" className='h-[45%]' alt="" />
        <div className='flex flex-col text-[#0A594C] gap-6'>
            <h1 className='font-extrabold'>CONTACT US</h1>
            <a href=''>219 DeKalb Ave<br />
            Brooklyn, NY 11205</a>
            <a href=''>347 – 689 – 4287</a>
            <div className='flex items-center gap-3'>
             <FaFacebookF  className='text-white bg-[#0A594C] h-10 w-10 py-1  rounded-full '  />
             <FaInstagram className='text-white bg-[#0A594C] h-10 w-10 py-1  rounded-full ' />
            </div>   
        </div>
        <div className='flex flex-col text-[#0A594C] gap-3'>
        <h1 className='font-extrabold mb-2'>HOURS</h1>
        <h4 className='hero-2 text-lg'>Sunday – Wednesday<br/>
        Dinner 5 pm – 10 pm</h4>
        <h4 className='hero-2 text-lg'>Thursday – Saturday<br/>
        Dinner 5 pm – 11 pm</h4>
        <h4 className='hero-2 text-lg'>Weekday Lunch<br/>
        Tue – Fri, 12 pm – 4 pm</h4>
        <h4 className='hero-2 text-lg'>
        Weekend Brunch<br/>
        Sat & Sun, 10 am – 3 pm
        </h4>
        </div>
        <div className='flex flex-col text-[#0A594C] gap-6'>
        <h1 className='font-extrabold '>MORE INFO</h1>
        <h4 className='hero-2 text-lg'>Catering</h4>
        <h4 className='hero-2 text-lg'>Events</h4>
        <h4 className='hero-2 text-lg'>Reservations</h4>
        <h4 className='hero-2 text-lg'>Giftcards</h4>
        <h4 className='hero-2 text-lg'>Contact Us</h4>
        </div>
    </div>
  )
}

export default Footer