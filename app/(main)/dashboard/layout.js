/* This code snippet defines a React component called `CreateAccountDrawer`. This component is a form
inside a drawer that allows users to create a new account. */
import React, { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";

export default function DashboardLayout() {
  return (
    <div className="px-5">
    
      <Suspense
        fallback={<BarLoader className="mt-4" width="100%" color="#232232" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
}