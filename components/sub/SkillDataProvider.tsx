"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';
import Iconify from '../utils/Iconify';

interface Props {
    icon: string;
    width: number;
    height: number;
    index: number;

}

const SkillDataProvider = ({ icon, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,

    })

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const animationDelay = 0.3
    return (
        <motion.div ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
        >
            <Iconify
                icon={icon}
                classNames={'text-white text-[5rem] mx-4 '}
            />
        </motion.div>
    )
}

export default SkillDataProvider