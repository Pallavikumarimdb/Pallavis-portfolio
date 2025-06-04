"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";


const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className=" items-center grid justify-center lg:px-20 px-10 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full grid item-center  justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            pallavikumari2000mdb@gmail.com
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white lg:max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi👋, I'm
            <span className="">
              {" "}
              Pallavi{" "}
            </span>
           
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 lg:max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in user-friendly web applications and Software development with expertise in the MERN stack. Check out my projects and skills.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <a href="https://drive.google.com/file/d/1vNgaq9Pxr3JwfgvIc53RxTniiResFWdK/view?usp=sharing" target="_blank">Resume</a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
