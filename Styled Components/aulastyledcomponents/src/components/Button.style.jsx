import styled from "styled-components";
import ButtonEstilizado from "./Button";
// import { Theme } from "./Theme";

export const StyledButton = styled.button`
  /* background-color: ${(prop) =>
    prop.backgroundColor ? prop.backgroundColor : "red"}; */
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100px;
  height: ${({ theme }) => theme.size.xxl};
  cursor: pointer;

  &:hover {
    background-color: pink;
    transition: 0.5s ease-out;
  }

  @media screen and (min-width: 768px) {
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
  }
`;

export const ButtonStyledBrown = styled(ButtonEstilizado)`
  background-color: #ff00dd;
  width: 100px;
  height: 40px;
`;
