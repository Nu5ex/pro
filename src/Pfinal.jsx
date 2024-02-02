import React, { useState, useEffect } from 'react';
import './Pfinal.css';

const initialBoard = Array(9).fill(null);

const Pfinal = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  useEffect(() => {
    if (!isXNext) {
      // Si es el turno de O, realiza la jugada de manera aleatoria después de un breve retraso
      const timerId = setTimeout(() => {
        makeRandomMove();
      }, 500);

      return () => clearTimeout(timerId); // Limpia el temporizador al desmontar el componente
    }
  }, [isXNext, board]);

  const makeRandomMove = () => {
    const emptySquares = board.reduce((acc, value, index) => {
      if (!value) {
        acc.push(index);
      }
      return acc;
    }, []);

    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      const newBoard = [...board];
      newBoard[emptySquares[randomIndex]] = 'O';
      setBoard(newBoard);
      setIsXNext(true);
    }
  };

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setBoard(initialBoard);
    setIsXNext(true);
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="pfinal-container">
      <div className="video-container">
        
        <iframe
          title="Nuevo Video - Werlyb"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zUngFuw2U9g"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="game-container">
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

// Helper function to determine the winner
const calculateWinner = (squares) => {
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
};

export default Pfinal;