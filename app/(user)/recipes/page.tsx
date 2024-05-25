"use client"

import Pagination from '@/app/component/pagination/Pagination';
import RecipeCard from '@/app/component/recipe/RecipeCard';
import Loading from '@/app/loading';
import { getRecipes } from '@/lib/data';
import { Recipe } from '@/typings';
import { Suspense, useState, useEffect } from 'react';

const ITEMS_PER_PAGE = 1;

export default function Page() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesData = await getRecipes();
      if (Array.isArray(recipesData) && recipesData.length > 0) {
        setRecipes(recipesData);
        setTotalPages(Math.ceil(recipesData.length / ITEMS_PER_PAGE));
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
    return (
      <p>No recipes available</p>
    );
  }

  return (
    <>
      <div className="text-5xl">Recipes</div>
      <section className="p-10">
        {getPaginatedRecipes().map((recipe: Recipe) => (
          <Suspense key={recipe._id} fallback={<Loading />}>
            <RecipeCard recipe={recipe} />
          </Suspense>
        ))}
      </section>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onNextPage={handleNextPage} 
        onPreviousPage={handlePreviousPage} 
      />
    </>
  );
}