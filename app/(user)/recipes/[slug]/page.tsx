import Loading from "@/app/loading";
import { Suspense } from "react";
import Image from "next/image";
import BodyWrapper from "@/app/component/layout/BodyWrapper";
import Link from "next/link";
import Spice from "@/app/component/LandingPage/Spice";
import SpiceTitle from "@/app/component/Spice/SpiceTitle";
import { getRecipe } from "@/lib/data";
import Navbar from "@/app/component/header/navbar/Navbar";
import Footer from "@/app/component/footer/Footer";
import FooterMobile from "@/app/component/footer/FooterMobile";
import FooterTab from "@/app/component/footer/FooterTab";


export const generateMetadata = async ({ params }: any) => {
  const { id } = params;
  const recipe = await getRecipe(id);
  return {
    title: recipe?.slug,
    description: recipe?.description,
  };
};

export default async function Page({ params }: any) {
  const { slug } = params;
  const recipe = await getRecipe(slug);
  return (
    <>
        <Navbar />
      <BodyWrapper>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/recipes">Recipes</Link>
            </li>
            <li>All Recipes</li>
            <li>{recipe?.title}</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-20">
          <Suspense fallback={<Loading />}>
            <Image
              src={recipe?.image}
              alt={recipe?.title}
              width={800}
              height={500}
              loading="lazy"
              className="rounded-3xl"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Suspense>
          <div>
            <SpiceTitle title={recipe?.title} />
            <p>{recipe?.description}</p>
            <h3 className="font-bold py-3 text-3xl">Ingredients:</h3>
            <ul className="list-disc m-2">
              {recipe?.ingredients?.map((ingredient: string, index: number) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3 className="font-bold py-3 text-3xl">Method:</h3>
            <ol>
              {recipe?.method?.map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
        <Spice />
      </BodyWrapper>
      <Footer />
      <FooterMobile />
      <FooterTab />
    </>
  );
}
