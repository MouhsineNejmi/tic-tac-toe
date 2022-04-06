import React from "react";
import {
  GameOverWrapper,
  GameOverContainer,
  GameOverContent,
  GameOverCTA,
  QuitButton,
  RestartButton,
} from "./GameOver.style";

const GameOver = ({ winner, mark, setQuitGame, restartGame }: any) => {
  const quitGame = () => {
    setQuitGame(false);
  };

  return (
    <GameOverWrapper>
      <GameOverContainer>
        <GameOverContent>
          <h2>Game Over</h2>
          {winner === "draw" ? (
            <h1>Draw</h1>
          ) : (
            <h1>{mark === "X" ? "O" : "X"} Wins</h1>
          )}
        </GameOverContent>
        <GameOverCTA>
          <QuitButton color='silver' onClick={quitGame}>
            Quit
          </QuitButton>
          <RestartButton color='orange' onClick={restartGame}>
            Restart
          </RestartButton>
        </GameOverCTA>
      </GameOverContainer>
    </GameOverWrapper>
  );
};

export default GameOver;
