import Loading from "@/app/loading";
import { Fragment, Suspense } from "react";
import Image from "next/image";
import BodyWrapper from "@/app/component/layout/BodyWrapper";
import Link from "next/link";
import Spice from "@/app/component/LandingPage/Spice";
import SpiceTitle from "@/app/component/Spice/SpiceTitle";

const getRecipe = async (id: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPE_API_ROUTE}/${id}`);
  if (!res.ok) {
    throw new Error("Error getting single recipe api data");
  }
  return res.json();
};

export const generateMetadata = async ({ params }: any) => {
  const { id } = params;
  const recipe = await getRecipe(id);
  return {
    title: recipe.title,
    description: recipe.description,
  };
};

export default async function Page({ params }: any) {
  const { id } = params;
  const recipe = await getRecipe(id);
  return (
    <BodyWrapper>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
          <li>All Recipes</li>
          <li>{recipe.title}</li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <Suspense fallback={<Loading />}>
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={400}
            height={300}
            loading="lazy"
            className="rounded-xl"
          />
        </Suspense>
        <div>
        <SpiceTitle title={recipe.title}/>
        <p>{recipe.description}</p>
        <h3 className="font-bold py-3 text-3xl">Ingredients:</h3>
        <ul className="list-disc m-2">
          {recipe.ingredients.map((ingredient: string, index: number) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="font-bold py-3 text-3xl">Method:</h3>
        <ol>
          {recipe.method.map((step: string, index: number) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      </div>
      <Spice />
    </BodyWrapper>
  );
}
