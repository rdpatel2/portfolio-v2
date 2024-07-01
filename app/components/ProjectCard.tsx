import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectCardsProps {
	title: string;
	image: StaticImageData;
	description: string;
}

const ProjectCard = ({ title, image, description }: ProjectCardsProps) => {
	return (
		<div
			className="flex flex-row"
			style={{
				margin: "2%",
				backgroundColor: "rgb(30, 30, 30)",
				color: "white",
				borderRadius: "10px",
				boxShadow: "0 4px 6px 0 rgba(99, 102, 119)",
				textAlign: "center",
				width: "100%",
			}}
		>
			<Image
				className="w-48 h-60 object-cover object-center"
				src={image}
				alt="avatar"
				style={{
					height: "20%",
					width: "20%",
					borderRadius: "20px",
					margin: "4%",
				}}
			/>
			<div
				className="p-4"
				style={{ textAlign: "center", height: "20%", width: "fit-content" }}
			>
				<h1 className="text-3xl" style={{ paddingBottom: "10px" }}>
					{title}
				</h1>
				<p className="text-1xl">{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
