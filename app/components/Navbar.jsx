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
import { TRUE } from "sass";
import { useCallback } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Experience", "Projects"];

  const handleScroll = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
          <a
            onClick={() => handleScroll("top")}
            style={{ cursor: "pointer", color: "var(--foreground-color)" }}
          >
            Home
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            onClick={() => handleScroll("languages")}
            style={{ cursor: "pointer", color: "var(--foreground-color)" }}
          >
            Languages
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            onClick={() => handleScroll("experience")}
            style={{ cursor: "pointer", color: "var(--foreground-color)" }}
          >
            Experience
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            onClick={() => handleScroll("projects")}
            style={{ cursor: "pointer", color: "var(--foreground-color)" }}
          >
            Projects
          </a>
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
