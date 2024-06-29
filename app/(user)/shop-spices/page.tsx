"use client";

import Banner from "@/app/component/banner/Banner";
import { spiceBanner } from "@/public/image/cdn/cdn";
import ErrorBoundary from "@/app/component/ErrorBoundary";
import Footer from "@/app/component/footer/Footer";
import FooterMobile from "@/app/component/footer/FooterMobile";
import FooterTab from "@/app/component/footer/FooterTab";
import Navbar from "@/app/component/header/navbar/Navbar";
import SpiceList from "@/app/component/Spice/SpiceList";
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
            image={spiceBanner}
            title={`Shop Spices`}
            subtitle={`Check out our spice shop for all your cooking needs. Find the perfect
          flavours to make your meals delicious`}
          />
          <ErrorBoundary>
            <SpiceList />
          </ErrorBoundary>
        </>
      )}
      <Footer />
      <FooterMobile />
      <FooterTab />
    </>
  );
}
