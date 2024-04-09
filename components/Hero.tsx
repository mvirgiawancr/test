"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Noto_Serif_Sinhala } from "next/font/google";

const noto = Noto_Serif_Sinhala({ subsets: ["latin"] });

export const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const imgVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
export const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-100px)] bg-[url('/hero.png')] bg-no-repeat bg-cover">
      {/* <div
        className={`bg-[url('/dot.png')] w-full h-full bg-cover bg-bottom absolute`}
      /> */}
      <div className="max-w-[1366px] md:mt-8 m-auto h-1/2 md:h-full">
        {/* Text Container */}
        <motion.div
          className="md:h-full flex md:justify-center md:items-center flex-col md:gap-5 lg:gap-10 md:w-1/2 h-1/2 w-full gap-8 text-center items-center"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="lg:text-6xl md:text-3xl text-2xl font-bold"
            variants={variants}
          >
            Hello There 👋
          </motion.h1>
          <motion.h1
            variants={variants}
            className="text-xl md:text-4xl gap-2 text-[#8576FF] font-semibold"
          >
            Moch Virgiawan{" "}
            <span className="hidden lg:inline-block">Caesar Ridollohi</span>
          </motion.h1>
          <motion.div
            className={`text-5xl flex gap-4 ${noto.className}`}
            variants={variants}
          >
            <p className="hidden lg:block">I am a</p>
            <div className="text-base md:text-2xl lg:text-5xl">
              <Typewriter
                options={{
                  strings: ["Fullstack Developer", "Tech Enthusiast"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </motion.div>
          <motion.div variants={variants}>
            <motion.button
              variants={variants}
              className="border border-white rounded-xl px-4 py-2 bg-transparent text-white"
            >
              <motion.a href="#Contact">Contact Me</motion.a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      {/* Images Container */}
      <motion.div
        variants={imgVariants}
        initial="initial"
        animate="animate"
        className="md:h-full md:absolute md:top-0 md:right-0 h-1/2 w-full md:w-1/3 mr-4"
      >
        <Image
          src="/Me2.png"
          alt="Me"
          width={500}
          height={500}
          className="brightness-75 object-contain h-full"
        />
      </motion.div>
    </div>
  );
};
