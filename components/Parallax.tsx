"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const Parallax = ({ type }: { type: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="overflow-hidden h-full bg-gradient-to-t  from-[#505064] to-[#111132] w-full relative flex justify-center items-center"
    >
      <motion.h1 style={{ y: yText }} className={`text-6xl font-bold z-99`}>
        {type === "portfolio" ? "What I Do?" : "What Skills?"}
      </motion.h1>
      <div className="bg-[url('/mountains.png')] w-full h-full md:bg-cover bg-bottom absolute z-[3] bg-contain bg-no-repeat" />
      <motion.div
        className="bg-[url('/planets.png')] w-full h-full md:bg-cover md:bg-bottom bg-top bg-contain bg-no-repeat absolute z-[2]"
        style={{ y: yPlanets }}
      />
      <motion.div
        style={{ x: xStars }}
        className={`bg-[url('/stars.png')] w-full h-full bg-cover bg-bottom absolute z-[1]`}
      />
    </div>
  );
};

export default Parallax;
