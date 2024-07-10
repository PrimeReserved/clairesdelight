import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FaSalesforce } from "react-icons/fa6";
import { BarChartSale } from "../charts/Barchart";

export function Revenue(){
    return(
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
            <CardTitle>Sales and Revenue</CardTitle>
            <button className="border p-2 rounded-md flex gap-2"><FaSalesforce className="h-5 w-5" /> View Sales</button>
            </div>
            <CardDescription>Detailed sales and revenue data for your product.</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChartSale />
          </CardContent>
        </Card>
      </div>
    );
}