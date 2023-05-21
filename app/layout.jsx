"use client";

import Category from "@/components/Category";
import "./globals.css";
import { Inter } from "next/font/google";
import Search from "@/components/Search";
import NextNProgress from "nextjs-progressbar";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tastify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />} />
      <body className={inter.className}>
        <Search />
        <Category />
        {children}
      </body>
    </html>
  );
}
