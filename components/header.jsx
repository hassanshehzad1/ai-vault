/* The code snippet you provided is a JavaScript React component named `Header`. It is a functional
component that handles the rendering of a header section in a React application. Here's a breakdown
of the code: */
/**
 * The above code defines a functional component named Header in a React application.
 * @returns A `<div>` element containing the text "Header" is being returned from the `Header`
 * functional component.
 */
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
const Header = () => {
  return (
    <div className="fixed top-0 bg-slate-100 backdrop-blur-md w-full z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="AI Vault Logo"
            height={60}
            width={200}
            className="object-contain h-14 w-auto"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href={"/dashboard"}
              className="text-gray-700 hover:text-slate-50 flex items-center gap-2"
            >
              <Button variant="outline" className="flex gap-2 items-center">
                <LayoutDashboard size={14} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link
              href={"/transactions/create"}
              className="text-gray-700 hover:text-slate-50 flex items-center gap-2"
            >
              <Button className="flex items-center gap-2">
                <PenBox size={14} />
                <span className="hidden md:inline">Create Transactions</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-50 h-50",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
