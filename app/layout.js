/* This code snippet is a React component named `RootLayout` that serves as the layout for a web page.
Here's a breakdown of what each part of the code is doing: */
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "AI Vault",
  description: "Smart, AI-powered wealth",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      {" "}
      <html lang="en">
        <body className={`${poppins.className}`}>
          {/* Header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* Footer */}
          <footer className="bg-slate-100 py-12">
            <div className="container mx-auto px-4 text-center text-black">
              <p>© 2025 AI Vault. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
