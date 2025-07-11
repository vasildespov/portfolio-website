import "./globals.css";
import {cn} from "@/lib/utils";
import type {Metadata} from "next";
import "next/font/google";
import {Montserrat} from "next/font/google";

const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Vasil Despov",
  description: "Developer Portfolio"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", fontSans.className)}>{children}</body>
    </html>
  );
}
