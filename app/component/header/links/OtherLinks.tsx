import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

function OtherLinks() {
  return (
    <div className="flex gap-10 items-center">
      <div className="flex space-x-10">
        <div className="relative">
          <HiOutlineShoppingCart className="text-[1.6rem] " />
          <div className="bg-green hover:text-red text-[8px] text-white flex justify-center rounded-full absolute top-0 right-0 h-3 w-3">
            0
          </div>
        </div>
        <IoSearch className="text-[1.6rem]" />
      </div>

      <button className="btn px-10 bg-orange border-none text-white font-normal hover:bg-orange">
        Contact Us
      </button>
    </div>
  );
}

export default OtherLinks;
