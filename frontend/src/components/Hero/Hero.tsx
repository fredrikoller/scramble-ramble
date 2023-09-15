import "./Hero.css";
import { HandleContainer } from "../HandleContainer/HandleContainer";

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

export const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-text-container">
          <h1 className="hero-text">Scramble-o-rama</h1>
        </div>
      </div>
      {data.map((item) => (
        <HandleContainer key={item.id} userHandle={item.handle} />
      ))}
    </div>
  );
};
