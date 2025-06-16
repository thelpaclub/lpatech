import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { slideInFromLeft, slideInFromTop } from '@/utils/motions'

const OfferingText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon
                    className='text-[#b49bff] mr-[10px] h-5 w-5'
                />
                <h1 className='Welcome-text text-[13px]'>
                    Our Mission
                </h1>
            </motion.div>
            <motion.div variants={slideInFromLeft(0.5)}
                className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
                Why Manual Testers Struggle to Transition – And How The LPA Tech Is Changing That
            </motion.div>
        </div>
    )
}

export default OfferingText