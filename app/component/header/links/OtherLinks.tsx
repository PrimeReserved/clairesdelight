import React, { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearch, IoMenu } from "react-icons/io5";
import SideNavbar from "../navbar/SideNavbar";
import Link from "next/link";

interface OtherLinksProps {
  hover: boolean;
  navbarColor: string;
}

const OtherLinks: React.FC<OtherLinksProps> = ({ hover, navbarColor }) => {
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  const handleMenuClick = () => {
    setShowSideNavbar(true);
  };

  const handleSideNavbarClose = () => {
    setShowSideNavbar(false);
  };

  return (
    <div className="flex xl:gap-10 lg:gap-4 items-center gap-4">
      <div className="flex xl:space-x-10 lg:space-x-4 space-x-3">
        <div className="relative">
          <HiOutlineShoppingCart className="text-[1.6rem]" />
          <div
            className={`bg-[${hover ? "#FF0000" : "lightGreen"}] bg-[${
              navbarColor ? "lightGreen" : "#FF0000"
            }] bg-lightGreen text-[8px] text-white flex justify-center rounded-full absolute top-0 right-0 h-3 w-3`}
          >
            0
          </div>
        </div>
        <IoSearch className="text-[1.6rem]" />
      </div>

      <Link href="/contact">
        <button className="btn xl:px-10 lg:px-5 py-1 bg-orange border-none text-white font-normal lg:text-[12px] hover:bg-orange hidden md:flex">
          Contact Us
        </button>
      </Link>

      <IoMenu
        className="flex md:hidden text-[1.8rem]"
        onClick={handleMenuClick}
      />
      {showSideNavbar && <SideNavbar onClose={handleSideNavbarClose} />}
    </div>
  );
};

export default OtherLinks;