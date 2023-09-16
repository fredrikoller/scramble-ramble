"use client";
import { Button, HandleContainer, Hero } from "@/components";

export default function Home() {
  const data = [
    { id: 1, handle: "frittzinator" },
    { id: 2, handle: "machinshin" },
    { id: 3, handle: "bathamel" },
    { id: 4, handle: "roboduck" },
    { id: 5, handle: "gravling" },
    { id: 6, handle: "trayal" },
    { id: 7, handle: "boboo" },
    { id: 8, handle: "darkling" },
    { id: 9, handle: "nobody" },
    { id: 10, handle: "mepzon" },
    { id: 11, handle: "nejon" },
  ];

  const handleLoginClick = () => {
    console.log("clicked login");
  };

  const handleRegisterClick = () => {
    console.log("clicked register");
  };

  return (
    <main className="">
      <Hero />
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
      {data.map((item) => (
        <HandleContainer key={item.id} userHandle={item.handle} />
      ))}
    </main>
  );
}
