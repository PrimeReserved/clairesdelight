"use client";

import Banner from "@/app/component/banner/Banner";
import BodyWrapper from "@/app/component/layout/BodyWrapper";
import Pagination from "@/app/component/pagination/Pagination";
import RecipeCard from "@/app/component/recipe/RecipeCard";
import { getRecipes } from "@/lib/data";
import { recipeBanner } from "@/public/image/cdn/cdn";
import { Recipe } from "@/typings";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Suspense, useState, useEffect } from "react";

const ITEMS_PER_PAGE = 10;

export default function Page() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchRecipes = async () => {
      Loading.change("Loading %20");
      Loading.hourglass();

      try {
        const recipesData = await getRecipes();
        if (Array.isArray(recipesData) && recipesData.length > 0) {
          setRecipes(recipesData);
          setTotalPages(Math.ceil(recipesData.length / ITEMS_PER_PAGE));
        }
      } catch (error) {
        console.error(`Error fetching recipes: ${error}`);
      } finally {
        Loading.remove();
      }
    };

    fetchRecipes();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getPaginatedRecipes = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return recipes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  if (!recipes.length) {
    return <p>No recipes available</p>;
  }

  return (
    <>
      <Banner 
         image={recipeBanner}
         title={`Recipes`}
         subtitle={`Find delicious recipes for every occasion with complete easy-to-follow
         instructions and helpful tips to elevate your home cooking experience`}
       />
      <BodyWrapper>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 xl:grid-cols-2">
            {getPaginatedRecipes().map((recipe: Recipe) => (
              <Suspense key={recipe._id}>
                <RecipeCard recipe={recipe} />
              </Suspense>
            ))}
          </div>
        </div>

        <div className="pt-5">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
        </div>
      </BodyWrapper>
    </>
  );
}
