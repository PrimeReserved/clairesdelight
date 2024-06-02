import Image from "next/image";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph"
import Loading from "@/app/loading";
import { Suspense } from "react";


interface BannerProps {
    image: any;
    title: string;
    subtitle: string;
}


export default function Banner({ image, title, subtitle }: Readonly<BannerProps>){

    return (
        <div className="w-full h-[300px] pb-5 flex flex-col md:flex-row">
  <div className="relative w-full md:w-1/2 h-full overflow-hidden">
    <Suspense fallback={<Loading />}>
      <Image
        src={image}
        alt="banner"
        layout="fill"
        objectFit="cover"
        loading="lazy"
        className="custom-shape-left"
      />
    </Suspense>
  </div>
  <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start p-8">
    <Title>{title}</Title>
    <Paragraph>
      {subtitle}
    </Paragraph>
  </div>
</div>


    );
}

// banner logo
// https://res.cloudinary.com/dzd51q99i/image/upload/v1717191258/clairesdelight/logo/Claire_s_Delight_Logo_PNG_2_ixjelq.png