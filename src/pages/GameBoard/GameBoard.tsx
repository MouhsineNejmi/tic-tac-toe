import React, { useState } from "react";
import RestartIcon from "../../assets/icons/icon-restart.svg";
import XIcon from "../../assets/icons/icon-x.svg";
import OIcon from "../../assets/icons/icon-o.svg";
import GameLogo from "../../components/GameLogo/GameLogo";
import { IconO, IconX } from "../../components/SvgIcons/Icons";
import {
  GameBoardWrapper,
  GameBoardHeader,
  GameBoardTurn,
  GameBoardRestart,
  Image,
  GameBoardCards,
  GameBoardCard,
} from "./GameBoard.style";
import GameOver from "../../components/GameOver/GameOver";

const GameBoard = ({ mark, setMark, setQuitGame }: any) => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const calculateWinner = (squares: any) => {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      } else if (!squares.includes(null)) {
        return "draw";
      }
    }
    return null;
  };
  const winner = calculateWinner(squares);

  const setMarkOnBoard = (id: any) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[id]) {
      return;
    }
    newSquares[id] = mark;
    mark === "X" ? setMark("O") : setMark("X");
    setSquares(newSquares);
  };

  const restartGame = () => {
    const newSquares = Array(9).fill(null);
    setSquares(newSquares);
  };

  return (
    <>
      <GameBoardWrapper>
        <GameBoardHeader>
          <GameLogo />

          <GameBoardTurn>
            {mark === "X" ? <IconX /> : <IconO />}
            <h3>turn</h3>
          </GameBoardTurn>

          <GameBoardRestart onClick={restartGame}>
            <Image src={RestartIcon} alt='restart match' />
          </GameBoardRestart>
        </GameBoardHeader>

        <GameBoardCards>
          {squares.map((square, idx) => {
            return (
              <GameBoardCard
                key={idx}
                marks={mark}
                square={square}
                onClick={() => setMarkOnBoard(idx)}>
                {square === "X" && <Image src={XIcon} alt='X Icon' />}
                {square === "O" && <Image src={OIcon} alt='O Icon' />}
                <div></div>
              </GameBoardCard>
            );
          })}
        </GameBoardCards>
      </GameBoardWrapper>
      {winner && (
        <GameOver
          winner={winner}
          mark={mark}
          setQuitGame={setQuitGame}
          restartGame={restartGame}
        />
      )}
    </>
  );
};

export default GameBoard;
