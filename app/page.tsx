"use client";

import HeroSection from "./components/HeroSection";
import SkillsCarousel from "./components/SkillsCarousel";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import { EXPERIENCES } from "./constants";
import { motion } from "framer-motion";
import Socials from "./components/Socials";
import Example from "./components/HorizontalScrollCarousel";

export default function Home() {
  const iconVariants = (duration: number) => ({
    initial: { y: -20 },
    animate: {
      y: [20, -20],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  });

  return (
    <>
      <div className="page-container absolute top-0 z-[-2] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div id="top" style={{ overflowX: "hidden" }}></div>
        <Navbar />
        <div style={{ color: "white", overflowX: "hidden" }}>
          <HeroSection />
        </div>
        <Socials />
        <div
          style={{
            marginTop: "%",
            marginBottom: "7%",
            alignSelf: "center",
            marginLeft: "20%",
            marginRight: "20%",
          }}
          id="languages"
        ></div>
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            width: "90%",
            height: "15%",
            alignContent: "center",
            textAlign: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.25)",
            color: "white",
            margin: "auto",
            paddingTop: "2%",
          }}
        >
          <div
            className="bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent text-5xl"
            style={{
              height: "40%",
              textAlign: "center",
              alignSelf: "center",
              paddingBottom: "2%",
            }}
          >
            Languages
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className=" flex flex-row justify-center items-center"
          style={{
            height: "30%",
            paddingLeft: "3%",
            paddingRight: "3%",
            width: "70%",
            margin: "auto",
            overflowX: "hidden",
          }}
        >
          <SkillsCarousel />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ marginLeft: "3%", marginRight: "3%", color: "white" }}
        ></motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Technologies />
        </motion.div>
        <div id="experience" />
        <br />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="intro"
          style={{
            textAlign: "center",
            paddingTop: "3%",
            paddingBottom: "3%",
            width: "90%",
            margin: "auto",
            marginBottom: "1%",
            color: "white",
          }}
        >
          <div className="bg-gradient-to-r from-green-500 via-greenyellow-400 to-yellow-500 bg-clip-text text-transparent text-5xl">
            Experience
          </div>
        </motion.div>
        <div style={{ marginLeft: "3%" }}>
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full lg:w-1/4"
                style={{ color: "white" }}
              >
                <p className="mb-2 mt-2 text-sm text-neutral-400">
                  {experience.year}
                </p>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="w-full max-w-xl lg:w-3/4"
                style={{ color: "white" }}
              >
                <h6 className="mb-2 font-normal">
                  {experience.role} -{" "}
                  <span className="text-sm text-purple-100">
                    {experience.company}
                  </span>
                </h6>
                <p className="mb-3">{experience.description}</p>
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-700"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
        <div id="projects"></div>
        <br />
        <div
          style={{
            textAlign: "center",
            paddingTop: "3%",
            paddingBottom: "3%",
            width: "90%",
            margin: "auto",
            marginBottom: "10%",
            borderTop: "1px solid rgba(255, 255, 255, 0.25)",
            color: "white",
          }}
        >
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            style={{ color: "white" }}
          >
            <div
              className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 bg-clip-text text-transparent text-5xl inline-block"
              style={{ paddingBottom: "2%" }}
            >
              Projects
            </div>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            style={{
              width: "60%",
              height: "30%",
              margin: "auto",
              paddingTop: "-5%",
            }}
          >
            <Example />
          </motion.div>
        </div>
      </div>
    </>
  );
}
