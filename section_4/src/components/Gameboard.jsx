import React, { useState } from "react";
import '../styles/Gameboard.css';

function Gameboard() {
  const [isPlayerX, setIsPlayerX] = useState(true);
  const [gameboard, setGameboard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);
  const [gameOver, setGameOver] = useState(false);

  function resetGame() {
    setGameboard([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
    setIsPlayerX(true);
    setGameOver(false);
  }

  function checkResult(board) {
    // Check rows
    for (let row = 0; row < 3; row++) {
      if (
        board[row][0] &&
        board[row][0] === board[row][1] &&
        board[row][0] === board[row][2]
      ) {
        return board[row][0]; // 'X' or 'O'
      }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] &&
        board[0][col] === board[1][col] &&
        board[0][col] === board[2][col]
      ) {
        return board[0][col]; // 'X' or 'O'
      }
    }

    // Check diagonals
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    ) {
      return board[0][0]; // 'X' or 'O'
    }
    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    ) {
      return board[0][2]; // 'X' or 'O'
    }

    // Check draw
    if (board.flat().every(cell => cell !== null)) {
      return 'draw';
    }

    return null; // No result yet
  }

  function handleAction(rowIndex, colIndex) {
    if (gameOver || gameboard[rowIndex][colIndex] !== null) {
      return; // Prevent further moves if the game is over or cell is filled
    }

    const newBoard = gameboard.map(row => row.slice());
    newBoard[rowIndex][colIndex] = isPlayerX ? 'X' : 'O';

    const result = checkResult(newBoard);
    setGameboard(newBoard);

    if (result) {
      setGameOver(true);
      setTimeout(() => {
        if (result === 'draw') {
          alert("It's a draw!");
        } else {
          alert(`Player ${result} wins!`);
        }
        if (window.confirm("Do you want to play again?")) {
          resetGame();
        }
      }, 100);
    } else {
      setIsPlayerX(prev => !prev);
    }
  }

  return (
    <div className="gameboard">
        
      <h2>{gameOver ? "Game Over" : `Current Turn: ${isPlayerX ? 'X' : 'O'}`}</h2>
      {gameboard.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="board-cell"
              onClick={()=>handleAction(rowIndex, colIndex)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Gameboard;
