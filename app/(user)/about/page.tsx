import Image from "next/image";
import Link from "next/link";
import dottedLine from "@/public/image/about-us/Dotted Lines.png";
import spiceImage from "@/public/image/about-us/about-spices.png";
import Subtitle from "@/app/component/typography/Subtitle";
import arrowIcon from "@/public/image/icons/Group 89.png";
import HeaderText from "@/app/component/typography/HeaderText";
import Button from "@/app/component/button/Button";
import Banner from "@/app/component/banner/Banner";
import { aboutBanner, aboutImage } from "@/public/image/cdn/cdn";

export default function Page() {
  return (
    <div>
      <Banner
        image={aboutBanner}
        title={`About Us`}
        subtitle={`Learn more about our passion for spices, 
         and commitment to quality. Discover the story behind
         our journey to bring the finest flavours to your kitchen`}
      />
      {/* <BodyWrapper>
      <div className=""> */}
      <div className="flex justify-evenly flex-col-reverse md:flex-row items-center mx-10 xl:mx-16 mt-7 gap-8 md:gap-0">
        <p className=" md:w-[304px] lg:w-[471px] text-[13px] md:text-[12px] lg:text-[13px] xl:text-[15px] leading-[14px] lg:leading-[24px]  text-center md:text-start  ">
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
        <Image
          src={aboutImage}
          alt="Slide"
          width={600}
          height={300}
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] mb-5"
          style={{ borderRadius: '40%' }}
        />
      </div>
      {/* Our Mission and Vision  */}
      <div className="flex justify-center items-center">
        <div className="flex w-4/5 justify-between items-start gap-10">
          <div className="p-10">
            <Subtitle icon={arrowIcon} title="Our Mission" />
            <p className="pt-4">
              At Claire&apos; Delight, our mission is to empower individuals to
              enhance their culinary experiences and improve their overall
              well-being through the artful selection and use of herbs and
              spices. We strive to provide high-quality, flavourful, and
              chemical-free products that inspire creativity in the kitchen and
              promote a healthier lifestyle.
            </p>
          </div>
          <div className="p-10">
            <Subtitle icon={arrowIcon} title="Our Vision" />
            <p className="pt-4">
              Our Vision at Claire&apos; Delight is to become the go-to
              destination for individuals seeking to elevate their everyday
              meals with the finest herbs and spices. We envision a world where
              every kitchen is filled with the aroma of freshly ground spices
              and every dining experience is a celebration of flavor and health.
              Through continuous innovation, sustainable practices, and a
              commitment to excellence, we aim to inspire and delight customers
              around the globe.
            </p>
          </div>
        </div>
      </div>

      {/* Our philosophy section  */}
      <div className="flex flex-col justify-between items-center mt-[6rem]">
        <div className="flex justify-between items-start gap-10">
          <div className="flex justify-center items-center">
            <Image
              src={dottedLine}
              alt="dotted line"
              width={350}
              height={100}
            />
          </div>
          <div className="">
            <div>
              <div>
                <Subtitle icon={arrowIcon} title="Our Philosophy" />
                <p>Flavourful Journey For Healthy Living</p>
              </div>
            </div>
            <div className="pt-[18rem]">
              <div>
                <Subtitle icon={arrowIcon} title="Our Commitment" />
                <p>Quality, Flavour, and Purity</p>
              </div>
            </div>
            <div className="pt-[18rem]">
              <div>
                <Subtitle icon={arrowIcon} title="A heartfelt Thank You !!!" />
              </div>
            </div>
          </div>

          <div>
            <p className="w-[30rem]">
            As someone who has navigated the transformative path of health and wellness
            through mindful eating and a balanced diet, I understand the pivotal role of herbs
            and spices not just in flavoring our meals, but in enriching our health. 
            At Claire&apos;s Delight, we don&apos;t just offer spices; we offer keys to a healthier lifestyle. 
            Whether it&apos;s through our carefully crafted blends that bring out the best in every meal 
            or our specially formulated teas that soothe and rejuvenate, we&apos;re here to guide you on 
            a journey of culinary exploration and well-being.
            </p>
            <p className="w-[30rem] mt-[10rem]">
            In every jar and packet from Claire&apos;s Delight, you&apos;ll find more than just spices. 
            You&apos;ll find a commitment to excellence. Each herb and spice is selected with the utmost care,
            ensuring they are not only rich in flavor but also adhere to the highest standards of hygiene and quality.
             Our selection process is rigorous, and we pride ourselves on providing products that are not only vibrant 
             and flavorful but also free from chemicals & additives. With Claire&apos;s Delight, you&apos;re not just 
             enhancing your meals; you&apos;re choosing a healthier, more vibrant lifestyle.
            </p>
            <p className="w-[30rem] mt-[9rem]">
            Choosing Claire&apos;s Delight is more than just a purchase; it&apos;s an entry into a community dedicated 
            to the art of flavorful and healthy living. Your trust, loyalty, and enthusiasm fuel our passion and commitment
            to excellence. Together, we&apos;re not just growing a brand; 
            we&apos;re nurturing a family of food enthusiasts and health-conscious individuals eager to explore the boundless
             possibilities of herbs and spices.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center h-[20rem] bg-orange relative m-20 rounded-xl">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-auto ml-20">
          <Image
            src={spiceImage}
            alt="spice image"
            height={800}
            width={500}
            className="rounded-md pl-10"
          />
        </div>
        <div className="flex flex-col justify-center items-start p-10 w-[35rem] ml-[38rem]">
          <p className="text-white py-5">
            Thank you for letting us be a part of your culinary adventures and
            health journeys. Here&apos;s to many more flavorful moments
            together.
          </p>
          <HeaderText>HAVE ANY QUESTIONS ABOUT US?</HeaderText>
          <Link href="/contact">
            <Button className="btn mt-10 text-white w-48" text="Contact Us" />
          </Link>
        </div>
      </div>

      {/* </div>
    </BodyWrapper> */}
    </div>
  );
}
