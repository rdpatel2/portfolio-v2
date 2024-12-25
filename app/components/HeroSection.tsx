"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="intro" style={{ textAlign: "center" }}>
      <motion.h1
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
      >
        Hi, <br /> I'm Rohan Patel
      </motion.h1>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <span className="bg-gradient-to-r from-red-600 via-red-400 to-pink-500 bg-clip-text text-transparent text-4xl">
          Computer Science Student
        </span>
      </motion.div>

      <motion.p
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="text-1xl font-thin tracking-tight lg:mt-14 lg:text-3xl"
        style={{ marginRight: "20%", marginLeft: "20%" }}
      >
        I am currently a second-year student at North Carolina State University
        in Raleigh, pursuing a Bachelor of Science in Computer Science. I am on
        track to graduate in May 2026 and plan to further my education through
        NC State’s accelerated master’s program in Computer Science.
      </motion.p>
    </div>
  );
};

export default HeroSection;
