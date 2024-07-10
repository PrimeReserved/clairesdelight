import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function CustomerSupport() {
    return (
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <Card className="border-lightGreen">
          <CardHeader>
            <CardTitle>Customer Support</CardTitle>
            <CardDescription>
              Integrate customer support data to identify opportunities for improvement.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Support Tickets</div>
                <div className="text-2xl font-bold">124</div>
                <div className="text-sm text-muted-foreground">+10 from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Resolution Rate</div>
                <div className="text-2xl font-bold">92%</div>
                <div className="text-sm text-muted-foreground">+1% from last month</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}