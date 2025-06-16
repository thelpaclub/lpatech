"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import StarsCanvas from '../main/StartBackground'
import { slideInFromTop } from '@/utils/motions'
import Image from 'next/image'
import ClickAwayListener from 'react-click-away-listener'
import DOMPurify from "isomorphic-dompurify";

interface Props {
    handleClose: () => void,
}


const MissionModal = ({ handleClose }: Props) => {



    return (
        <Backdrop>
            <ClickAwayListener onClickAway={handleClose}>
                <motion.div
                    className='w-[50%] max-sm:w-[90%] h-[85%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-auto m-auto rounded-lg flex flex-col items-start bg-[#030014] border-[5px] border-[#fff]'
                    variants={slideInFromTop}
                >
                    <StarsCanvas />

                    <div className='w-full h-full p-4'>
                        <p className='text-2xl font-semibold tracking-wide my-5 Welcome-text w-full text-center '>
                            Introducing: The LPA Club – Learn. Practice. Achieve.
                        </p>
                        <div className=' mt-10 px-6 w-full'>
                            <p className='text-md text-gray-400 mt-5 mb-1 w-full'>
                                The LPA Club is not just another course. It’s a learning movement designed specifically for:
                            </p>
                            <ul className='mt-4 text-md text-gray-400 w-full list-disc'>
                                <li>Manual testers who feel stuck in repetitive tasks.</li>
                                <li>Test engineers who want to break into automation but don’t know how.</li>
                                <li>Freshers who need structured, beginner-friendly guidance.</li>
                                <li>Professionals who crave peer learning and mentorship.</li>
                            </ul>
                        </div>
                        <div className=' mt-10 px-6 w-full'>
                            <p className='text-md text-gray-400 mt-5 mb-1 w-full'>
                                What Makes LPA Club Different?
                            </p>
                            <ul className='mt-4 text-md text-gray-400 w-full list-disc'>
                                <li>What Makes LPA Club Different?</li>
                                <li>Weekend structured sessions so it fits your busy schedule.</li>
                                <li>Live practice, real-time doubts, and assignments — no passive learning.</li>
                                <li>Community learning to stay consistent, accountable, and motivated.</li>
                                <li>Mentorship support to help you every step of the way.</li>
                            </ul>
                        </div>
                        <div className=' mt-10 px-6 w-full'>
                            <p className='text-md text-gray-400 mt-5 mb-1 w-full'>
                                The Goal?
                            </p>
                            <p className='  text-lg text-white mt-4 mb-1 w-full'>
                                To make every struggling tester say, <span className='text-xl ml-2 font-semibold tracking-wide my-5 Welcome-text w-full text-center '>⁠“Now I know exactly how to grow.”</span>
                            </p>
                            <p className='text-md text-gray-400 mt-5 mb-1 w-full'>
                                Whether it’s learning Java basics, understanding Selenium WebDriver, building real-time automation scripts, or acing test scenarios in interviews — we walk with you.
                            </p>
                        </div>
                        <div className=' py-6 w-full flex items-center justify-center bg-transparent'>
                            <p className='w-[450px] bg-transparent text-xl ml-2 font-semibold tracking-wide my-5 Welcome-text  text-center'>
                                If you’ve ever thought,<br />
                                “I want to grow, but I don’t know where to start”<br />
                                then The LPA Club is built for you.
                            </p>
                        </div>
                        <div className=' mt-10 px-6 w-full'>
                            <p className='text-md text-gray-400 mt-5 mb-1 w-full'>
                                Because learning alone is tough — but growing together changes everything.
                            </p>
                            <p className='  text-lg text-white mt-4 mb-1 w-full'>
                                Ready to shift from stuck to unstoppable?
                                Join The LPA Club.
                                Your journey from manual to automation starts here!
                            </p>
                            <br />
                            <motion.button
                                className="button-primary text-center text-white cursor-pointer rounded-lg px-8 w-full py-2"
                            >
                                Join Us Now
                            </motion.button>

                        </div>

                        <div className='w-full p-4' />
                    </div>

                </motion.div>
            </ClickAwayListener>


        </Backdrop >
    )
}

export default MissionModal


