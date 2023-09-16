import { HandleContainer } from "..";
import { Button } from "../Button/Button";
import "./Hero.css";

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
  const handleLoginClick = () => {
    console.log("clicked login");
  };

  const handleRegisterClick = () => {
    console.log("clicked register");
  };

  return (
    <div>
        <Button text="Login" link="/login" onClick={handleLoginClick}></Button>
        <Button text="Register" link="/register" onClick={handleRegisterClick}></Button>
      {data.map(handle => {
        return <HandleContainer id={handle.id} userHandle={handle.handle} />
      })}
    </div>
  );
};
