import Image from "next/image"
import Link from "next/link"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { MountainIcon, CalendarIcon, ClockIcon, PieChartIcon, ImportIcon, BarcodeIcon } from "lucide-react"

export function DashboardOverview() {
  return (
   <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Business News</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="font-medium hover:underline" prefetch={false}>
                      Acme Inc. Announces Record Quarterly Earnings
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-medium hover:underline" prefetch={false}>
                      New Sustainability Initiative Launched by Acme
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-medium hover:underline" prefetch={false}>
                      Acme Expands into International Markets
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Navigation Tutorial</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>Explore the dashboard using the navigation menu on the left. Here&lsquo;s a quick guide:</p>
                  <ul className="list-disc space-y-1 pl-4">
                    <li>
                      The <strong>Reports</strong> section provides an overview of your business metrics.
                    </li>
                    <li>
                      The <strong>Integrations</strong> section allows you to connect your tools and services.
                    </li>
                    <li>
                      The <strong>Billing</strong> section manages your subscription and payment information.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Let&lsquo;s get business started!</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Hello, John! This dashboard provides you with a comprehensive overview of your business metrics,
                  allowing you to make informed decisions and drive growth. Explore the various features and tools
                  available to help you succeed.
                </p>
              </CardContent>
            </Card>
          </div>
      </>
  )
}