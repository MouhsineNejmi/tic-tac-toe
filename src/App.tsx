import React, { useState } from "react";
import { GlobalStyle } from "./styles";
import StartGame from "./pages/StartGame/StartGame";
import GameBoard from "./pages/GameBoard/GameBoard";

const App = () => {
  const [isGamePlaying, setIsGamePlaying] = useState(false);
  const [mark, setMark] = useState("X");

  return (
    <>
      <GlobalStyle />
      {isGamePlaying ? (
        <GameBoard
          mark={mark}
          setMark={setMark}
          setQuitGame={setIsGamePlaying}
        />
      ) : (
        <StartGame setPlay={setIsGamePlaying} setMark={setMark} />
      )}
    </>
  );
};

export default App;
