import React from "react";
import "../styles/Player_info.css";
import { useState } from "react";
function Player({ name, symbol }) {
       const[editbutton, setbutton]=useState(false);
    const [playername, setName] = useState(name);
       function handleEdit() {
        setbutton((editing)=> !editing);
       }
      
       

  return (
    <li className="player-item" >
      <span className="player-name">{!editbutton?playername:<input type="text" required placeholder="Enter Name" value={playername} onChange={(event)=>setName(event.currentTarget.value)}></input>}</span>
      <span className="player-symbol">{symbol}</span>
        <button className="btn" onClick={handleEdit}>{editbutton?"save":"edit"}</button>
    </li>
  );
}

export default Player;
