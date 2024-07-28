"use client";

import { useDebouncedCallback } from 'use-debounce';
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import BodyWrapper from "@/app/component/layout/BodyWrapper";
import SpiceTitle from "@/app/component/Spice/SpiceTitle";

import { IoSearch } from "react-icons/io5";
import Pagination from "@/app/component/pagination/Pagination";
import SpiceCard from "@/app/component/Spice/SpiceCard";
import { Product } from "@/typings";
import { AppDispatch, RootState } from "@/store";
import isEmptyArray from "@/helper/isEmptyArray";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setFilterCategory, setSortOption, setSearchTerm, updateSearchTerm } from "@/features/products/productsSlice";
import ProductFilter from "./ProductFilter";
import SpiceCardNotProduct from './SpiceCardNotFound';

const ITEMS_PER_PAGE = 12;

const SpiceList: any = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, searchTerm, loading, error, filterCategory, sortOption } = useSelector((state: RootState) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [inputValue, setInputValue] = useState(searchTerm || '');
  const searchRef = useRef<HTMLDivElement>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);



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

  const handleSearchClick = () => {
    setShowSearchInput(true);
  };

  const debouncedHandleSearchChange = useDebouncedCallback(
    (value) => {
      dispatch(updateSearchTerm(value));
      localStorage.setItem('searchTerm', value);
    },
    500 // Debounce delay in milliseconds
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newSearchTerm = event.target.value;
    setInputValue(newSearchTerm);
    debouncedHandleSearchChange(newSearchTerm);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const memoizedProducts = useMemo(() => filteredProducts, [filteredProducts]);

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
        <ProductFilter onFilter={setFilteredProducts} />
        <div className="pt-10 px-10">
          <div className="flex justify-between">
            <SpiceTitle title={`All Spice (${products.length})`} />
            <div className="relative" ref={searchRef}>
              {showSearchInput ? (
                <div className="flex items-center relative">
                  <input
                    id="navbar-search-input"
                    type="text"
                    name="search"
                    className="w-[10rem] h-7 pl-3 pr-10 rounded-2xl grow border border-secondaryGrey focus:outline-none focus:ring-1 focus:ring-secondaryGrey transition"
                    placeholder="Search"
                    value={inputValue}
                    onChange={handleSearchChange}
                  />
                  <IoSearch className="absolute right-3 h-5 w-5" />
                </div>
              ) : (
                <IoSearch
                  className="text-[1.6rem] cursor-pointer transition-transform"
                  onClick={handleSearchClick}
                />
              )}
            </div>
          </div>
          <div className="flex justify-center items-center mt-5 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {getPaginatedProducts().length > 0 ? (
                getPaginatedProducts().map((product: Product) => (
                  <Suspense key={product._id}>
                    <SpiceCard product={product} />
                  </Suspense>
                ))
              ) : (
                <Suspense>
                  <SpiceCardNotProduct />
                  <SpiceCardNotProduct />
                </Suspense>
              )}
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