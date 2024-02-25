import React, { useState, useEffect } from 'react';
import './Pfinal.css';

const initialBoard = Array(9).fill(null);
const words = ['arriba','ignaci','dulzon','marina','farola','goloso','higado','jardin','karate','llamar','tildes','onepis','optico','petalo','miauuu','quemar','rapido','sabado','tapete','ultimo','maleta'];
const initialWord = getRandomWord();

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toUpperCase();
}

const Pfinal = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [currentWord, setCurrentWord] = useState(initialWord);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [gameMode, setGameMode] = useState('ticTacToe'); // Nuevo estado para controlar el modo de juego

  useEffect(() => {
    if (!isXNext) {
      // Si es el turno de O, realiza la jugada de manera aleatoria después de un breve retraso
      const timerId = setTimeout(() => {
        makeRandomMove();
      }, 500);

      return () => clearTimeout(timerId); // Limpia el temporizador al desmontar el componente
    }
  }, [isXNext, board]);

  useEffect(() => {
    if (remainingAttempts === 0) {
      alert('¡Has perdido! La palabra era: ' + currentWord);
      handleReset();
    }
  }, [remainingAttempts, currentWord]);

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
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
    setRemainingAttempts(6);
  };

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) {
      return;
    }

    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);

    if (!currentWord.includes(letter)) {
      setRemainingAttempts(remainingAttempts - 1);
    }
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const renderAlphabet = () => (
    <div className="alphabet">
      {Array.from(Array(26), (e, i) => String.fromCharCode(65 + i)).map((letter) => (
        <button
          key={letter}
          className="letter-button"
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter) || calculateWinner(board)}
        >
          {letter}
        </button>
      ))}
    </div>
  );

  const renderWord = () => (
    <div className="word">
      {currentWord.split('').map((letter, index) => (
        <span key={index} className="letter">
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );

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

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="pfinal-container">
      <div className="video-and-game">
        <div className="video-container">
        <iframe
          title="Wonka | Tráiler Oficial 2"
          width="70%"
          height="465"
          src="https://www.youtube.com/embed/hQdTXGfDWgY?rel=0"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        </div>
        <div className="game-container">
          {gameMode === 'ticTacToe' && (
            <div className='ter'>
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
              <button className="reset-button" onClick={handleReset}>
                Reset
              </button>
            </div>
          )}
          {gameMode === 'hangman' && (
            <div className="hangman-container">
              <div className="hangman">
                <p className='p_pfinal'>Remaining attempts: {remainingAttempts}</p>
                {renderWord()}
                {renderAlphabet()}
                <button className="reset-button" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="game-selector">
        <button onClick={() => setGameMode('ticTacToe')}>Tic Tac Toe</button>
        <button onClick={() => setGameMode('hangman')}>Hangman</button>
      </div>
    </div>
  );
};

export default Pfinal;
