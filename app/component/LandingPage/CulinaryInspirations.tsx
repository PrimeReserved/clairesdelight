import Link from "next/link";
import Button from "../button/Button";
import BodyWrapper from "../layout/BodyWrapper";
import Paragraph from "../typography/Paragraph";
import CulinaryTitle from "../typography/CulinaryTitle";
import Image from "next/image";

export default function CulinaryInspiration() {
  return (
    <div className="h-[50rem p-5">
      <BodyWrapper>
        <div className="bg-lightGreen">
        <CulinaryTitle>Our Culinary Inspirations </CulinaryTitle>
        <Paragraph>
          Unleash your inner chef with our easy-to-follow recipes and spice up
          your culinary selection with exciting new flavours
        </Paragraph>
        <div className="grid grid-cols-2 gap-4 overflow-hidden  items-center">
          <Image
            src="https://res.cloudinary.com/dzd51q99i/image/upload/v1716381751/clairesdelight/landing-page/culinary-inspirations/Recipe_Image_ybmfed.png"
            alt="culinary"
            width={600}
            height={600}
            style={{
              borderRadius: "50% 50% 50% 0",
              position: "relative",
              bottom: "-47px",
              left: "-23px"
            }}
          />

          <div>
            <p className="text-justify w-[331px]  md:w-[523px]">
              Explore our &#34;Recipe&#34; section, your go-to destination for
              mouthwatering recipes and cooking tips. From simple weeknight
              dinners to impressive feasts, we provide step-by-step guidance on
              how to create flavoured dishes using our spices. Whether
              you&#39;re a seasoned chef or just starting out in the kitchen,
              our detailed instructions and helpful hints will inspire
              confidence and creativity in every meal you make.
            </p>

            <div className="mt-10">
              <Link href="/recipes">
                <Button
                  className="btn bg-orange border-none text-white font-normal text-xs hover:bg-orange"
                  text="Explore Recipes"
                />
              </Link>
            </div>
          </div>
        </div>
        </div>
      </BodyWrapper>
    </div>
  );
}

// https://res.cloudinary.com/dzd51q99i/image/upload/v1717189992/clairesdelight/landing-page/culinary-inspirations/Recipe_1_rurwtc.png
