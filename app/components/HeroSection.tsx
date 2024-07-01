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
				I'm currently a computer science student at North Carolina State
				University in Raleigh. I'm passionate about software development, web
				development, and machine learning. I'm set to graduate with a B.S in
				Computer Science in May 2026, but plan on pursuing an accelerated
				master's program at NC State.
			</motion.p>
		</div>
	);
};

export default HeroSection;
