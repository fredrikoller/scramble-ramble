import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Scramble-o-rama",
  description: "Scramble your team and face off on the battlefields",
};

const monster = localFont({
  src: "./fonts/MeltedMonster.ttf",
  variable: "--font-monster",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <h1 className={`${monster.className} font-monster`}>
            Scramble-o-rama
          </h1>
        </div>
        {children}
      </body>
    </html>
  );
}
