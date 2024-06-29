"use client";

import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { SalesCard } from "@/app/tremor/card";
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

import { fetchPaystackTransactions } from "@/features/orders/ordersSlice";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";
import Transactions from "@/app/component/admin/orders/Transactions";

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();
  const { transactions, loading, error } = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    dispatch(fetchPaystackTransactions());
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      Loading.pulse();
    } else {
      Loading.remove();
    }
  }, [loading]);

  if (error) Report.warning('Error', 'An Error Occured', 'close');

  return (
    <div>
      <div className="md:flex gap-2 p-2">
        <SalesCard title={`Sales`} figure={0} />
        <SalesCard title={`History`} figure={0} />
        <SalesCard title={`Customers`} figure={0} />
        <SalesCard title={`Incoming`} figure={transactions?.length} />
      </div>
      <div className="py-5 px-2">
        <Transactions title="Transactions" data={[]} />
        {/* <Card decoration="top" decorationColor="indigo">
          <TabGroup>
            <TabList variant="solid" defaultValue="1">
              <Tab value="1">Manage Product</Tab>
              <Tab value="2">Delete Product</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
              <div>
                        Add a note or tag for customer segmentation
                     </div>
              </TabPanel>
              <TabPanel>
              <div>
                        Add a note or tag for customer segmentation
                     </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Card> */}
      </div>
    </div>
  );
}
