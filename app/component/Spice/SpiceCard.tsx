import React from "react";
import Garlic from "@/public/image/landing-page/garlic.svg";
import Ginger from "@/public/image/landing-page/ginger.svg";
import Tumeric from "@/public/image/landing-page/tumeric.svg";
import Nutmeg from "@/public/image/landing-page/nutmeg.svg";
import BlackPepper from "@/public/image/landing-page/black-pepper.svg";
import Cinnamon from "@/public/image/landing-page/cinammon.svg";
import Image from "next/image";

function SpiceCard() {
  const links = [
    {
      pic: Garlic,
      spiceName: "Ground Garlic",
      price: "₦10,000",
    },
    {
      pic: Ginger,
      spiceName: "Ground Ginger",
      price: "₦15,000",
    },
    {
      pic: Tumeric,
      spiceName: "Ground Tumeric",
      price: "₦12,000",
    },
    {
      pic: Nutmeg,
      spiceName: "Ground Nutmeg",
      price: "₦20,000",
    },
    {
      pic: BlackPepper,
      spiceName: "Ground Black Pepper",
      price: "₦10,000",
    },
    {
      pic: Cinnamon,
      spiceName: "Ground Cinnamon",
      price: "₦11,000",
    },
  ];
  return (
    <div className="flex justify-center items-center mt-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {links.map((spice) => (
          <div
            className="card card-compact w-[20rem] lg:w-[18rem] xl:w-[20rem] bg-base-100 shadow-md border-[1px] "
            key={spice.spiceName}
          >
            <figure>
              <Image src={spice.pic} alt="Spice" width={391} height={248} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-customBlack font-bold text-[20px] py-3">
                {spice.spiceName}
              </h2>
              <div className="card-actions flex justify-between items-center">
                <p className="text-customBlack font-bold text-[25px] ">
                  {spice.price}
                </p>
                <button className="btn font-light text-white bg-orange w-[130px] hover:bg-green border-none">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpiceCard;
