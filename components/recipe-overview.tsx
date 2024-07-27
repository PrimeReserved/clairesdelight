import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
  } from "@/components/ui/card";
  import { CartesianGrid, XAxis, Line, LineChart } from "recharts";
  import {
    ChartTooltipContent,
    ChartTooltip,
    ChartContainer,
  } from "@/components/ui/chart";
  import Image from "next/image";
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { PlusCircleIcon } from "lucide-react";
  import { UniversalForm } from "./universal-form";
  import PostForm from "./manage-blog/post-form";
import RecipeForm from "./manage-recipe/recipe-form";
  
  export function RecipeOverview() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-3 grid gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Image
                  src="/placeholder.svg"
                  alt="Blog Image"
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <div className="grid gap-2">
                  <CardTitle>Claire&lsquo;s Recipe</CardTitle>
                  <CardDescription>
                    The ultimate resource for all things Claire.
                  </CardDescription>
                  <Sheet>
                    <SheetTrigger className="border border-lightGreen p-2 rounded-md flex gap-2">
                      <PlusCircleIcon className="h-5 w-5" /> New Recipe
                    </SheetTrigger>
                    <SheetContent className="bg-lightOrange">
                      <SheetHeader>
                        <SheetTitle>Add New Recipe</SheetTitle>
                        <SheetDescription>
                          <RecipeForm />
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Total Recipes</div>
                  <div className="text-2xl font-bold">125</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Total Views</div>
                  <div className="text-2xl font-bold">1.2M</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Avg. Time on Site
                  </div>
                  <div className="text-2xl font-bold">2:45</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <LinechartChart className="aspect-[9/4]" /> */}
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Recipes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Introduction to Acme Products</div>
                  <div className="text-muted-foreground">12,345 views</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Acme Product Roadmap 2024</div>
                  <div className="text-muted-foreground">9,876 views</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Acme Customer Success Stories</div>
                  <div className="text-muted-foreground">7,890 views</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Audience Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Audience Demographics
                  </div>
                  <div className="text-base">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Average age: 25-35 years old</li>
                      <li>Gender: 55% female, 45% male</li>
                      <li>Income level: Middle class</li>
                    </ul>
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Audience Interests
                  </div>
                  <div className="text-base">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Technology</li>
                      <li>Productivity</li>
                      <li>Entrepreneurship</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>SEO Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Organic Traffic
                  </div>
                  <div className="text-2xl font-bold">75%</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Keyword Rankings
                  </div>
                  <div className="text-2xl font-bold">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Acme Products: #1</li>
                      <li>Acme Blog: #2</li>
                      <li>Acme Company: #3</li>
                    </ul>
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Backlinks</div>
                  <div className="text-2xl font-bold">1,234</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Social Media Followers
                  </div>
                  <div className="text-base">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Twitter: 50K</li>
                      <li>LinkedIn: 25K</li>
                      <li>Instagram: 15K</li>
                    </ul>
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Social Media Engagement
                  </div>
                  <div className="text-base">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Likes: 12,345</li>
                      <li>Shares: 3,456</li>
                      <li>Comments: 1,234</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Avg. Time on Page
                  </div>
                  <div className="text-2xl font-bold">2:45</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Bounce Rate</div>
                  <div className="text-2xl font-bold">25%</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Conversion Rate
                  </div>
                  <div className="text-2xl font-bold">5%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Comments and Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Total Comments
                  </div>
                  <div className="text-2xl font-bold">2,345</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Avg. Sentiment Score
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-primary rounded-full w-3 h-3" />
                    <div>4.2/5</div>
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Top Feedback Themes
                  </div>
                  <div className="text-base">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Improve content quality</li>
                      <li>Add more interactive features</li>
                      <li>Enhance mobile experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Technical Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Page Load Time
                  </div>
                  <div className="text-2xl font-bold">1.2s</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Core Web Vitals
                  </div>
                  <div className="text-base">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Largest Contentful Paint: 1.5s</li>
                      <li>First Input Delay: 100ms</li>
                      <li>Cumulative Layout Shift: 0.05</li>
                    </ul>
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Lighthouse Score
                  </div>
                  <div className="text-2xl font-bold">95</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monetization Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Ad Revenue</div>
                  <div className="text-2xl font-bold">$150K</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Affiliate Revenue
                  </div>
                  <div className="text-2xl font-bold">$75K</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Subscription Revenue
                  </div>
                  <div className="text-2xl font-bold">$100K</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">
                    Avg. Revenue per User
                  </div>
                  <div className="text-2xl font-bold">$2.50</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  