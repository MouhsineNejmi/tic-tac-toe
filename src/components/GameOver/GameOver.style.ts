import styled from "styled-components";
import { theme } from "../../styles";

export const GameOverWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
`;

export const GameOverContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.lightBlue};
`;

export const GameOverContent = styled.div`
  & h2 {
    font-size: ${theme.fontSizes[6]};
    color: ${theme.colors.gray};
    margin-bottom: 20px;
  }

  & h1 {
    font-size: ${theme.fontSizes[7]};
    color: ${theme.colors.cyan};
    margin-bottom: 20px;
  }
`;

export const GameOverCTA = styled.div``;

interface ButtonProps {
  color: String;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;
  font-family: outfit;
  font-size: 2rem;
  font-weight: ${theme.fontWeights[4]};
  line-height: 25.2px;
  letter-spacing: 1.25px;
  padding: 10px 15px;
  cursor: pointer;
  background-color: ${(props) =>
    props.color === "orange" ? theme.colors.orange : theme.colors.silver};
  box-shadow: 0px -4px 0px 0px ${(props): any =>
      props.color === "orange"
        ? theme.colors.darkOrange
        : theme.colors.darkSilver} inset;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: ${(props) =>
      props.color === "orange"
        ? theme.colors.lightOrange
        : theme.colors.lightSilver};
  }

  &:active {
    box-shadow: 0px -2px 0px 0px ${(props): any =>
        props.color === "orange"
          ? theme.colors.darkOrange
          : theme.colors.darkSilver} inset;
    transform: translateY(4px) scaleY(0.93);
  }
`;

export const QuitButton = styled(Button)`
  margin-right: 20px;
`;
export const RestartButton = styled(Button)``;
