"use client"
import { myProjects } from '@/constants/ProjectsData'
import React, { useState } from 'react'
import ProjectCard from '../sub/ProjectCard'
import ProjectModal from '../sub/ProjectModal'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { slideInFromLeft, slideInFromTop } from '@/utils/motions'

const Projects = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalIndex, setModalIndex] = useState(Number)


  const handleClose = () => {
    setOpenModal(false)
  }

  const handleOpenModal = (index: number) => {
    setOpenModal(true)
    setModalIndex(index)

  }

  return (
    <div id='projects' className='flex flex-col items-center justify-center py-10'>
      {openModal && <ProjectModal
        src={myProjects[modalIndex].banner}
        title={myProjects[modalIndex].title}
        desc={myProjects[modalIndex].desc}
        url={myProjects[modalIndex].url}
        handleClose={handleClose}
      />}


      <div className='w-full h-auto flex flex-col items-center justify-center mt-[2em]'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
        >
          <SparklesIcon
            className='text-[#b49bff] mr-[10px] h-5 w-5'
          />
          <h1 className='Welcome-text text-[13px]'>
            Curriculum Overview
          </h1>
        </motion.div>
        <motion.div variants={slideInFromLeft(0.5)}
          className='text-[30px] text-white font-medium mt-[10px] text-center'
        >
          From Manual to Automation – Structured, Practical, Career-Ready
        </motion.div>
        <p className="text-lg text-gray-400 mt-1 mb-[35px] w-[65%] max-sm:w-full text-center">
          Built for working professionals and QA aspirants, this 3-month weekend program helps you move from manual testing to complete automation — with live sessions, mentorship, real-time practice, and mock interviews.
        </p>
      </div>

      <div className='h-full w-full flex flex-col md:flex-row flex-wrap justify-center gap-10 px-10'>
        {myProjects.map((projectData, index) =>
          <ProjectCard
            key={projectData.title}
            title={projectData.title}
            desc={projectData.desc.substring(0, 100) + "..."}
            src={projectData.banner}
            onClick={() => handleOpenModal(index)}

          />
        )}
      </div>
    </div>
  )
}

export default Projects