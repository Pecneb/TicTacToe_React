import { useState } from "react";

export function Square({ squareState, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>{squareState}</button>
  );
}

export default function Board() {
  const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(squareIndex) {
    const newSquares = squares.slice();
    // if (newSquares[squareIndex] || calculateWinner(newSquares)) {
    //   return;
    // }
    if (isXNext) {
      newSquares[squareIndex] = "X";
    } else {
      newSquares[squareIndex] = "O";
    }
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }


  return (<>
    <div className="board-row">
      <Square squareState={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square squareState={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square squareState={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
      <Square squareState={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square squareState={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square squareState={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
      <Square squareState={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square squareState={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square squareState={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
  </>);
}
