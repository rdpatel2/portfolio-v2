"use client";

import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button,
} from "@nextui-org/react";

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = ["Home", "Experience", "Projects"];

	return (
		<Navbar className="dark" onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="#top">
						Home
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="#experience" color="foreground">
						Experience
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#projects">
						Projects
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Button
						as={Link}
						color="primary"
						href="mailto:rohandvp@gmail.com"
						variant="flat"
					>
						Contact
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu className="dark">
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === 2
									? "primary"
									: index === menuItems.length - 1
									? "danger"
									: "foreground"
							}
							className="w-full"
							href="#"
							size="lg"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
