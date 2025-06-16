"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import StarsCanvas from '../main/StartBackground'
import { slideInFromTop } from '@/utils/motions'
import Image from 'next/image'
import ClickAwayListener from 'react-click-away-listener'
import parse, { domToReact } from 'html-react-parser';

interface Props {
  handleClose: any,
  src: string,
  title: string,
  desc: string,
  url: String
}

const options = {
  replace: (domNode: any) => {
    if (domNode.name === 'h1') {
      return <h1 className="text-xl p-2 text-white font-medium tracking-wide border border-white my-4">{domToReact(domNode.children)}</h1>;
    }
    if (domNode.name === 'h4') {
      return <h1 className="text-lg mt-6 text-white font-medium tracking-wide underline">{domToReact(domNode.children)}</h1>;
    }
    if (domNode.name === 'p') {
      return <p className="text-green-700 mb-2">{domToReact(domNode.children)}</p>;
    }
    if (domNode.name === 'ul') {
      return <ul className="list-disc text-gray-300 pl-6 py-6 text-sm tracking-wide ">{domToReact(domNode.children)}</ul>;
    }
    if (domNode.name === 'li') {
      return <li className=" mb-1">{domToReact(domNode.children)}</li>;
    }
  }
};


const ProjectModal = ({ handleClose, src, title, desc, url }: Props) => {


  return (
    <Backdrop>
      <ClickAwayListener onClickAway={handleClose}>
        <motion.div
          className='w-[700px] max-sm:w-[90%] h-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-auto m-auto rounded-lg flex flex-col items-start bg-[#000]  border-[5px] border-[#fff]'
          variants={slideInFromTop}
        >
          <StarsCanvas />
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className='w-full object-contain'
          />
          <div className='relative p-4'>
            <h2 className='text-2xl mt-6 font-semibold text-white'>{title}</h2>
            {/* <p className='mt-2 text-gray-300 text-left text-[0.9rem]'>{desc}</p> */}
            <div>{parse(desc, options)}</div>
          </div>
          <button className="button-64" role="button" onClick={() => {
            window.open(String(url))
          }}><span className="text">Register</span></button>
        </motion.div>
      </ClickAwayListener>


    </Backdrop>
  )
}

export default ProjectModal


