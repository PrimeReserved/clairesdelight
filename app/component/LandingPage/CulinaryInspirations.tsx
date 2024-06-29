import Link from "next/link";
import Button from "../button/Button";
import BodyWrapper from "../layout/BodyWrapper";
import Paragraph from "../typography/Paragraph";
import Title from "../typography/Title";
import Image from "next/image";

export default function CulinaryInspiration() {
  return (
    <div className="bg-lightGreen h-[40rem]">
      <BodyWrapper>
        <Title>Our Culinary Inspirations </Title>
        <Paragraph>
          Unleash your inner chef with our easy-to-follow recipes and spice up
          your culinary selection with exciting new flavours
        </Paragraph>
        <div className="flex justify-center items-center gap-20 relative">
        {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}> */}
  <Image
    src="https://res.cloudinary.com/dzd51q99i/image/upload/v1716381751/clairesdelight/landing-page/Recipe_Image_ybmfed.png"
    alt="culinary"
    width={600}
    height={600}
    style={{
      borderRadius: '50%',
      position: 'relative',
      left: '-100px', // Adjust this value as needed
    }}
  />
{/* </div> */}

          <div>
            <p className="text-xs  text-justify w-[331px]  md:w-[523px] ">
              Explore our &#34;Recipe&#34; section, your go-to destination for
              mouthwatering recipes and cooking tips. From simple weeknight
              dinners to impressive feasts, we provide step-by-step guidance on
              how to create flavoured dishes using our spices. Whether
              you#&39;re a seasoned chef or just starting out in the kitchen,
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
      </BodyWrapper>
    </div>
  );
}
