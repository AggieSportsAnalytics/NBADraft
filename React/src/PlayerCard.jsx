import React from 'react';
import "./PlayerCard.css";

export function PlayerCard({ player, onToggle, onDelete }) {
  return (
    <li className="player-card">
      <div className="player-info">
        <img src={player.photo} alt={`${player.title} photo`} className="player-photo" />
        <div>
          <h3>{player.title}</h3>
          <p>{player.position} | {player.team}</p>
        </div>
      </div>
      <div className="player-actions">
        <input
          type="checkbox"
          checked={player.completed}
          onChange={e => onToggle(player.id, e.target.checked)}
        />
        <button onClick={() => onDelete(player.id)} className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
}
