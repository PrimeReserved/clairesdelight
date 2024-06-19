"use client";

import { useState, useEffect } from "react";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import Image from "next/image";
import {
  slideImageOne,
  slideImageTwo,
  slideImageThree,
} from "@/public/image/cdn/cdn";

const slides = [slideImageOne, slideImageTwo, slideImageThree];
const slideInterval = 10000;

function Choose() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-10">
      <Title>{"Why Choose Us"} </Title>
      <Paragraph>
        {
          "At our spice website, we prioritize quality, flavor, and purity, ensuring each product adds an exceptional touch to your dishes"
        }{" "}
      </Paragraph>
      <div className="flex justify-between flex-col-reverse md:flex-row items-center mx-10 xl:mx-16 mt-7 gap-8 md:gap-10">
        <p className=" md:w-[304px] lg:w-[500px] text-[13px] md:text-[12px] lg:text-[13px] xl:text-[15px] leading-[14px] lg:leading-[24px]  text-center md:text-start  ">
          In every jar and packet from Claire&apos;s Delight, you&apos;ll find
          more than just spices. You&apos;ll find a commitment to excellence.
          Each herb and spice is selected with the utmost care, ensuring they
          are not only rich in flavor but also adhere to the highest standards
          of hygiene and quality. Our selection process is rigorous, and we
          pride ourselves on providing products that are not only vibrant and
          flavorful but also free from chemicals and additives. With
          Claire&apos;s Delight, you&apos;re not just enhancing your meals;
          you&apos;re choosing a healthier, more vibrant lifestyle.
        </p>
        <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] relative overflow-hidden">
          <Image
            src={slides[currentSlide]}
            alt="Slide"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Choose;
