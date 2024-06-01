import React, { Suspense } from "react";
import Title from "../typography/Title";
import Image from "next/image";
import Paragraph from "../typography/Paragraph";
import Loading from "@/app/loading";
import BodyWrapper from "../layout/BodyWrapper";


function RecipeVisuals() {
  const links = [
    "https://res.cloudinary.com/dzd51q99i/image/upload/v1716382020/clairesdelight/recipes/recipe-visual/ke-vin-szQFiGZH8wU-unsplash_1_pzr4u8.png",
    "https://res.cloudinary.com/dzd51q99i/image/upload/v1716382018/clairesdelight/recipes/recipe-visual/nathan-dumlao-IjovY65WQiE-unsplash_1_y5uy0p.png",
    "https://res.cloudinary.com/dzd51q99i/image/upload/v1716382020/clairesdelight/recipes/recipe-visual/ke-vin-szQFiGZH8wU-unsplash_1_pzr4u8.png",
    "https://res.cloudinary.com/dzd51q99i/image/upload/v1716382267/clairesdelight/recipes/recipe-visual/Frame_1000004720_uiclqe.png",
    "https://res.cloudinary.com/dzd51q99i/image/upload/v1716382266/clairesdelight/recipes/recipe-visual/Frame_1000004721_qsuoli.png",
    "https://res.cloudinary.com/dzd51q99i/image/upload/v1716382787/clairesdelight/recipes/recipe-visual/anna-pelzer-IGfIGP5ONV0-unsplash_1_zwhdmz.png",
    "https://res.cloudinary.com/dzd51q99i/image/upload/v1716382858/clairesdelight/recipes/recipe-visual/Frame_1000004719_2_ku9yv8.png",
    "https://res.cloudinary.com/dzd51q99i/image/upload/v1716382729/clairesdelight/recipes/recipe-visual/Frame_1000004718_t0mbbd.png",
    "https://res.cloudinary.com/dzd51q99i/image/upload/v1716382965/clairesdelight/recipes/recipe-visual/casey-lee-awj7sRviVXo-unsplash_1_w3etse.png",
    "https://res.cloudinary.com/dzd51q99i/image/upload/v1716383041/clairesdelight/recipes/recipe-visual/Frame_1000004721_1_zhinrk.png"
  ];
  return (
    <BodyWrapper>
      <Title>{"Recipe Visuals"} </Title>
      <Paragraph>
        {"Read what our satisfied customers have to say about their experience with our spices, and discover why they keep coming back for more."}
      </Paragraph>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xl:px-[6rem] md:px-[5rem] px-2">
        {links.map((link) => (
          <div key={link} className=" ">
            <Suspense fallback={<Loading />}>
              <Image
                src={`${link}`}
                alt="Food"
                width={235}
                height={259}
                className=" rounded-xl"
              />
            </Suspense>
          </div>
        ))}
      </div>
    </BodyWrapper>
  );
}

export default RecipeVisuals;
