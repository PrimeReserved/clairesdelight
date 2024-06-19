"use client"

import { useState } from "react";
import AdminCard from "@/app/component/admin/card/AdminCard";
import Table from "@/app/component/admin/card/Table";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function Page() {

  const { products } = useSelector((state: RootState) => state.products);

  return (
    <div>
      <div className="flex justify-between gap-5 items-center">
        <AdminCard title="Total Product" content={products.length} />
        <AdminCard />
        <AdminCard />
      </div>
      <div className="flex justify-between gap-5">
        <div className="card mt-10 w-[75rem] h-[30rem] border-2">
          <Table products={products} />
        </div>
        <AdminCard />
      </div>
    </div>
  );
}
