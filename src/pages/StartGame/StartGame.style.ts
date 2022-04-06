import styled from "styled-components";
import theme from "../../styles/theme";

export const StartGameWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
`;

export const StartGameMarks = styled.div`
  background-color: ${theme.colors.lightBlue};
  padding: 24px 24px 29px;
  width: 100%;
  text-align: center;
  margin: 40px 0;
  border-radius: 15px;
  box-shadow: 0 -8px 0 ${theme.colors.veryDarkBlue} inset;

  & h3 {
    text-transform: uppercase;
    color: ${theme.colors.gray};
    font-size: ${theme.fontSizes[3]};
    font-weight: ${theme.fontWeights[4]};
    margin-bottom: 20px;
    letter-spacing: 1.2px;
  }

  & p {
    text-transform: uppercase;
    color: ${theme.colors.lightGray};
    font-size: ${theme.fontSizes[2]};
    font-weight: ${theme.fontWeights[3]};
    letter-spacing: 1.2px;
  }
`;

export const StartGameChoices = styled.div`
  height: 73px;
  width: 100%;
  background-color: ${theme.colors.darkBlue};
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 20px;
  display: flex;

  & div {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s all;
    border-radius: 10px;
  }
`;

interface StartGameChoiceProps {
  readonly isActive: boolean;
}

export const StartGameChoice = styled.div<StartGameChoiceProps>`
  background-color: ${(props): any => props.isActive && theme.colors.gray};
  cursor: pointer;

  &:hover {
    background-color: ${(props): any =>
      props.isActive ? theme.colors.gray : theme.colors.transparentGray};
  }

  & svg {
    width: 30px;
    height: 30px;
    transition: 0.4s all;

    & path {
      transition: 0.4s all;
      fill: ${(props): any =>
        props.isActive ? theme.colors.darkBlue : theme.colors.gray};
    }
  }
`;

export const StartGameChoiceX = styled(StartGameChoice)``;

export const StartGameChoiceO = styled(StartGameChoice)``;

export const StartGameCTA = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  height: 67px;
  width: 100%;
  padding: 0 30px 8px;
  border: none;
  border-radius: 15px;
  font-family: outfit;
  font-size: 2rem;
  line-height: 25.2px;
  letter-spacing: 1.25px;
  font-weight: ${theme.fontWeights[4]};
  color: ${theme.colors.darkBlue};
  cursor: pointer;
  background-color: ${(props) =>
    props.color === "orange" ? theme.colors.orange : theme.colors.cyan};
  box-shadow: 0px -8px 0px 0px ${(props): any =>
      props.color === "orange"
        ? theme.colors.darkOrange
        : theme.colors.darkCyan} inset;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: ${(props) =>
      props.color === "orange"
        ? theme.colors.lightOrange
        : theme.colors.lightCyan};
  }

  &:active {
    box-shadow: 0px -4px 0px 0px ${(props): any =>
        props.color === "orange"
          ? theme.colors.darkOrange
          : theme.colors.darkCyan} inset;
    transform: translateY(4px) scaleY(0.93);
  }

  &:first-child {
    margin-bottom: 20px;
  }
`;
