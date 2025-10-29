/**
 * The MainLayout function is a React component that renders its children within a div element with
 * specific styling classes.
 * @returns The MainLayout component is being returned, which contains a div element with the class
 * "container mx-auto my-32" and renders the children components passed to it.
 */
export default function MainLayout({ children }) {
  return <div className="container mx-auto my-32">{children}</div>;
}