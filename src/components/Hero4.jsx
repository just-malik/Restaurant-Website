import React from 'react'

const Hero4 = () => {
  return (
    <div className='bg-[#FFFDED] w-full h-[50vh] text-[#02594D] flex flex-col justify-center items-center gap-4'>
        <h1 className=' text-[2rem] font-semibold uppercase '>Subscribe to our newsletter</h1>
        <div>
         <h4 className='hero-2 mb-1'>Email Address</h4>
            <div className='flex '>
            <input className='hero-2 bg-[#F5F3E1] p-3' id='news' type='email' placeholder='Email Address' />    
            <button className='bg-[#02594D] px-5 text-white'>SUBSCRIBE</button>
            </div>
        </div>

        <h4 className='hero-2 text-lg'>Enter your email to stay up to date with everything that's happening at Colonia Verde.</h4>
    </div>
  )
}

export default Hero4