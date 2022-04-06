import React from "react";
import { StartGameLogo, Image } from "./GameLogo.style";
import LogoIconX from "../../assets/icons/icon-x.svg";
import LogoIconO from "../../assets/icons/icon-o.svg";

const GameLogo = () => {
  return (
    <StartGameLogo>
      <Image src={LogoIconX} alt='Icon X' />
      <Image src={LogoIconO} alt='Icon O' />
    </StartGameLogo>
  );
};

export default GameLogo;
