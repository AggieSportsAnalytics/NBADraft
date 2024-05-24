import { useState } from "react";
import "./styles.css";
import { NewPlayerForm } from "./NewPlayerForm";
import { PlayerCard } from "./PlayerCard";

export default function App() {
  const [players, setPlayers] = useState([]);

  function addPlayer(title, photo, position, team) {
    setPlayers(currentPlayers => {
      return [
        ...currentPlayers, 
        { id: crypto.randomUUID(), title, photo, position, team, completed: false }
      ];
    });
  }

  function togglePlayer(id, completed) {
    setPlayers(currentPlayers => {
      return currentPlayers.map(player => {
        if (player.id === id) {
          return { ...player, completed };
        }
        return player;
      });
    });
  }

  function deletePlayer(id) {
    setPlayers(currentPlayers => {
      return currentPlayers.filter(player => player.id !== id);
    });
  }

  return (
    <>
      <NewPlayerForm onSubmit={addPlayer} />
      <h1 className="header">Players</h1>
      <ul className="list">
        {players.length === 0 && "No Players"}
        {players.map(player => (
          <PlayerCard 
            key={player.id} 
            player={player} 
            onToggle={togglePlayer} 
            onDelete={deletePlayer} 
          />
        ))}
      </ul>
    </>
  );
}
