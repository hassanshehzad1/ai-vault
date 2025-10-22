/**
 * The layout function in this React component centers its children elements horizontally on the page.
 * @returns The layout component is being returned, which is a div element with the class "flex
 * justify-center pt-40" and its children inside it.
 */
import React from "react";

const layout = ({ children }) => {
  return <div className="flex justify-center pt-40">{children}</div>;
};

export default layout;
