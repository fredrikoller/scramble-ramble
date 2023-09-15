"use client";
import { Button, Hero } from "@/components";

export default function Home() {
  const handleLoginClick = () => {
    console.log("clicked login");
  };

  const handleRegisterClick = () => {
    console.log("clicked register");
  };

  return (
    <main className="">
      <Hero />
      <div>
        <Button
          text="Login"
          onClick={handleLoginClick}
          classes="button hover:bg-blue-700 hover:"
        />
        <Button
          text="Register"
          onClick={handleRegisterClick}
          classes="button hover:bg-blue-700 hover:"
        />
      </div>
    </main>
  );
}
