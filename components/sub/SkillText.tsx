"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motions'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center sm:mt-[2em]'>
      <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
      >
        <SparklesIcon
          className='text-[#b49bff] mr-[10px] h-5 w-5'
        />
        <h1 className='Welcome-text text-[13px]'>
          My Toolbox
        </h1>
      </motion.div>
      <motion.div variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        Innovating with modern technologies
      </motion.div>
    </div>
  )
}

export default SkillText