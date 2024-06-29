"use client";

import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { SalesCard } from "@/app/tremor/card";
import { fetchProducts } from "@/features/products/productsSlice";
import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
} from "@tremor/react";

import TableData from "@/app/component/admin/card/Table";
import ProductForm from "@/app/component/admin/product/ProductForm";

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="md:flex gap-2 p-2">
        <SalesCard title={`Sales`} figure={0} />
        <SalesCard title={`Products`} figure={products.length} />
        <SalesCard title={`Out-going`} figure={0} />
        <SalesCard title={`Incoming`} figure={0} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-5 px-2">
        <TableData title={`Products Inventory`} data={products.slice(0, 10)} />
        <Card decoration="top" decorationColor="indigo">
          <TabGroup>
            <TabList variant="solid" defaultValue="1">
              <Tab value="1">Manage Product</Tab>
              <Tab value="2">Delete Product</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <AccordionList className="mx-auto max-w-md">
                  <Accordion>
                    <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                      Add Product
                    </AccordionHeader>
                    <AccordionBody className="leading-6">
                      <ProductForm>
                        <button type="submit" className="btn btn-primary">
                          Create Product
                        </button>
                      </ProductForm>
                    </AccordionBody>
                  </Accordion>
                  <Accordion>
                    <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                      Update Product
                    </AccordionHeader>
                    <AccordionBody className="leading-6">
                      <ProductForm>
                        <button type="submit" className="btn btn-primary">
                          Update Product
                        </button>
                      </ProductForm>
                    </AccordionBody>
                  </Accordion>
                </AccordionList>
              </TabPanel>
              <TabPanel>
                <ProductForm>
                  <button type="submit" className="btn btn-primary">
                    Delete Product
                  </button>
                </ProductForm>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Card>
      </div>
    </div>
  );
}
