import './App.css'
import { useState } from 'react';
import React from 'react';
import Player from './components/Player';
import Gameboard from './components/Gameboard';
import './styles/Gameboard.css';
function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const playerinfo = [{
  name: 'Player 1',
  symbol: 'X'
},{
  name: 'Player 2',
  symbol: 'O'
}]
 return (
  <>
  {gameStarted ? (<><div id="playersdetail">
  {playerinfo.map((player, index) => (
    <Player
      key={index}
      name={player.name}
      symbol={player.symbol}
    />
  ))}
</div>

<Gameboard /></>):  <button id='start-btn' onClick={()=>setGameStarted(true)}>Start!</button>
}

</>

);

}

export default App;
