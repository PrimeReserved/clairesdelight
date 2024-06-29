"use client";


import TodayInfo from "@/app/component/admin/dashboard/TodayInfo";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@/features/products/productsSlice";
import { fetchRecipes } from "@/features/recipes/recipesSlice";
import { SalesCard } from "@/app/tremor/card";
import { OverviewCard } from "@/app/component/admin/card/OverviewCard";
import { AreaChartSale } from "@/app/component/admin/charts/AreaChart";
import { BarChartSale } from "@/app/component/admin/charts/BarChart";
import RecentInfoCard from "@/app/component/admin/card/RecentInfoCard";
import { Card } from "@tremor/react";

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchRecipes())
  }, [dispatch]);
  
  const { products } = useSelector((state: RootState) => state.products);
  const recipes = useSelector((state: RootState) => state.recipes.recipes);


  return (
    <div className=''>
      <TodayInfo />
      <div className="md:flex gap-2 p-2">
        <SalesCard title={`Transactions`} figure={0} />
        <SalesCard title={`Refunds`} figure={0} />
        <SalesCard title={`Events`} figure={0} />
        <SalesCard title={`Posts`} figure={0} />
      </div>
      <div className="md:flex md:items-center gap-2 p-2">
        <OverviewCard title={`Sales`} figure={`20,000`} />
        <OverviewCard title={`Products`} figure={products.length} />
        <OverviewCard title={`Recipes`} figure={recipes.length} />
        <OverviewCard title={`Customers`} figure={20}/>
      </div>
      {/* charts  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
        <div className="p-2">
          <AreaChartSale />
        </div>
        <div className="p-2">
          <BarChartSale />
        </div>
      </div>
      {/* recent blog and recipe post  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
        <Card className="p-2">
          <h3 className="py-3">Recent Blogs</h3>
          <RecentInfoCard />
        </Card>
        <Card className="p-2">
          <h3 className="py-3">Recent Recipes</h3>
          <RecentInfoCard />
        </Card>
      </div>
    </div>
  );
}
