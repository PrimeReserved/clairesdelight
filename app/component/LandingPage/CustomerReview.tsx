import React from "react";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import PageButton from "../button/PageButton";

function CustomerReview() {
  return (
    <div>
      <Title>{"Customer's Review"} </Title>
      <Paragraph>
        {
          "Explore our diverse spice collection sourced from around the globe, each ingredient carefully chosen for its exceptional quality and distinctive taste"
        }
      </Paragraph>
      <div className=" py-10  md:py-[5rem] flex flex-col justify-center items-center md:mx-[5rem] ">
        <div className=" w-[379px] md:w-[666px] lg:w-[791px] h-[175px] md:h-[215px] border-[1px] border-green shadow-md rounded-lg relative "></div>
        <div className=" w-[332px] md:w-[553px] lg:w-[658px] h-[230px] md:h-[315px] border-[1px] border-green shadow-md rounded-lg absolute z-10  bg-white"></div>
        <div className="absolute w-[247px] md:w-[458px] z-20">
          <p className=" text-xs lg:text-sm text-center  ">
            I never knew cooking could be this fun! Thanks to Claire&apos;s
            Delight spices, I&apos;ve been able to impress my family with
            delicious meals every night. They add such amazing flavor to
            everything I make.
          </p>
          <h4 className=" font-bold flex justify-center pt-5 md:pt-10 ">MaryAnn Ruth</h4>
        </div>
      </div>
      <PageButton />
    </div>
  );
}

export default CustomerReview;
