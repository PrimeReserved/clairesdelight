import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FaProductHunt } from "react-icons/fa6";

export function ProductMetrics(){
    return(
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
            <CardTitle>Product Performance</CardTitle>
            <button className="border p-2 rounded-md flex gap-2"><FaProductHunt className="h-5 w-5" /> View Products</button>
            </div>
            <CardDescription>Key metrics for your product&apos;s performance.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Units Sold</div>
                <div className="text-2xl font-bold">12,345</div>
                <div className="text-sm text-muted-foreground">+5% from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Customer Retention</div>
                <div className="text-2xl font-bold">82%</div>
                <div className="text-sm text-muted-foreground">+1% from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Product Ratings</div>
                <div className="text-2xl font-bold">4.7/5</div>
                <div className="text-sm text-muted-foreground">+0.1 from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Inventory Turnover</div>
                <div className="text-2xl font-bold">3.2</div>
                <div className="text-sm text-muted-foreground">+0.1 from last month</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}