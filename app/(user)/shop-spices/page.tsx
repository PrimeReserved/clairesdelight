"use client";

import ProductCard from "@/app/component/product/ProductCard";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Suspense, useEffect, useMemo, useState } from "react";
import { getProduct } from "@/lib/data";
import Banner from "@/app/component/banner/Banner";
import BodyWrapper from "@/app/component/layout/BodyWrapper";
import ServiceCard from "@/app/component/LandingPage/our-service/ServiceCard";
import SpiceTitle from "@/app/component/Spice/SpiceTitle";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Paragraph from "@/app/component/typography/Paragraph";
import { IoSearch } from "react-icons/io5";
import Pagination from "@/app/component/pagination/Pagination";
import { spiceBanner } from "@/public/image/cdn/cdn";
import SpiceCard from "@/app/component/Spice/SpiceCard";

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      Loading.change("Loading %20");
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
        <div className="flex justify-center">
          <div className="pt-[4rem]">
            <SpiceTitle title={`Filter By`} />
            <ServiceCard className="w-[20rem] p-1">
              <SpiceTitle className="px-3" title={`Category`} />
              <div className="flex flex-row items-center p-2 gap-2">
                <IoMdCheckboxOutline className="w-8 h-8 text-orange" />
                <p>
                  All <span>(12)</span>
                </p>
              </div>

              <div className="flex flex-row items-center p-2 gap-2">
                <MdCheckBoxOutlineBlank className="w-8 h-8" />
                <p>
                  Single Spices<span>(8)</span>
                </p>
              </div>
              <div className="flex flex-row items-center p-2 gap-2">
                <MdCheckBoxOutlineBlank className="w-8 h-8" />
                <p>
                  Mixed Spices<span>(4)</span>
                </p>
              </div>
            </ServiceCard>
            <div className="py-5">
              <ServiceCard className="w-[20rem] p-1 roundex-xl">
                <SpiceTitle className="px-3" title={`Sort`} />
                <div className="flex flex-row items-center p-2 gap-2">
                  <IoMdCheckboxOutline className="w-8 h-8 text-orange" />
                  <p>
                    Recently Added <span>(12)</span>
                  </p>
                </div>
                <div className="flex flex-row items-center p-2 gap-2">
                <MdCheckBoxOutlineBlank className="w-8 h-8" />
                  <p>
                    Best Selling <span>(8)</span>
                  </p>
                </div>
                <div className="flex flex-row items-center p-2 gap-2">
                  <MdCheckBoxOutlineBlank className="w-8 h-8" />
                  <p>
                    Alphabetically, A - Z <span>(12)</span>
                  </p>
                </div>
                <div className="flex flex-row items-center p-2 gap-2">
                  <MdCheckBoxOutlineBlank className="w-8 h-8" />
                  <p>
                  Alphabetically, Z - A <span>(12)</span>
                  </p>
                </div>
                <div className="flex flex-row items-center p-2 gap-2">
                  <MdCheckBoxOutlineBlank className="w-8 h-8" />
                  <p>
                    Recently Added <span>(12)</span>
                  </p>
                </div>

                <div className="flex flex-row items-center p-2 gap-2">
                  <MdCheckBoxOutlineBlank className="w-8 h-8" />
                  <p>
                    Single Spices<span>(8)</span>
                  </p>
                </div>
              </ServiceCard>
            </div>

            <div className="py-5">
            <ServiceCard className="w-[20rem] py-3 px-1 rounded-xl">
              <SpiceTitle className="px-3" title={`Price`} />
              <div className="flex flex-row items-center p-2 gap-2">
                <IoMdCheckboxOutline className="w-8 h-8 text-orange" />
                <p>
                  All <span>(12)</span>
                </p>
              </div>

              <div className="flex flex-row items-center p-2 gap-2">
                <MdCheckBoxOutlineBlank className="w-8 h-8" />
                <p>
                  Low to High<span>(8)</span>
                </p>
              </div>
              <div className="flex flex-row items-center p-2 gap-2">
                <MdCheckBoxOutlineBlank className="w-8 h-8" />
                <p>
                  High to Low<span>(12)</span>
                </p>
              </div>
            </ServiceCard>
            </div>
            
          </div>
          <div className="p-10">
            <div className="flex justify-between">
              <SpiceTitle title={`All Spice (${12})`} />
              <IoSearch className="w-10 h-10 pt-2" />
            </div>
            <div className="flex justify-center items-center mt-5 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {memoizedProducts.map((product: any) => (
                  <Suspense key={product._id}>
                    <SpiceCard product={product} />
                  </Suspense>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Pagination
          currentPage={0}
          totalPages={0}
          onNextPage={function (): void {
            throw new Error("Function not implemented.");
          }}
          onPreviousPage={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </BodyWrapper>
    </>
  );
}
