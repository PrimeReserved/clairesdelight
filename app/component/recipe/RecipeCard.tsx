import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import SpiceTitle from "../Spice/SpiceTitle";
import Paragraph from "../typography/Paragraph";
import { FaArrowRightLong } from "react-icons/fa6";

export default function RecipeCard({ recipe }: any) {
  return (
    <div className="card md:w-[30rem] bg-base-100 shadow-xl rounded-b-3xl m-5">
      {/* <h2 className="text-4xl py-5 font-bold">{recipe.title}</h2> */}
      <Suspense fallback={<Loading />}>
        <figure>
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={700}
            height={500}
            loading="lazy"
          />
        </figure>
      </Suspense>
      <div className="m-5">
        <SpiceTitle title={recipe.title} />
        <p className="mt-5">{recipe.description}</p>
      </div>
      <div className="card-actions justify-center p-5">
        <Link href={`/recipes/${recipe._id}`}>
          <span className="flex gap-2 justify-center items-center">
            Read more
            <FaArrowRightLong />
          </span>
        </Link>
      </div>
    </div>
  );
}
