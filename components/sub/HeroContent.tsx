"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 max-sm:px-5 mt-40 z-[20] w-full"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[8px] border border-[#70428ffb] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] w-5 h-5" />
          <h1 className="Welcome-text text-[13px]">Hello Tester!</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 mt-6 text-3xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          Welcome to,
          <span className="text-transparent font-semibold tracking-wide text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            The LPA Tech
          </span>
          <span className="text-lg bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent">- Learn. Progress. Achieve.</span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] max-sm:text-justify"
        >
          Are you a QA/Test Engineer — either a fresher or a working professional — looking to grow beyond repetitive tasks and truly level up in your career? You’re in the right place.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Join Us Now
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center max-sm:hidden"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
