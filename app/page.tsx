// HomePage.js
"use client";

import Navbar from "@/app/component/header/navbar/Navbar";
import Choose from "./component/LandingPage/Choose";
import CulinaryInspiration from "./component/LandingPage/CulinaryInspirations";
import CustomerReview from "./component/LandingPage/CustomerReview";
import Hero from "./component/LandingPage/Hero";
import Ourservices from "./component/LandingPage/OurService";
import RecipeVisuals from "./component/LandingPage/RecipeVisuals";
import Spice from "./component/LandingPage/Spice";
import Footer from "@/app/component/footer/Footer";
import FooterMobile from "./component/footer/FooterMobile";
import FooterTab from "./component/footer/FooterTab";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, } from "@/features/products/productsSlice";
import SearchProductResults from "./component/Spice/SearchProductResult";

const PageContent = () => {
  const dispatch = useDispatch();
  const { products, searchResults, searchTerm } = useSelector((state: RootState) => state.products);

  const handleSearch = (query: string) => {
    dispatch(setSearchTerm(query));
  };

  return (
    <div className="px-0">
      <Navbar onSearch={handleSearch}/>
      {searchTerm ? (
        <SearchProductResults results={searchResults} />
      ) : (
        <>
          <Hero />
          <Choose />
          <Spice />
          <CulinaryInspiration />
          <Ourservices />
          <CustomerReview />
          <RecipeVisuals />
        </>
      )}
      <Footer />
      <FooterMobile />
      <FooterTab />
    </div>
  );
};

export default function Page() {
  return (
        <PageContent />
  );
}
