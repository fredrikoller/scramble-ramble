"use client";

import React, { useState } from "react";
import { Button, TeamContainer } from "@/components";

export default function Home() {
  const SIZE = 5;
  const players = [
    "frittzinator",
    "machinshin",
    "bathamel",
    "roboduck",
    "gravling",
    "trayal",
    "boboo",
    "darkling",
    "nobody",
    "mepzon",
    "nejon",
    "geranos",
  ];

  const [teamOne, setTeamOne] = useState<string[]>([]);
  const [teamTwo, setTeamTwo] = useState<string[]>([]);
  const [crowd, setCrowd] = useState<string[]>([]);

  function divideArray(array: string[]) {
    const one = array.slice(0, SIZE);
    const two = array.slice(SIZE, SIZE + SIZE);
    const crowd = array.slice(SIZE + SIZE, array.length);

    setTeamOne(one);
    setTeamTwo(two);
    setCrowd(crowd);
  }

  function shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  function generate(): void {
    let tempPlayers = shuffleArray(players);
    divideArray(tempPlayers);
  }

  function copy(): void {
    let copyString =
      "==TEAM 1==\n" +
      teamOne +
      "\n==TEAM 2==\n" +
      teamTwo +
      "\n==CROWD==\n" +
      crowd;

    navigator.clipboard.writeText(copyString);
  }

  return (
    <main>
      <div className="player-form-wrapper">
        <div className="players-container">
          <TeamContainer players={teamOne} title="team one" />
          <TeamContainer players={teamTwo} title="team two" />

          <TeamContainer players={crowd} title="Crowd" />
        </div>
        <div className="button-container">
          <Button onClick={generate} text="Generate" />
          <Button onClick={copy} text="Copy" />
        </div>
      </div>
    </main>
  );
}
