import Image from 'next/image'
import BodyWrapper from '@/app/component/layout/BodyWrapper'
import Slide from "@/public/image/landing-page/Slide.svg"
import dottedLine from '@/public/image/about-us/Dotted Lines.png'
import spiceImage from '@/public/image/about-us/about-spices.png'
import Subtitle from '@/app/component/typography/Subtitle'
import arrowIcon from "@/public/image/icons/Group 89.png"
import HeaderText from '@/app/component/typography/HeaderText'
import Button from '@/app/component/button/Button'
import Banner from '@/app/component/banner/Banner'
import { aboutBanner } from '@/public/image/cdn/cdn'

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
      <BodyWrapper>
      <div className="mt-10">
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
        <Image src={Slide} alt="Slide" width={600} height={600} className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] rounded-xl" />
      </div>
      {/* Our Mission and Vision  */}
      <div className="grid grid-col-1 md:grid-cols-2 gap-2">
        <div>
          <Subtitle
            icon={arrowIcon}
            title='Our Mission'
          />
          <p>
            At Claire#&39; Delight, our mission is to empower individuals to enhance their culinary experiences and improve thier overall well0being through
            the artful selection and use of herbs and spices. We strive to provide high-quality, flavourful, and chemical-free producs that inspire creativity
            in the kitchen and promote a healthier lifestyle.
          </p>
        </div>
        <div>
          <Subtitle
            icon={arrowIcon}
            title='Our Vision'
          />
          <p>
            Our Vision at Claire#&39; Delight is to become the go-to destination for individuals seeking to elevate their everday meals with the finest herbs and spices.
            We envision a world where every kitchen is fille with the aroma of freshly ground spices and every dining experience is a celebration of flavor and health. 
            Through continuous innovation, sustainable practices, and a commitment to excellence, we aim to inspire and delight customers around the globe.
          </p>
        </div>
      </div>

      {/* Our philosophy section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center items-center">
        <Image
          src={dottedLine}
          alt="dotted line"
          width={200}
          height={400}
        />
          
      </div>
      <div className='flex justify-around h-40 bg-orange'>
        <Image
          src={spiceImage}
          alt='spice image'
          height={400}
          width={300}
          className='rounded-md'
        />
        <div>
          <p>Thank you for letting is be a part of your culinary adventures and
            health journeys. here#&39;s to many more flavourful moments together.
          </p>
          <HeaderText>HAVE ANY QUESTION ABOUT US?</HeaderText>
        </div>
        <Button className='my-5' text='Contact Us' />
      </div>
    </div>
    </BodyWrapper>
    </div>
  )
}
