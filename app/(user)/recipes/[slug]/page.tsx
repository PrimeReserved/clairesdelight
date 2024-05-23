import Loading from '@/app/loading';
import { Fragment, Suspense } from 'react'
import Image from "next/image"

const getRecipe = async (id: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPE_API_ROUTE}/${id}`);
  if(!res.ok){
    throw new Error("Error getting single recipe api data")
  }
  console.log(`Get single post api: ${res}`)
  return res.json();
};


export const generateMetadata = async ({ params }: any) => {
  const { id } = params;
  const recipe = await getRecipe(id);
  return {
    title: recipe.title,
    description: recipe.description
  };
};


export default async function Page({ params }:any) {
  const { id } = params;
  const recipe = await getRecipe(id)
  return (
    <Fragment>
    <h2>{recipe.title}</h2>
    <Suspense fallback={<Loading />}>
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={400}
        height={300}
        loading="lazy"
      />
    </Suspense>
    <p>{recipe.description}</p>
    <h3>Ingredients</h3>
    <ul>
      {recipe.ingredients.map((ingredient: string, index: number) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
    <h3>Method</h3>
    <ol>
      {recipe.method.map((step: string, index: number) => (
        <li key={index}>{step}</li>
      ))}
    </ol>
  </Fragment>
  )
}
