import { Button } from "../Button/Button";
import "./Hero.css";

export const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-text-container">
          <h1 className="hero-text">Scramble-o-rama</h1>
        </div>
        <Button classes={"button"} text="Hjälp mig!" onClick={() => {console.log("Snälla!")}}></Button>
      </div>
    </div>
  );
};
