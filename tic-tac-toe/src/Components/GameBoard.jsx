// GameBoard.js
import React, { useState } from "react";
import Square from "./Square";

function GameBoard() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const squaresCopy = [...squares];

    if (squaresCopy[i] || calculateWinner(squaresCopy)) {
      return;
    }

    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  let restart = false;

  if (winner) {
    status = `Winner: ${winner}`;
    restart = true;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div>
      <h3>{status}</h3>
      <div
        style={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div
        style={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div
        style={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button
        onClick={handleRestart}
        style={{ padding: "7px 20px", margin: "20px" }}
      >
        Restart
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default GameBoard;
