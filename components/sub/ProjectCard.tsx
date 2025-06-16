"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  title: string,
  desc: string,
  src: string
  onClick: any
}




const ProjectCard = ({ title, desc, src, onClick }: Props) => {
  return (
    <div className='w-[300px] h-full z-40 relative rounded-lg shadow-lg cursor-pointer'
      onClick={onClick}
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain rounded-lg'
      />

      <div className='relative w-full h-[60px] p-2 border-[#2A0e61] border mt-4 roudned-lg shadow-xl'>
        <h2 className='text-md tracking-wider text-white text-center'>{title}</h2>
      </div>
    </div>
  )
}

export default ProjectCard