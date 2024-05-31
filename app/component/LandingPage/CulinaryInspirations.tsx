import Button from "../button/Button";
import BodyWrapper from "../layout/BodyWrapper";
import Paragraph from "../typography/Paragraph";
import Title from "../typography/Title";
import Image from "next/image";



export default function CulinaryInspiration(){

    return (
       <>
        <BodyWrapper>
            <Title>Our Culinary Inspirations </Title>
            <Paragraph>
                Unleash your inner chef with our easy-to-follow recipes 
                and spice up your culinary selection with exciting new flavours
            </Paragraph>
            <div className="flex justify-center">
                <div>
                <Image
                  src={`https://res.cloudinary.com/dzd51q99i/image/upload/v1716381751/clairesdelight/landing-page/Recipe_Image_ybmfed.png`}
                  alt='culinary'
                  width={400}
                  height={400}
                />
                </div>
                <div>
                    <Paragraph>
                        Explore our &#34;Recipe&#34; section, your go-to destination for
                        mouthwatering recipes and cooking tips. From simple weeknight
                        dinners to impressive feasts, we provide step-by-step guidance on
                        how to create flavoured dishes using our spices. Whether you#&39;re a 
                        seasoned chef or just starting out in the kitchen, our detailed
                        instructions and helpful hints will inspire confidence and creativity
                        in every meal you make.
                    </Paragraph>

                    <div className="mt-10">
                        <Button
                            className=""
                            text="Explore Recipes"
                        />
                    </div>
                </div>
            </div>
        </BodyWrapper>
       </>
    );
}