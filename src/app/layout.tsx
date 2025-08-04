import "./globals.css";
import {cn} from "@/lib/utils";
import type {Metadata} from "next";
import {Bebas_Neue, Host_Grotesk} from "next/font/google";

export const metadata: Metadata = {
  title: "Vasil Despov",
  description: "Developer Portfolio"
};

const heading = Bebas_Neue({
  weight: "400",
  variable: "--font-heading",
  subsets: ["latin"]
});

const body = Host_Grotesk({
  weight: ["400", "700"],
  variable: "--font-body",
  subsets: ["latin"]
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", heading.variable, body.variable)}>
        {children}
      </body>
    </html>
  );
}
