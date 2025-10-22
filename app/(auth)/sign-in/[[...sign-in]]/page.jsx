/**
 * The function returns a React component for signing in using Clerk's Next.js library.
 */
import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return <SignIn />;
};

export default page;
