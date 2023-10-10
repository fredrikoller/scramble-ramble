import "./TeamContainer.css";
import { HandleContainer } from "..";

interface TeamProps {
  players: string[];
  title: string;
  discordChannel?: string;
}

export function TeamContainer(props: TeamProps) {
  return (
    <div className="container-item">
      <h1>{props.title}</h1>
      {props.players.map((name, index) => (
        <HandleContainer key={index} id={index} userHandle={name} />
      ))}
      <br></br>
      {props.discordChannel && <p>Discord channel: <b>{props.discordChannel}</b></p>}
    </div>
  );
}
