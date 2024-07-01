import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
	initial: { y: -20 },
	animate: {
		y: [20, -20],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});

const Technologies = () => {
	return (
		<div
			className="border-b border-neutral-800 pb-24"
			style={{
				borderTop: ".5px solid rgba(255, 255, 255, 0.25)",
				borderWidth: "80%",
				paddingTop: "3%",
				paddingBottom: "3%",
				height: "40%",
				width: "90%",
				margin: "auto",
				textAlign: "center",
				alignContent: "center",
			}}
		>
			<span className="bg-gradient-to-r from-blue-500 via-cyan-300 to-green-500 bg-clip-text text-transparent text-5xl">
				Technologies
			</span>
			<div className="flex flex-wrap mt-12 justify-center gap-4">
				<motion.div
					variants={iconVariants(2.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-3 border-white-600 p-4"
				>
					<RiReactjsLine className="text-6xl text-cyan-400" />
				</motion.div>
				<motion.div
					variants={iconVariants(3)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-3 border-white-600 p-4"
				>
					<TbBrandNextjs className="text-6xl text-netral-800" />
				</motion.div>
				<motion.div
					variants={iconVariants(2.3)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-3 border-white-800 p-4"
				>
					<FaNodeJs className="text-6xl text-green-400" />
				</motion.div>
				<motion.div
					variants={iconVariants(2.7)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-3 border-white-800 p-4"
				>
					<SiNumpy className="text-6xl text-white-800" />
				</motion.div>
				<motion.div
					variants={iconVariants(3.3)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-3 border-white-800 p-4"
				>
					<RiTailwindCssFill className="text-6xl text-cyan-500" />
				</motion.div>
			</div>
		</div>
	);
};

export default Technologies;
