import styled from "styled-components";
import { theme } from "../../styles";
import XIconOutline from "../../assets/icons/icon-x-outline.svg";
import OIconOutline from "../../assets/icons/icon-o-outline.svg";

export const GameBoardWrapper = styled.div`
  width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GameBoardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GameBoardTurn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 140px;
  grid-gap: 12px;
  gap: 12px;
  background-color: ${theme.colors.lightBlue};
  border-radius: 10px;
  box-shadow: 0 -4px 0 ${theme.colors.veryDarkBlue} inset;
  padding: 0 10px 6px;

  & svg {
    width: 20px;
    height: 20px;

    & path {
      fill: ${theme.colors.gray};
    }
  }

  & h3 {
    font-size: ${theme.fontSizes[4]};
    text-transform: uppercase;
    color: ${theme.colors.gray};
  }
`;

export const GameBoardRestart = styled.div`
  background-color: ${theme.colors.silver};
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 -4px 0 ${theme.colors.darkSilver} inset;
  transition: 0.2s all;

  &:hover {
    background-color: ${theme.colors.lightSilver};
  }
`;

export const Image = styled.img``;

export const GameBoardCards = styled.div`
  display: grid;
  height: 460px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px;
  margin: 40px 0;
`;

interface GameBoardCardProps {
  marks: String;
  square: String | null;
}

const setIcon = (props: any) => {
  if (props.marks === "X" && props.square === null) {
    return XIconOutline;
  } else if (props.marks === "O" && props.square === null) {
    return OIconOutline;
  }
};

export const GameBoardCard = styled.div<GameBoardCardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.lightBlue};
  border-radius: 15px;
  box-shadow: 0 -8px 0 ${theme.colors.veryDarkBlue} inset;
  cursor: pointer;

  &:hover div {
    display: ${(props): any => (props.square === null ? "block" : "none")};
    background: ${(props): any => `url(${setIcon(props)}) no-repeat`};
    width: 70px;
    height: 70px;
  }

  &:active {
    transform: translateY(4px) scaleY(0.93);
  }

  & div {
    display: none;
  }
`;
