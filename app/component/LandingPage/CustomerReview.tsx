"use client"

import {useEffect, useState} from "react";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import PageButton from "../button/PageButton";

const getCustomerReview = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CUSTOMER_REVIEW_API_ROUTE}`, { next: { revalidate: 3600 }});
  if (!res.ok) {
    throw new Error("Something happened while getting customer reviews!");
  }
  const data = await res.json();
  return data;
};

function CustomerReview() {
  const [customerReviews, setCustomerReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCustomerReview();
        setCustomerReviews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % customerReviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + customerReviews.length) % customerReviews.length);
  };

  if (customerReviews.length === 0) {
    return <div>No customer review</div>;
  }

  const { name, description } = customerReviews[currentIndex];

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
            {description}
          </p>
          <h4 className=" font-bold flex justify-center pt-5 md:pt-10 ">{name}</h4>
        </div>
      </div>
      <PageButton onNext={handleNext} onPrev={handlePrev} />
    </div>
  );
}

export default CustomerReview;
