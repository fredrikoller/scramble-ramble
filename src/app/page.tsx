"use client";

import React, { useState } from "react";
import { Button } from "@/components";
import Link from "next/link";

export default function Home() {


  const [lanEvent, setLanEvent] = useState<LanEvent>();
  const [playerName, setPlayerName] = useState<string>("");
  const [players, setPlayers] = useState<string[]>([]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

  function handleAddPlayer() {
    if (playerName.trim() !== "") {
      setPlayers([...players, playerName]);
      setPlayerName("");
    }
  }

  return (
    <main>
      <div>
        <div>
          <label htmlFor="event">Event</label>
        </div>
        <input type="text" name="event" placeholder="eventName" />

        <div>
          <label htmlFor="date">Date</label>
        </div>
        <input type="date" />
      </div>
      <div className="button-container">
        <input
          type="text"
          placeholder="nickname"
          value={playerName}
          onChange={handleInputChange}
        />
        <button className="button button-auth" onClick={handleAddPlayer}>
          Add player
        </button>
      </div>
      <div>
        <ul>

          {players && players.map((player, index) => <li key={index}> {player}</li>)}
        </ul>
      </div>
    </main>
  );
}
