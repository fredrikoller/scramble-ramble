import HandleContainer from "@/components/HandleContainer";

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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="header">
          {" "}
          Scramble <br /> Ramble{" "}
        </h1>
        {data.map((item) => (
          <HandleContainer key={item.id} userHandle={item.handle} />
        ))}
      </div>
      <div>
        <button className="button">Login</button>
        <button className="button">Register</button>
      </div>
    </main>
  );
}
