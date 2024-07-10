import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { RiArrowRightUpFill } from "react-icons/ri";

export function MarketAndPromotion(){
    return (
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Market and Promotion</CardTitle>
            <CardDescription>
              Track your product&apos;s market performance and the impact of marketing campaigns.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Market Share</div>
                <div className="text-2xl font-bold">18%</div>
                <div className="text-sm text-muted-foreground">+1% from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Campaign Impact</div>
                <div className="text-2xl font-bold">+15% Sales</div>
                <div className="text-sm text-muted-foreground">From last month&apos;s campaign</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Competitor Analysis</div>
                <div className="text-2xl font-bold">Top 3</div>
                <div className="text-sm text-muted-foreground">Market leaders in the industry</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Advertising Spend</div>
                <div className="text-2xl font-bold">$125K</div>
                <div className="text-sm text-muted-foreground">+10% from last month</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
}