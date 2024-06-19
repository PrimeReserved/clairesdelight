"use client";

import Banner from "@/app/component/banner/Banner";
import { recipeBanner } from "@/public/image/cdn/cdn";
import ErrorBoundary from "@/app/component/ErrorBoundary";
import RecipeList from "@/app/component/recipe/RecipeList";
import Footer from "@/app/component/footer/Footer";
import FooterMobile from "@/app/component/footer/FooterMobile";
import FooterTab from "@/app/component/footer/FooterTab";
import Navbar from "@/app/component/header/navbar/Navbar";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "@/features/products/productsSlice";
import SearchProductResults from "@/app/component/Spice/SearchProductResult";

export default function Page() {
  const dispatch = useDispatch();
  const { products, searchResults, searchTerm } = useSelector(
    (state: RootState) => state.products
  );

  const handleSearch = (query: string) => {
    dispatch(setSearchTerm(query));
  };

  return (
    <>
      <Navbar onSearch={handleSearch} spices={products} />
      {searchTerm ? (
        <SearchProductResults results={searchResults} />
      ) : (
        <>
          <Banner
            image={recipeBanner}
            title={`Recipes`}
            subtitle={`Find delicious recipes for every occasion with complete easy-to-follow
         instructions and helpful tips to elevate your home cooking experience`}
          />
          <ErrorBoundary>
            <RecipeList />
          </ErrorBoundary>
        </>
      )}
      <Footer />
      <FooterMobile />
      <FooterTab />
    </>
  );
}
