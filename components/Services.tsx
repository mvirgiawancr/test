"use client";
import React from "react";
import { FaGlobe } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiSass,
} from "react-icons/si";
import { motion } from "framer-motion";
import { HoverEffect } from "./Card";

const services = [
  {
    name: "Web Development",
    icon: <FaGlobe />,
    paragraph:
      "I will help you to create a website for your business or personal use. I am a fullstack developer so I can work on both the frontend and backend for a website.",
  },
];
const skills = [
  {
    title: "Javascript",
    logo: <SiJavascript />,
    link: "#Homepage",
  },
  {
    title: "Typescript",
    logo: <SiTypescript />,
    link: "#Homepage",
  },
  {
    title: "Tailwind",
    logo: <SiTailwindcss />,
    link: "#Homepage",
  },
  {
    title: "React",
    logo: <SiReact />,
    link: "#Homepage",
  },
  {
    title: "Next",
    logo: <SiNextdotjs />,
    link: "#Homepage",
  },
  {
    title: "Sass",
    logo: <SiSass />,
    link: "#Homepage",
  },
];

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Services = () => {
  return (
    <div className="max-w-[1366px] m-auto">
      {/* Atas Kanan */}
      <div className="flex justify-end items-center gap-1 ">
        <p className="text-sm text-justify">
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr className="h-4 w-1/3" />
      </div>
      {/* Title */}
      <div className="flex justify-center items-center text-xl md:text-2xl lg:text-4xl text-yellow-500 mt-5">
        <h1>Skills</h1>
      </div>
      {/* Skills Container */}
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={skills}></HoverEffect>
      </div>
    </div>
  );
};

export default Services;
