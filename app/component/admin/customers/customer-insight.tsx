import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function CustomerInsight() {
    return (
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Customer Insights</CardTitle>
            <CardDescription>Analyze customer behavior and feedback.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Customer Satisfaction</div>
                <div className="text-2xl font-bold">4.8/5</div>
                <div className="text-sm text-muted-foreground">+0.2 from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Customer Feedback</div>
                <div className="text-2xl font-bold">82% Positive</div>
                <div className="text-sm text-muted-foreground">+3% from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Customer Segmentation</div>
                <div className="text-2xl font-bold">3 Segments</div>
                <div className="text-sm text-muted-foreground">Loyal, New, and Churned</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Customer Lifetime Value</div>
                <div className="text-2xl font-bold">$125</div>
                <div className="text-sm text-muted-foreground">+$10 from last month</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
}