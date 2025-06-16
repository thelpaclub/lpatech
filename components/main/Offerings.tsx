
"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import OfferingText from '../sub/OfferingText'
import OfferingDataProvider from '../sub/OfferingDataProvider'
import { offerings } from '@/constants/offeringData'
import magicYoga from '@/public/lottie-assets/magic-yoga.json'
import Lottie from 'react-lottie'
import Iconify from '../utils/Iconify'
import { slideInFromLeft } from '@/utils/motions'
import MissionModal from '../sub/MissionModal'

const Offerings = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const lottieAnimDefaultOptions = {
    loop: true,
    autoplay: true,
    // muted:true,
    animationData: magicYoga,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <div className='z-40' id='offerings'>
      {isModalOpen && <MissionModal handleClose={() => setIsModalOpen(false)} />}
      <div
        id='offerings'
        className='w-full flex flex-col justify-left gap-3 h-full relative overflow-hidden  sm:px-20'
        style={{ transform: "scale(0.9)" }}
      >
        <OfferingText />
        <div className='w-full h-auto flex flex-row max-sm:flex-col items-center justify-between'>
          <div
            className='flex flex-col justify-left gap-3 h-full w-[60%] max-sm:w-full'
          >
            <p className="text-lg text-gray-400 my-5 max-w-[400px]">
              For years, the software testing industry has spoken endlessly about the need to &ldquo;upgrade&rdquo; — from manual to automation testing. Every job post now screams &ldquo;Selenium&rdquo;, &ldquo;Java&rdquo;, &ldquo;API Testing&rdquo;, &ldquo;Automation Frameworks&rdquo; — but here&apos;s the harsh truth no one talks about:
            </p>

            <p className='text-xl Welcome-text max-w-[400px]'>
              <span className='w-fit'>
                <Iconify icon='mdi:format-quote-open' classNames='text-3xl text-white' />
              </span>
              There is a serious lack of structured, practical content tailored for manual testers looking to grow.
              <span className='w-fit'><Iconify icon='mdi:format-quote-close' classNames='text-3xl text-white' /></span>
            </p>

            <p className='text-lg text-gray-400 mt-5 mb-1 max-w-[400px]'>
              While there are thousands of courses, YouTube videos, and tutorials available, most of them assume:
            </p>
            <ul className='text-lg text-gray-400 max-w-[400px] list-disc'>
              <li>You already know how to code.</li>
              <li>You&apos;re already confident in tools like Git, Postman, or TestNG.</li>
              <li>You just need syntax, not real-world application</li>
            </ul>
            <p className='text-lg text-gray-400 my-5 max-w-[400px]'>
              But manual testers who&apos;ve spent years working on test cases, functional flows, and business validations often feel lost when trying to switch. The real gap is not just knowledge — it&apos;s clarity, mentorship, and community.
            </p>
            <div className=' w-[100px] h-[2px] bg-gray-400' />
            <p className='text-lg text-gray-400 mt-5 mb-1 max-w-[400px]'>
              The Hidden Struggles Manual Testers Face:
            </p>
            <ul className='text-lg text-gray-400 max-w-[400px] list-disc'>
              <li>Overwhelmed: So many tools. Where to start?</li>
              <li>Lack of Direction: No clear roadmap to go from manual to automation.</li>
              <li>Lack of Direction: No clear roadmap to go from manual to automation.</li>
              <li>Confidence Gap: &ldquo;Can I even learn programming at this stage?&rdquo;</li>
            </ul>
            <p className='text-2xl font-semibold tracking-wide my-5 Welcome-text max-w-[400px]'>
              And that&apos;s exactly why we started The LPA Tech.
            </p>
            <motion.div
              onClick={() => setIsModalOpen(true)}
              variants={slideInFromLeft(1)}
              className="py-2 button-primary max-sm:w-full text-center text-white cursor-pointer rounded-lg w-[200px] z-40 relative"
            >
              Learn More
            </motion.div>
          </div>
          <Lottie options={lottieAnimDefaultOptions} />
        </div>
      </div>
    </div >



  )
}

export default Offerings