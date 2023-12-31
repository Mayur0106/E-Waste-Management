import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import Home from "./Home/home";
import "./styles/globals.css";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Header from "./Header/page";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body suppressHydrationWarning={true}>
        <section className="flex flex-col min-h-screen">
          <Header />

          {children}
          <ToastContainer />
        </section>
      </body>
    </html>
  );
}
