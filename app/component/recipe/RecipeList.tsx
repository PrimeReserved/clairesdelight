"use client";

import BodyWrapper from "@/app/component/layout/BodyWrapper";
import Pagination from "@/app/component/pagination/Pagination";
import RecipeCard from "@/app/component/recipe/RecipeCard";
import { Recipe } from "@/typings";
import { RootState, AppDispatch  } from "@/store";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Suspense, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEmptyArray from "@/helper/isEmptyArray";
import { fetchRecipes } from "@/features/recipes/recipesSlice";

const ITEMS_PER_PAGE = 10;

const RecipeList: any = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recipes, loading, error } = useSelector((state: RootState) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      Loading.pulse();
    } else {
      Loading.remove();
    }
  }, [loading]);

  useEffect(() => {
    setTotalPages(Math.ceil(recipes.length / 10));
  }, [recipes]);

  isEmptyArray({
    recipes,
    currentPage,
    loading,
    error
  });

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
  );
}

export default RecipeList;