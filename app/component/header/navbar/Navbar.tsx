"use client"

import React, { useState, useEffect } from "react";
import Logo from "../logo/Logo";
import Links from "../links/Links";
import OtherLinks from "../links/OtherLinks";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("bg-white");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);

      if (currentScrollPosition > 100) {
        setNavbarColor("bg-lightGreen");
      } else {
        setNavbarColor("bg-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${navbarColor} hover:bg-lightGreen fixed top-0 w-[100%] transition duration-300`}
    >
      <div className="flex items-center justify-between py-6 px-[6rem]">
        <Logo />
        <Links />
        <OtherLinks />
      </div>
    </div>
  );
};

export default Navbar;