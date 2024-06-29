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
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";

const SearchProductResults = ({ results }: {results: Product[] }) => {
  const dispatch = useDispatch<AppDispatch>();
  
  const handleFilterChange = (category: any) => {
    dispatch(setFilterCategory(category));
    // Reset current page to 1 when filter changes
    // setCurrentPage(1);
  };

  const handleSortChange = (sortOption: any) => {
    dispatch(setSortOption(sortOption));
    // Reset current page to 1 when sort option changes
    // setCurrentPage(1);
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
                {/* <li>{result.name}</li> */}
              </ul>
            </div>

            <h1 className="text-4xl font-bold py-8">Results for Garlic (1)</h1>

            <h3 className="font-bold py-3">Filter By</h3>

            <div className="flex justify-center items-center gap-10">
              <ProductFilter onFilter={handleFilterChange} onSortChange={handleSortChange} />
              <div>
              {results.map((result: any, index: number) => (
              <div key={result._id} className="flex p-5">
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