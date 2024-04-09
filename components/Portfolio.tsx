"use client";
import React, { useRef } from "react";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import Swal from "sweetalert2";

const items = [
  {
    id: 1,
    title: "Landing Page",
    desc: "I am excited to develop a custom landing page for you. Crafting a captivating landing page involves blending creativity with strategic design to ensure it effectively represents the client's brand and communicates their message clearly. I'll focus on user experience, incorporating intuitive navigation and compelling content to drive conversions. By leveraging my skills in web development and design, I aim to deliver a tailored digital experience that meets and exceeds my client's expectations.",
    img: "/landing-page.png",
  },
  {
    id: 2,
    title: "Fullstack App",
    desc: "I am excited to embark on creating a comprehensive, full-stack web application for my client. This project entails combining front-end and back-end technologies to deliver a dynamic and functional digital solution. From designing an engaging user interface to implementing robust server-side architecture, my goal is to provide a seamless and impactful user experience.",
    img: "/fullstack.png",
  },
  //   {
  //     id: 3,
  //     title: "Next JS Blog",
  //     desc: "A landing page for a fictional business. I used NextJS, Chakra UI and TailwindCSS.",
  //   },
  //   {
  //     id: 4,
  //     title: "Next JS Blog",
  //     desc: "A landing page for a fictional business. I used NextJS, Chakra UI and TailwindCSS.",
  //   },
];
const Single = ({ item }: any) => {
  const handleClick = () => {
    Swal.fire({
      title: "Coming Soon!",
      icon: "info",
      confirmButtonText: "Okay",
    });
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section>
      <div className="flex justify-center items-center w-full h-full overflow-hidden">
        <div className="max-w-[1366px] flex-col lg:flex-row  m-auto h-full flex justify-center items-center gap-14">
          <div className="flex-1 h-1/2 md:hidden lg:block" ref={ref}>
            <img
              src={item.img}
              alt=""
              className="w-full h-1/2 mt-[300px] md:hidden lg:block object-cover lg:h-full lg:mt-0"
            />
          </div>
          <motion.div
            className="flex flex-col gap-14 flex-1 justify-center items-center mt-[400px] md:mt-[900px] lg:mt-0 h-1/2"
            style={{ y }}
          >
            <h2 className="text-4xl font-semibold text-yellow-300">
              {item.title}
            </h2>
            <p className="text-base text-justify mx-3">{item.desc}</p>
            <button
              className="bg-yellow-500 px-4 py-2 rounded-md w-1/2 text-white"
              onClick={() => handleClick()}
            >
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const x = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
  });

  return (
    <div className="relative" ref={ref}>
      <div className="sticky top-0 left-0 pt-[50px] text-center text-yellow-500 lg:text-6xl md:text-2xl text-xl">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: x }}
          className="lg:h-[10px] md:h-[5px] h-[3px] bg-white"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
