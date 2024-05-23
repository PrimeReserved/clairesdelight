import RecipeCard from '@/app/component/recipe/RecipeCard';
import Loading from '@/app/loading';
import { Recipe } from '@/typings';
import {Suspense} from 'react'


const getRecipes = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPE_API_ROUTE}`, { next: { revalidate: 3600 }});
  if (!res.ok) {
    throw new Error("Something happened while getting recipes!");
  }
  const data = await res.json();
  return data;
};

export default async function Page() {
  const recipes = await getRecipes();

  if (!Array.isArray(recipes) || recipes.length === 0) {
    return (
      <p>No recipes available</p>
    );
  }

  return (
    <>
    <div  className="text-5xl">Recipes</div>
    <section className="p-10">
        {
          recipes.map((recipe: Recipe) => (
            <Suspense key={recipe._id} fallback={<Loading />}>
              <RecipeCard recipe={recipe} />
            </Suspense>
          ))
        }
      </section>
    </>
  )
}
