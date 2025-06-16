'use client'


import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaCheck } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Iconify from '@/components/utils/Iconify'
import parse, { domToReact } from 'html-react-parser';
import { slideInFromLeft } from '@/utils/motions'

const options = {
    replace: (domNode: any) => {
        if (domNode.name === 'h1') {
            return <h1 className="text-xl p-2 text-white font-medium tracking-wide border border-white my-4">{domToReact(domNode.children)}</h1>;
        }
        if (domNode.name === 'h4') {
            return <h1 className="text-lg mt-6 text-white font-medium tracking-wide underline">{domToReact(domNode.children)}</h1>;
        }
        if (domNode.name === 'p') {
            return <p className="text-gray-300 text-sm tracking-wide">{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'ul') {
            return <ul className="list-disc text-gray-300 pl-6 py-6 text-sm tracking-wide ">{domToReact(domNode.children)}</ul>;
        }
        if (domNode.name === 'li') {
            return <li className=" mb-1">{domToReact(domNode.children)}</li>;
        }
    }
};


interface card_props_type {
    title: string,
    companyName: string
    description: string,
    cardColor: string
}

const SerivePageCard = ({ title, companyName, description, cardColor }: card_props_type) => {

    return (
        <div className={`col-span-1 z-40 relative p-10 rounded-tl-3xl rounded-br-3xl border overflow-hidden border-${cardColor} min-h-[450px] h-fit md:w-[400px] max-sm:w-[90vw] flex flex-col justify-between`}>
            <div className={` absolute top-[50%] translate-y-[-50%] left-[80%] rounded-2xl p-20 border-[10px] border-${cardColor} rotate-45 z-0`}></div>
            <div className='flex flex-col gap-4 z-10 relative'>
                <h3 className=' text-white font-bold tracking-wide text-2xl antialiased'>
                    {title}
                </h3>
                <div className=' flex items-center gap-4 flex-wrap'>
                    <Iconify icon='carbon:location-company' classNames={`text-3xl text-${cardColor}`} />
                    <p className=' text-white tracking-wide'>{companyName}</p>
                </div>
                <div>{parse(description, options)}</div>

            </div>
            <div className=' flex justify-end'>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 px-10 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Apply Now
                </motion.a>
            </div>

        </div>
    )
}

export default SerivePageCard