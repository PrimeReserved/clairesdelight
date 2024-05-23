import React from "react";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import Image from "next/image";
import Slide from "@/public/image/landing-page/Slide.svg"

function Choose() {
  return (
    <div className="mt-10">
      <Title>{"Why Choose Us"} </Title>
      <Paragraph>
        {
          "At our spice website, we prioritize quality, flavor, and purity, ensuring each product adds an exceptional touch to your dishes"
        }{" "}
      </Paragraph>
      <div className="flex justify-between flex-col-reverse md:flex-row items-center mx-10 xl:mx-16 mt-7 gap-8 md:gap-0">
        <p className=" md:w-[304px] lg:w-[471px] text-[13px] md:text-[12px] lg:text-[13px] xl:text-[15px] leading-[14px] lg:leading-[24px]  text-center md:text-start  ">
          In every jar and packet from Claire&apos;s Delight, you&apos;ll find
          more than just spices. You&apos;ll find a commitment to excellence.
          Each herb and spice is selected with the utmost care, ensuring they
          are not only rich in flavor but also adhere to the highest standards
          of hygiene and quality. Our selection process is rigorous, and we
          pride ourselves on providing products that are not only vibrant and
          flavorful but also free from chemicals and additives. With Claire&apos;s
          Delight, you&apos;re not just enhancing your meals; you&apos;re choosing a
          healthier, more vibrant lifestyle.
        </p>
        <Image src={Slide} alt="Slide" width={600} height={600} className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] " />
      </div>
    </div>
  );
}

export default Choose;
