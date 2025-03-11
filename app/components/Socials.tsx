import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Card from "./Cards";
import Linkedin from "../../public/assets/linkedin-logo.png";
import Resume from "../../public/assets/resume.png";
import GitHub from "../../public/assets/github.png";

const Socials = () => {
  return (
    <motion.div
      className="flex flex-row items-center justify-center"
      style={{ paddingTop: "3.5%", color: "white" }}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1.7 }}
    >
      <motion.div
        initial={{ y: -20 }}
        whileInView={{
          y: [20, -20],
          transition: {
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        viewport={{ once: true }}
        className="card-link"
      >
        <Link
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/rohan-patel49"
          target="_blank"
        >
          <Card
            title="LinkedIn"
            image={Linkedin}
            description="Connect wtih me on LinkedIn"
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: -20 }}
        whileInView={{
          y: [20, -20],
          transition: {
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        viewport={{ once: true }}
        style={{ marginLeft: "2%", marginRight: "2%" }}
        className="card-link"
      >
        <Link
          className="card-link"
          style={{
            textDecoration: "none",
            marginLeft: "2%",
            marginRight: "2%",
          }}
          href="/pdfs/resume.pdf"
          target="_blank"
        >
          <Card
            title="Resume"
            image={Resume}
            description="Take a look at my resume"
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: -20 }}
        whileInView={{
          y: [20, -20],
          transition: {
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        viewport={{ once: true }}
        className="card-link"
      >
        <Link
          className="card-link"
          style={{
            textDecoration: "none",
          }}
          href="https://github.com/rdpatel2"
          target="_blank"
        >
          <Card
            title="GitHub"
            image={GitHub}
            description="Check out my github repos"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Socials;
