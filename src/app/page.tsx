"use client";

import React from "react";
import { Button } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="button-container">
        <h3>Man borde kunna lägga till egna spelare</h3>
        <Link href="/teams">
          <Button
            classes="button button-auth"
            onClick={() => {}}
            text="Teams"
          />
        </Link>
      </div>
    </main>
  );
}
