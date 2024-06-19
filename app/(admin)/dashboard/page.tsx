"use client";

import AdminProductCard from "@/app/component/admin/card/AdminProductCard";
import AdminRecipeCard from "@/app/component/admin/card/AdminRecipeCard";
import AdminSaleCard from "@/app/component/admin/card/AdminCard";
import TodayInfo from "@/app/component/admin/dashboard/TodayInfo";
import SideMenu from "@/app/component/admin/navbar/SideMenu";
import { getProduct, getRecipes } from "@/lib/data";
import { Product, Recipe } from "@/typings";
import { useEffect, useState } from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";



export default function Page() {
  const { products } = useSelector((state: RootState) => state.products);
  const { recipes } = useSelector((state: RootState) => state.recipes);
  
  return (
      <div className=''>
        
        <TodayInfo />
        <div className="md:flex md:justify-center md:items-center gap-5">
          <AdminSaleCard />
          <AdminProductCard products={products} />
          <AdminRecipeCard recipes={recipes} />
        </div>
        {/* <div className="md:flex md:justify-center md:items-center gap-5">
          <AdminSaleCard />
          <AdminProductCard />
          <AdminRecipeCard />
        </div>
        <div className="md:flex md:justify-center md:items-center gap-5">
          <AdminSaleCard />
          <AdminProductCard />
          <AdminRecipeCard />
        </div> */}
      </div>
  );
}
