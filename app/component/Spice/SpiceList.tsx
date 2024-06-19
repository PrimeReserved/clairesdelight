"use client";

import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Suspense, useEffect, useMemo, useState } from "react";
import BodyWrapper from "@/app/component/layout/BodyWrapper";
import SpiceTitle from "@/app/component/Spice/SpiceTitle";

import { IoSearch } from "react-icons/io5";
import Pagination from "@/app/component/pagination/Pagination";
import SpiceCard from "@/app/component/Spice/SpiceCard";
import { Product } from "@/typings";
import { AppDispatch, RootState } from "@/store";
import isEmptyArray from "@/helper/isEmptyArray";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setFilterCategory, setSortOption } from "@/features/products/productsSlice";
import ProductFilter from "./ProductFilter";

const ITEMS_PER_PAGE = 12;

const SpiceList: any = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error, filterCategory, sortOption } = useSelector((state: RootState) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      Loading.pulse();
    } else {
      Loading.remove();
    }
  }, [loading]);

  useEffect(() => {
    setTotalPages(Math.ceil(products.length / 4));
  }, [products]);

  isEmptyArray({
    products,
    currentPage,
    loading,
    error
  });

  const handleFilterChange = (category: any) => {
    dispatch(setFilterCategory(category));
    // Reset current page to 1 when filter changes
    setCurrentPage(1);
  };

  const handleSortChange = (sortOption: any) => {
    dispatch(setSortOption(sortOption));
    // Reset current page to 1 when sort option changes
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const memoizedProducts = useMemo(() => products, [products]);

  const getPaginatedProducts = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return memoizedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  if (!Array.isArray(products) || products.length === 0) {
    return null;
  }

  return (
      <BodyWrapper>
        <div className="flex justify-center">
        <ProductFilter onFilter={handleFilterChange} onSortChange={handleSortChange} />
          <div className="pt-10 px-10">
            <div className="flex justify-between">
              <SpiceTitle title={`All Spice (${products.length})`} />
              <IoSearch className="w-10 h-10 pt-2" />
            </div>
            <div className="flex justify-center items-center mt-5 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {getPaginatedProducts().map((product: Product) => (
                  <Suspense key={product._id}>
                    <SpiceCard product={product} />
                  </Suspense>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Pagination  */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      </BodyWrapper>
  );
}

export default SpiceList;