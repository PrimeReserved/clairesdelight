import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MobileChart } from "../charts/mobile-chart";

export function ProductUsage(){
    return(
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Product Usage</CardTitle>
            <CardDescription>Understand how customers are using your product.</CardDescription>
          </CardHeader>
          <CardContent>
            <MobileChart />
          </CardContent>
        </Card>
      </div>
    );
}