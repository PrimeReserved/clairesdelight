"use client";

import AdminProductCard from "@/app/component/admin/card/AdminProductCard";
import AdminRecipeCard from "@/app/component/admin/card/AdminRecipeCard";
import AdminSaleCard from "@/app/component/admin/card/AdminSale";
import Avatar from "@/app/component/admin/dashboard/Avatar";
import TodayInfo from "@/app/component/admin/dashboard/TodayInfo";
import SideMenu from "@/app/component/admin/navbar/SideMenu";
import { getProduct, getRecipes } from "@/lib/data";
import { Product, Recipe } from "@/typings";
import { useEffect, useState } from "react";



export default function Page() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [spices, setSpices] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data: Recipe[] = await getRecipes();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    }

    fetchData();
  }, [])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const spices: Product[] = await getProduct();
        setSpices(spices);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    }

    fetchProducts();
  }, [])

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen">
      {/* Side Menu */}
      <SideMenu isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="bg-white shadow rounded flex justify-between p-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Avatar />
        </div>
        <TodayInfo />
        <div className="md:flex md:justify-center md:items-center gap-5">
          <AdminSaleCard />
          <AdminProductCard products={spices} />
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
    </div>
  );
}
