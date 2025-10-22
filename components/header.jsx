/* The code snippet you provided is a JavaScript React component named `Header`. It is a functional
component that handles the rendering of a header section in a React application. Here's a breakdown
of the code: */
cl
/**
 * The above code defines a functional component named Header in a React application.
 * @returns A `<div>` element containing the text "Header" is being returned from the `Header`
 * functional component.
 */
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
