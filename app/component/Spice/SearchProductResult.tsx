"use client"

import { Product } from "@/typings";
import Link from "next/link";
import Footer from "../footer/Footer";
import FooterMobile from "../footer/FooterMobile";
import FooterTab from "../footer/FooterTab";
import Navbar from "../header/navbar/Navbar";
import BodyWrapper from "../layout/BodyWrapper";
import SpiceCard from "./SpiceCard";
import ProductFilter from "./ProductFilter";
import { setFilterCategory, setSortOption } from "@/features/products/productsSlice";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const SearchProductResults = ({ results }: { results: Product[] }) => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);


  const handleFilterChange = (category: any) => {
    dispatch(setFilterCategory(category));
  };

  const handleSortChange = (sortOption: any) => {
    dispatch(setSortOption(sortOption));
  };

  return (
    <div>
      <Navbar />
      <BodyWrapper>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/shop-spices">Shop Spices</Link>
            </li>
            <li>All Spices</li>
            
              {/* <li>{results[0].name}</li> */}
          </ul>
        </div>

        <h1 className="text-4xl font-bold py-8">Results for Garlic ({results.length})</h1>

        <h3 className="font-bold py-3">Filter By</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <ProductFilter onFilter={setFilteredProducts} />
          <div className="">
            {results.map((result: any, index: number) => (
              <div key={result._id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-5">
                <SpiceCard product={result} />
              </div>
            ))}
          </div>
        </div>
      </BodyWrapper>
      <Footer />
      <FooterMobile />
      <FooterTab />
    </div>
  );
};

export default SearchProductResults;