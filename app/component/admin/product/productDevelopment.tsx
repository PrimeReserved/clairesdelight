import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function ProductDevelopment(){
    return(
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Product Development</CardTitle>
            <CardDescription>Capture feedback and ideas for future product enhancements.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Feature Requests</div>
                <div className="text-2xl font-bold">32</div>
                <div className="text-sm text-muted-foreground">+5 from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Roadmap Priorities</div>
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm text-muted-foreground">Top features in development</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Customer Ideas</div>
                <div className="text-2xl font-bold">18</div>
                <div className="text-sm text-muted-foreground">+3 from last month</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-muted-foreground">Upcoming Releases</div>
                <div className="text-2xl font-bold">2</div>
                <div className="text-sm text-muted-foreground">Major and minor releases</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}