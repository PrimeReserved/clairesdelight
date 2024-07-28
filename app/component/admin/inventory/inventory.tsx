import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { RiArrowRightUpFill } from "react-icons/ri";

export function Inventory(){
    return (
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
            <CardTitle>Inventory Management</CardTitle>
            <button className="border p-2 rounded-md flex gap-2"><RiArrowRightUpFill className="h-5 w-5" />Inventory</button>
            </div>
            <CardDescription>Monitor your product&apos;s inventory and supply chain.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Inventory Level</div>
                <div className="text-2xl font-bold">5,432</div>
                <div className="text-sm text-muted-foreground">+2% from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Stock Turnover</div>
                <div className="text-2xl font-bold">3.2</div>
                <div className="text-sm text-muted-foreground">+0.1 from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Supply Chain Efficiency</div>
                <div className="text-2xl font-bold">92%</div>
                <div className="text-sm text-muted-foreground">+1% from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Lead Time</div>
                <div className="text-2xl font-bold">14 days</div>
                <div className="text-sm text-muted-foreground">-1 day from last month</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
}