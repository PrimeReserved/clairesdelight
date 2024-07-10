import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { UniversalForm } from "@/components/universal-form";
import { PlusCircleIcon } from "lucide-react";

export function Performance() {

    return (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
        <Card className="border-lightGreen">
          <CardHeader>
            <div className="flex justify-between">
            <CardTitle>Product Overview</CardTitle>
            <Sheet>
            <SheetTrigger className="border border-lightGreen p-2 rounded-md flex gap-2">
              <PlusCircleIcon className="h-5 w-5" /> Add Product
              </SheetTrigger>
              <SheetContent className="bg-lightOrange">
                <SheetHeader>
                  <SheetTitle>Add New product</SheetTitle>
                  <SheetDescription>
                    <UniversalForm />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            </div>
            <CardDescription>Key metrics for your product&apos;s performance.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Sales</div>
                <div className="text-2xl font-bold">$1.2M</div>
                <div className="text-sm text-muted-foreground">+12% from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Revenue</div>
                <div className="text-2xl font-bold">$850K</div>
                <div className="text-sm text-muted-foreground">+8% from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Profit Margin</div>
                <div className="text-2xl font-bold">42%</div>
                <div className="text-sm text-muted-foreground">+2% from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Customer Satisfaction</div>
                <div className="text-2xl font-bold">4.8/5</div>
                <div className="text-sm text-muted-foreground">+0.2 from last month</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}