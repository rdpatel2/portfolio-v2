"use client";

import HeroSection from "./components/HeroSection";
import Card from "./components/Cards";
import Link from "next/link";
import HorizontalBarChart from "./components/HorizontalBarChart";
import moment from "moment";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import { EXPERIENCES } from "./constants";
import ProjectCard from "./components/ProjectCard";
import { motion } from "framer-motion";
import Linkedin from "../public/assets/linkedin-logo.png";
import Resume from "../public/assets/resume.png";
import GitHub from "../public/assets/github.png";
import taskManager from "../public/assets/task_manager.png";
import dealOrNoDeal from "../public/assets/deal-or-no-deal.jpg";
import dividendCalculator from "../public/assets/dividend-calculator.webp";
import wolfScheduler from "../public/assets/wolf-scheduler.png";

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

	var now = moment();
	var javaScriptStart = moment([2023, 2, 20]);
	var javaScript = (now.diff(javaScriptStart, "days") / 365.0).toFixed(2);
	var javaStart = moment([2023, 7, 13]);
	var java = (now.diff(javaStart, "days") / 365.0).toFixed(2);
	var pythonStart = moment([2023, 11, 18]);
	var python = (now.diff(pythonStart, "days") / 365.0).toFixed(2);
	var cStart = moment([2024, 6, 1]);
	var c = (now.diff(cStart, "days") / 365.0).toFixed(2);
	var JavaScriptStr = "";

	if (parseFloat(javaScript) >= 1.0) {
		javaScript = "over 1 year";
	} else if (parseFloat(javaScript) >= 3.0) {
		javaScript = "over 3 years";
	} else if (parseFloat(javaScript) >= 5.0) {
		javaScript = "over 5 years";
	} else if (parseFloat(javaScript) >= 10.0) {
		javaScript = "over 10 years";
	}

	if (parseFloat(java) >= 1.0) {
		java = "over 1 year";
	} else if (parseFloat(java) >= 3.0) {
		java = "over 3 years";
	} else if (parseFloat(java) >= 5.0) {
		java = "over 5 years";
	} else if (parseFloat(java) >= 10.0) {
		java = "over 10 years";
	}

	if (parseFloat(python) < 1.0) {
		python = "less than a year";
	} else if (parseFloat(python) >= 1.0) {
		python = "over 1 year";
	} else if (parseFloat(python) >= 3.0) {
		python = "over 3 years";
	} else if (parseFloat(python) >= 5.0) {
		python = "over 5 years";
	} else if (parseFloat(python) >= 10.0) {
		python = "over 10 years";
	}

	if (parseFloat(c) < 1.0) {
		c = "less than a year";
	} else if (parseFloat(c) >= 1.0) {
		c = "over 1 year";
	} else if (parseFloat(c) >= 3.0) {
		c = "over 3 years";
	} else if (parseFloat(c) >= 5.0) {
		c = "over 5 years";
	} else if (parseFloat(c) >= 10.0) {
		c = "over 10 years";
	}

	return (
		<>
			<div
				className="page-container absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
				style={{
					width: "100%",
					height: "100%",
					overflow: "auto",
				}}
			>
				<div id="top"></div>
				<Navbar />
				<div style={{ color: "white" }}>
					<HeroSection />
				</div>
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
				<div
					style={{
						marginTop: "%",
						marginBottom: "7%",
						alignSelf: "center",
						marginLeft: "20%",
						marginRight: "20%",
					}}
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
						margin: "auto",
						borderTop: "1px solid rgba(255, 255, 255, 0.25)",
						color: "white",
					}}
				>
					<span
						className="bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent text-5xl"
						style={{
							paddingTop: "3%",
							height: "40%",
							margin: "auto",
							textAlign: "center",
							alignSelf: "center",
						}}
					>
						Languages
					</span>
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					initial={{ opacity: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
					className=" flex flex-row justify-center items-center"
					style={{
						height: "40%",
						paddingLeft: "3%",
						paddingRight: "3%",
						width: "60%",
					}}
				>
					<HorizontalBarChart />
				</motion.div>
				<motion.div
					viewport={{ once: true }}
					whileInView={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					style={{ marginLeft: "3%", marginRight: "3%", color: "white" }}
				>
					<p
						className="text-2xl font-light tracking-tight lg:mt-14 lg:text-3xl"
						style={{
							textAlign: "center",
							paddingBottom: "6%",
							width: "90%",
							margin: "auto",
						}}
					>
						I've been using JS for {javaScript}, Java for {java}, Python for{" "}
						{python}, and C for {c}. I've spent most of my time working with
						object oriented programming in python and java. Along with web
						development using javascript, typescript, html, and css.
					</p>
				</motion.div>
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
					<span className="bg-gradient-to-r from-green-500 via-greenyellow-400 to-yellow-500 bg-clip-text text-transparent text-5xl">
						Experience
					</span>
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
						marginBottom: "1%",
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
						<span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 bg-clip-text text-transparent text-5xl">
							Projects
						</span>
					</motion.div>
					<motion.div
						viewport={{ once: true }}
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
						className="card-link"
						style={{
							width: "60%",
							margin: "auto",
							height: "fit-content",
						}}
					>
						<Link
							className="card-link"
							href="https://github.com/rdpatel2/Deal-or-No-Deal"
							target="_blank"
							style={{
								textDecoration: "none",
								marginLeft: "2%",
								marginRight: "2%",
								width: "fit-content%",
							}}
						>
							<ProjectCard
								title="Deal or No Deal"
								image={dealOrNoDeal}
								description="Recreated the deal or no deal game inside of a fully functioning Java GUI. Ran testing scenarios using JUnit tests to ensure quality code."
							/>
						</Link>
					</motion.div>
					<motion.div
						viewport={{ once: true }}
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
						className="card-link"
						style={{ width: "60%", margin: "auto" }}
					>
						<Link
							target="_blank"
							href="https://github.com/rdpatel2/Task-Manager"
							style={{
								textDecoration: "none",
								marginLeft: "2%",
								marginRight: "2%",
							}}
						>
							<ProjectCard
								title="Task Manager"
								image={taskManager}
								description="Created a task manager in a java IDE with IO capability, along with sorting and organizational features with a fully functioning java GUI"
							/>
						</Link>
					</motion.div>
					<motion.div
						viewport={{ once: true }}
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
						className="card-link"
						style={{ width: "60%", margin: "auto" }}
					>
						<Link
							className="card-link"
							style={{
								textDecoration: "none",
								marginLeft: "2%",
								marginRight: "2%",
								width: "fit-content",
							}}
							target="_blank"
							href="https://github.com/rdpatel2/WolfScheduler"
						>
							<ProjectCard
								title="Dividend Calculator"
								image={dividendCalculator}
								description="Designed and implemented a Flask-based web application to fetch, process, and display ETF data, creating a
user-friendly interface for financial analysis.
"
							/>
						</Link>
					</motion.div>
					<motion.div
						viewport={{ once: true }}
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
						className="card-link"
						style={{ width: "60%", margin: "auto" }}
					>
						<Link
							className="card-link"
							style={{
								textDecoration: "none",
								marginLeft: "2%",
								marginRight: "2%",
								width: "fit-content",
							}}
							target="_blank"
							href="https://github.com/rdpatel2/WolfScheduler"
						>
							<ProjectCard
								title="WolfScheduler"
								image={wolfScheduler}
								description="Created a scheduling application that allows users to create a login then access faculty or student features. Students and teachers can upload files containing potential classes and pick and choose which classes to enroll in or teach."
							/>
						</Link>
						{/* <ProjectCard
							title="Deal or No Deal"
							image="https://i.ibb.co/KDjdhxd/Deal-or-No-Deal-Logo-2024.jpg"
							description="Recreated the deal or no deal game inside of a fully functioning Java GUI"
						/> */}
					</motion.div>
				</div>
			</div>
		</>
	);
}
