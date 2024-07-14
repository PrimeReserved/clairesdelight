
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

export function SettingsOverview() {
  return (
         <div className="h-[30rem]">
           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>General</CardTitle>
                <CardDescription>
                  Manage your account settings, including your profile, email, and password.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="#" className="text-primary" prefetch={false}>
                  Manage General Settings
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Configure your notification preferences for various events and activities.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="#" className="text-primary" prefetch={false}>
                  Manage Notification Settings
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>
                  Enhance the security of your account with two-factor authentication and other security features.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="#" className="text-primary" prefetch={false}>
                  Manage Security Settings
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
                <CardDescription>
                  Connect your account with third-party services and tools to enhance your experience.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="#" className="text-primary" prefetch={false}>
                  Manage Integration Settings
                </Link>
              </CardFooter>
            </Card>
          </div>
         </div>
  )
}