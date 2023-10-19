import Header from "@/components/Header/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scramble-o-rama",
  description: "Scramble your team and face off on the battlefields"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./assets/favicon.svg"/>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
