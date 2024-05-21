import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function PageButton() {
  return (
    <div className="flex gap-10 justify-center mt-5">
      <div className="w-[30px] h-[30px] rounded-full bg-orange flex justify-center items-center ">
        <FaArrowLeft className=" text-white " />
      </div>
      <div className="w-[30px] h-[30px] rounded-full bg-orange flex justify-center items-center ">
        <FaArrowRight className="text-white" />
      </div>
    </div>
  );
}

export default PageButton;
