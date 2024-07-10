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
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Dashboard</span>
        </Link>
        <div className="ml-auto flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 text-sm font-medium">
            <CalendarIcon className="h-5 w-5" />
            <span>{new Date().toLocaleString()}</span>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <CalendarIcon className="h-5 w-5" />
                <span className="sr-only">Calendar</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 max-w-[276px]">
              <Calendar />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <ClockIcon className="h-5 w-5" />
                <span className="sr-only">Timer</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-4 max-w-[276px]">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Work Timer</span>
                  <Button size="sm">Start</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="font-medium">Break Timer</span>
                  <Button size="sm">Start</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Welcome, John!</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
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
          <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      prefetch={false}
                    >
                      <PieChartIcon className="h-5 w-5" />
                      <span className="sr-only">Reports</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Reports</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      prefetch={false}
                    >
                      <ImportIcon className="h-5 w-5" />
                      <span className="sr-only">Integrations</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Integrations</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      prefetch={false}
                    >
                      <BarcodeIcon className="h-5 w-5" />
                      <span className="sr-only">Billing</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Billing</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </nav>
          </aside>
        </main>
      </div>
    </div>
  )
}