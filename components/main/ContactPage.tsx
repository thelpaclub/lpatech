"use client"

import React from 'react'
import Lottie from 'lottie-react'
import SatelliteJson from '@/public/lottie-assets/satellite.json'
import ContactForm from '../sub/ContactForm'
import Iconify from '../utils/Iconify'

const lottieAnimDefaultOptions = {
  loop: true,
  autoplay: true,
  // muted:true,
  animationData: SatelliteJson,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

const ContactPage = () => {
  return (
    <section
      id='contact-me'
      className=' flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden z-[40]'
      style={{ transform: "scale(0.9)" }}
    >
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center pt-10'>
        {`Tired of short-term motivation and superficial wins?`} <br /> {`Despite countless tutorials and courses, are you still not where you want to be?`}
      </h1>
      <div className=' w-[85%] max-sm:w-full px-4 pb-20 pt-3'>
        <div className=' flex items-start justify-center gap-6'>
          <Iconify icon='fontisto:quote-left' classNames='text-2xl  text-purple-500' />
          <div>
            <p className=' text-white font-medium tracking-wide text-xl text-center'>Scrolling gives you a sense of achievement, Execution gives you the real one.</p>
            <p className=' text-white font-medium tracking-wide text-xl text-center'>It’s time to ditch the noise, It’s time to ditch the noise.</p>
          </div>

          <Iconify icon='fontisto:quote-right' classNames='text-2xl  text-cyan-500' />
        </div>

      </div>
      <ContactForm />
      <div className='w-full h-full absolute'>
        <div className='w-full h-full z[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
          <Lottie animationData={SatelliteJson} autoPlay={true} rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }} loop={true} style={{ height: 700, width: 700 }} />
        </div>

      </div>
    </section>
  )
}

export default ContactPage