"use client"

import React, { useState, useEffect } from "react";
import Logo from "../logo/Logo";
import Links from "../links/Links";
import OtherLinks from "../links/OtherLinks";
import clsx from "clsx";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("bg-white");
  const [cartColor, setCartColor] = useState("bg-lightGreen")
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);

      if (currentScrollPosition > 100) {
        setNavbarColor("bg-lightGreen");
        setCartColor("bg-red")
      } else {
        setNavbarColor("bg-white");
        setCartColor("bg-lightGreen")
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      data-testid="navbar"
      className={clsx(
        `${navbarColor} hover:bg-lightGreen fixed top-0 w-[100%] transition duration-300 z-50`
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between py-6 xl:px-[6rem] lg:px-[3.5rem] px-[1.8rem]">
        <Logo />
        <Links />
        <OtherLinks hover={hover} navbarColor={navbarColor} cartColor={cartColor} /> 
      </div>
    </div>
  );
};

export default Navbar;