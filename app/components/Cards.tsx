import { url } from "inspector";
import { Url } from "next/dist/shared/lib/router/router";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardsProps {
	title: string;
	image: StaticImageData;
	description: string;
}

const Card = ({ title, image, description }: CardsProps) => {
	return (
		<div
			className="card-container"
			style={{
				margin: "2%",
				backgroundColor: "rgb(30, 30, 30)",
				color: "white",
				borderRadius: "10px",
				boxShadow: "0 4px 6px 0 rgba(99, 102, 119)",
				paddingBottom: "30px",
			}}
		>
			<div
				className="p-4"
				style={{ textAlign: "center", height: "150px", width: "175px" }}
			>
				<h1 className="text-3xl" style={{ paddingBottom: "10px" }}>
					{title}
				</h1>
				<p className="text-1xl">{description}</p>
			</div>
			<Image
				fill={true}
				className="w-26 h-30 object-cover object-center"
				src={image}
				alt="avatar"
				style={{
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: "-10px",
				}}
			/>
		</div>
	);
};

export default Card;
