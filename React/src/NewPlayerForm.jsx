import { useState } from "react";

export function NewPlayerForm(props) {
  const [newItem, setNewItem] = useState("");
  const [photo, setPhoto] = useState("");
  const [position, setPosition] = useState("");
  const [team, setTeam] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "" || photo === "" || position === "" || team === "") return;

    props.onSubmit(newItem, photo, position, team);

    setNewItem("");
    setPhoto("");
    setPosition("");
    setTeam("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Player</label>
        <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          type="text" 
          id="item" 
        />
      </div>
      <div className="form-row">
        <label htmlFor="photo">Photo URL</label>
        <input 
          value={photo} 
          onChange={e => setPhoto(e.target.value)} 
          type="text" 
          id="photo" 
        />
      </div>
      <div className="form-row">
        <label htmlFor="position">Position</label>
        <input 
          value={position} 
          onChange={e => setPosition(e.target.value)} 
          type="text" 
          id="position" 
        />
      </div>
      <div className="form-row">
        <label htmlFor="team">Team</label>
        <input 
          value={team} 
          onChange={e => setTeam(e.target.value)} 
          type="text" 
          id="team" 
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
