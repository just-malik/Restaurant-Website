import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Hero3 from './components/Hero3'
import Hero4 from './components/Hero4'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Hero2 />
      <Hero4 />
      <Hero3 />
      <Footer />
      <button className='fixed left-0 right-0 bottom-4 mx-auto w-max py-3 px-16 font-semibold text-white bg-[#93BDB2] rounded-full'>Order Pickup & Delivery</button>
    </div>
  )
}

export default App