'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motions'
import { SparklesIcon } from '@heroicons/react/24/solid'
import SerivePageCard from '@/components/sub/ServicePageCard'
import axios from 'axios'


const page = () => {
    const [jobsData, setJobsData] = useState<any[]>([])


    useEffect(() => {
        (async function () {
            try {
                const jobs = await axios.get('/api/jobs/get-jobs')
                if (jobs.data.success) {
                    setJobsData(jobs.data.data)
                }
            } catch (error) {
                console.log('Error fetching jobs:', error)
            }
        }())


    }, [])

    return (
        <div className='w-full '>
            <div className=' mt-[65px] container mx-auto px-6 py-8'>
                <div className=' w-full h-[500px] flex flex-col items-center justify-center'>
                    <p className="text-5xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent">
                        We’ve done the filtering—so you don’t have to.
                    </p>
                    <p className="text-4xl font-medium mt-2 text-white text-transparent">
                        Explore only the most relevant, high-impact job roles
                        here.
                    </p>
                    <motion.a
                        href='#company-cards'
                        variants={slideInFromLeft(1)}
                        className="py-2 px-10 mt-6 z-40  button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                    >
                        Explore Now
                    </motion.a>
                </div>

                <div id='company-cards' className=' grid xl:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-y-10'>
                    {jobsData?.map((item, idx) =>
                        <SerivePageCard
                            key={idx}
                            title={item?.jobTitle}
                            companyName={item?.companyName}
                            description={item?.description}
                            cardColor="purple-500"
                        />
                    )}
                </div>

            </div>
        </div>
    )
}

export default page