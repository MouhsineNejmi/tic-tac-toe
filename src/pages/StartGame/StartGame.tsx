import React, { useState } from "react";
import { IconX, IconO } from "../../components/SvgIcons/Icons";
import {
  StartGameWrapper,
  StartGameMarks,
  StartGameChoices,
  StartGameChoiceX,
  StartGameChoiceO,
  StartGameCTA,
  Button,
} from "./StartGame.style";
import GameLogo from "../../components/GameLogo/GameLogo";

const StartGame = ({ setPlay, setMark }: any) => {
  const [isXActive, setIsXActive] = useState<boolean>(false);
  const [isOActive, setIsOActive] = useState<boolean>(true);

  const chooseXMark = () => {
    setIsXActive(true);
    setIsOActive(false);
  };

  const chooseOMark = () => {
    setIsXActive(false);
    setIsOActive(true);
  };

  const setPlayGame = () => {
    setPlay(true);
    isXActive ? setMark("X") : setMark("O");
  };

  return (
    <StartGameWrapper>
      <GameLogo />

      <StartGameMarks>
        <h3>Pick Player 1's mark</h3>
        <StartGameChoices>
          <StartGameChoiceX isActive={isXActive} onClick={chooseXMark}>
            <IconX />
          </StartGameChoiceX>
          <StartGameChoiceO isActive={isOActive} onClick={chooseOMark}>
            <IconO />
          </StartGameChoiceO>
        </StartGameChoices>
      </StartGameMarks>

      <StartGameCTA>
        <Button color='cyan' onClick={setPlayGame}>
          New Game (vs Player)
        </Button>
      </StartGameCTA>
    </StartGameWrapper>
  );
};

export default StartGame;
