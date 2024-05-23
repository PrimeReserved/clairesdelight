import React from "react";
import Food from "@/public/image/recipe-visuals/Frame 1000004717.svg";
import Food1 from "@/public/image/recipe-visuals/brooke-lark-HlNcigvUi4Q-unsplash 1.svg";
import Food2 from "@/public/image/recipe-visuals/dr-muhammad-amer-77ItGP98s6g-unsplash 1.svg";
import Food3 from "@/public/image/recipe-visuals/casey-lee-awj7sRviVXo-unsplash 1.svg";
import Food4 from "@/public/image/recipe-visuals/kalyani-akella-vCNLO20cuwY-unsplash 1.svg";
import Food5 from "@/public/image/recipe-visuals/ke-vin-2fqMttbaDeI-unsplash 1.svg";
import Food6 from "@/public/image/recipe-visuals/ke-vin-szQFiGZH8wU-unsplash 1.svg";
import Food7 from "@/public/image/recipe-visuals/nathan-dumlao-IjovY65WQiE-unsplash 1.svg";
import Food8 from "@/public/image/recipe-visuals/shreyak-singh-0j4bisyPo3M-unsplash 1.svg";
import Food9 from "@/public/image/recipe-visuals/sigmund-nHq5a_XbIZ0-unsplash 1.svg";
import Title from "../typography/Title";
import Image from "next/image";
import Paragraph from "../typography/Paragraph";

function RecipeVisuals() {
  const links = [
    { pic: Food4 },
    { pic: Food1 },
    { pic: Food2 },
    { pic: Food3 },
    { pic: Food4 },
    { pic: Food5 },
    { pic: Food6 },
    { pic: Food7 },
    { pic: Food8 },
    { pic: Food9 },
  ];
  return (
    <div className="p-10 md:pt-[7rem] ">
      <Title>{"Recipe Visuals"} </Title>
      <Paragraph>
        {"Read what our satisfied customers have to say about their experience with our spices, and discover why they keep coming back for more."}
      </Paragraph>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xl:px-[6rem] md:px-[5rem] px-2 ">
        {links.map((link) => (
          <div key={link.pic} className=" ">
            <Image
              src={link.pic}
              alt="Food"
              width={235}
              height={259}
              className=" rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeVisuals;
