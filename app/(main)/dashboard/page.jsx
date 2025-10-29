/**
 * The `DashboardPage` function in JavaScript React renders a dashboard page with a title, an accounts
 * grid, and an option to add a new account.
 * @returns The `DashboardPage` functional component is being returned. It contains JSX elements for a
 * dashboard page layout, including a title, an accounts grid with the option to add a new account
 * using the `CreateAccountDrawer` component, and a card with a "Add New Account" message and a plus
 * icon.
 */
import React from "react";
import CreateAccountDrawer from "@/components/create-account-drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
const DashboardPage = () => {
  return (
    <div className="px-5">
      {/* Budget Progress */}
      <h1 className="text-6xl font-bold gradient-title mb-5">Dashboard</h1>

      {/* Overview */}
      {/*   Accounts Grid */}
      <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
      </div>
    </div>
  );
};

export default DashboardPage;
