"use client";

import React, { useRef } from "react";
import Swal from "sweetalert2";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rsninvg", "template_id87r6a", formRef.current, {
        publicKey: "2AaBRy_YkPNPYCDfK",
      })
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            icon: "success",
            confirmButtonText: "Okay",
          });
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: error,
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      );
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="flex flex-col lg:flex-row mx-4 mb-6 md:mx-16 justify-between items-centers max-w-[1366px] h-full m-auto "
    >
      <motion.div
        variants={variants}
        className="flex flex-col flex-1 justify-center items-center gap-[100px]"
      >
        <motion.h1 variants={variants} className="text-7xl font-semibold">
          Let&apos;s Work Together
        </motion.h1>
        <motion.div variants={variants} className="w-full hidden md:block">
          <h2 className="text-3xl">Mail</h2>
          <span className="text-sm">virgiawan.muhamad@gmail.com</span>
        </motion.div>
      </motion.div>
      {/* Form Container */}
      <div className="flex flex-col flex-1 justify-center items-center gap-12 ">
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute z-[-1] hidden lg:block"
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10"
              stroke="#eab308"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
              stroke="#eab308"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <motion.path
              d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111"
              stroke="#eab308"
              stroke-width="1.5"
              stroke-linecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
            />
          </svg>
        </motion.div>

        <motion.form
          ref={formRef}
          className="flex flex-col gap-5 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="bg-transparent border p-3"
            name="name"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="bg-transparent border p-3"
            name="email"
          />
          <textarea
            name="message"
            rows={10}
            required
            placeholder="Message"
            className="bg-transparent border p-3"
          />
          <button className="bg-yellow-500 px-4 py-2 rounded-md">Send</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
