import Image from "next/image";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph"
import Loading from "@/app/loading";
import { Suspense } from "react";



export default function Banner(){

    return (
        <div className="h-96 flex justify-center items-center">
            <div>
                <Suspense fallback={<Loading />}>
                <Image
                  src={`https://res.cloudinary.com/dzd51q99i/image/upload/v1716383849/clairesdelight/shop-spices/banner/Shop_Spice_1_cltiwp.png`}
                  alt="banner"
                  width={400}
                  height={300}
                  loading="lazy"
                />
                </Suspense>
            </div>
            <div>
                <Title>Shop Spices</Title>
                <Paragraph>
                    {`Check out our spice shop for all your cooking needs. 
                      Find the perfect flavors to make your meals delicious`}
                </Paragraph>
            </div>
        </div>
    );
}

// banner logo
// https://res.cloudinary.com/dzd51q99i/image/upload/v1717191258/clairesdelight/logo/Claire_s_Delight_Logo_PNG_2_ixjelq.png