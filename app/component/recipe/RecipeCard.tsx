import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { Fragment, Suspense } from "react";

export default function RecipeCard({ recipe }: any) {
  return (
    <Fragment>
      <h2 className="text-4xl py-5 font-bold">{recipe.title}</h2>
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
      <h3 className="text-3xl">Ingredients</h3>
      <ul className="list-disc p-5">
        {recipe.ingredients.map((ingredient: string, index: number) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="text-3xl">Method</h3>
      <ol>
        {recipe.method.map((step: string, index: number) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <Link href={`/recipes/${recipe._id}`}>
        <button className="btn">Read more</button>
      </Link>
    </Fragment>
  );
}
