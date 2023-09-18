import React from "react";
import localFont from "next/font/local";

const monster = localFont({
  src: "../../app/fonts/MeltedMonster.ttf",
  variable: "--font-monster",
});

export default function Header() {
  return (
    <header className="">
      <div className="">
        <h1 className={`${monster.className} font-monster hero-header`}>
          Scramble-o-rama
        </h1>
      </div>
    </header>
  );
}
