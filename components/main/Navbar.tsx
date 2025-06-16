"use client"

import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { IoIosMenu } from "react-icons/io";
import Iconify from '../utils/Iconify';

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 max-sm:hidden'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
          <Image
            src='/logo_circle.png'
            alt='logo'
            width={40}
            height={40}
            className='cursor-pointer hover:animate-pulse rounded-[100px]'
          />
          <span className='font-normal ml-[10px] hidden md:block text-gray-300'>The Lpa Tech</span>
        </a>

        <div className='w-[500px] h-full flex flex-row items-center justify-between max-sm:hidden '>
          <div className='w-full h-auto flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
            <a href='#about-me' className='cursor-pointer'>About Us</a>
            <a href='#projects' className='cursor-pointer'>Curriculum</a>
            <a href='#offerings' className='cursor-pointer'>Our Mission</a>
            <a href='/service' className='cursor-pointer'>Services</a>
            <a href='#contact-me' className='cursor-pointer'>Contact Us</a>
          </div>
        </div>

        <div className='flex flex-row gap-4 max-sm:hidden'>
          {Socials.map((social, idx) => <Iconify key={idx} classNames=' text-2xl cursor-pointer' icon={social.icon} onClick={() => {
            window.open(String(social.url))
          }} />)}
        </div>

      </div>
    </div>
  )
}

export default Navbar