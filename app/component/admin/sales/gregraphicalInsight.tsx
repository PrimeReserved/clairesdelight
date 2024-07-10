import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { PieChartInsight } from "../charts/pieChart";

export function GeographicalInsight(){
    return(
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Geographical Insights</CardTitle>
            <CardDescription>Understand your product&apos;s performance across different regions.</CardDescription>
          </CardHeader>
          <CardContent>
            <PieChartInsight />
          </CardContent>
        </Card>
      </div>
    );
}