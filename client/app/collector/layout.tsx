import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import Home from "./Home/home";
import "./styles/globals.css";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Header from "./Header/page";

// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="nested-layout">
//       {/* This is where the header component is placed */}
//       <Header/>
//       <main>{children} </main>
//     </div>
//   );
// };

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    //   <head></head>
    //   <body suppressHydrationWarning={true}>
    <div className="flex flex-col min-h-screen">
      <Header />

      {children}
      {/* <ToastContainer /> */}
    </div>
    //   </body>
    // </html>
  );
}
