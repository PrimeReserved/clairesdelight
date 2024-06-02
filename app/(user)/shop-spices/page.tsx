"use client"

import ProductCard from "@/app/component/product/ProductCard";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Suspense, useEffect, useMemo, useState } from "react";
import { getProduct } from "@/lib/data";
import Banner from "@/app/component/banner/Banner";
import BodyWrapper from "@/app/component/layout/BodyWrapper";
import ServiceCard from "@/app/component/LandingPage/our-service/ServiceCard";
import SpiceTitle from "@/app/component/Spice/SpiceTitle";
import { IoMdCheckboxOutline } from "react-icons/io";
import { ImCheckboxUnchecked } from "react-icons/im";
import Paragraph from "@/app/component/typography/Paragraph";
import { IoSearch } from "react-icons/io5";
import Pagination from "@/app/component/pagination/Pagination";
import { spiceBanner } from "@/public/image/cdn/cdn";

export default function Page() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      Loading.change('Loading %20');
      Loading.hourglass();

      try {
        const data = await getProduct();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        Loading.remove();
      }
    };

    fetchProducts();
  }, []);

  const memoizedProducts = useMemo(() => products, [products]);

  if (!Array.isArray(products) || products.length === 0) {
    return <p>No Spice available</p>;
  }

  return (
    <>
      <Banner 
         image={spiceBanner}
         title={`Shop Spices`}
         subtitle={`Check out our spice shop for all your cooking needs. Find the perfect
          flavours to make your meals delicious`}
       />
      <BodyWrapper>
        <div className="grid md:grid-cols-2 justify-center">
          <div>
            <SpiceTitle title={`Filter By`} />
            <ServiceCard className="w-64">
              <SpiceTitle title={`Category`} />
              <div className="flex flex-col p-5">
                <IoMdCheckboxOutline className="w-10 h-10 outline outline:bg-primary" />
                <Paragraph>
                  All <span>(12)</span>
                </Paragraph>
              </div>
              <div className="flex flex-col p-5">
                <ImCheckboxUnchecked className="w-10 h-10" />
                <Paragraph>
                  Single Spices<span>(8)</span>
                </Paragraph>
              </div>
            </ServiceCard>
          </div>
          <div>
            <div className="flex justify-between">
              <SpiceTitle title={`All Spice ${12}`} />
              <IoSearch className="w-10 h-10 pt-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {memoizedProducts.map((product: any) => (
                <Suspense key={product._id}>
                  <ProductCard product={product} />
                </Suspense>
              ))}
            </div>
          </div>
        </div>
        <Pagination currentPage={0} totalPages={0} onNextPage={function (): void {
          throw new Error("Function not implemented.");
        } } onPreviousPage={function (): void {
          throw new Error("Function not implemented.");
        } } />
      </BodyWrapper>
    </>
  );
}
