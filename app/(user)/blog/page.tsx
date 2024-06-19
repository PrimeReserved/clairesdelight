"use client";

import ErrorBoundary from "@/app/component/ErrorBoundary";
import PostList from "@/app/component/blog/PostList";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "@/features/products/productsSlice";
import SearchProductResults from "@/app/component/Spice/SearchProductResult";
import Navbar from "@/app/component/header/navbar/Navbar";
import Footer from "@/app/component/footer/Footer";
import FooterMobile from "@/app/component/footer/FooterMobile";
import FooterTab from "@/app/component/footer/FooterTab";

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
      <Navbar onSearch={handleSearch}/>
      {searchTerm ? (
        <SearchProductResults results={searchResults} />
      ) : (
          <ErrorBoundary>
            <PostList />
          </ErrorBoundary>
      )}
      <Footer />
      <FooterMobile />
      <FooterTab />
    </>
  );
}
