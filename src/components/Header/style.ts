import styled from "styled-components";
import "../../assets/fonts.css";
import { HeaderProps } from "./Header";
import { mts_text_primary, mts_red } from "../../consts";

export const StyledHeader = styled.h2<HeaderProps>`
  font-family: "MTS Wide";
  font-weight: 500;
  font-size: 2rem;
  text-align: center;
  margin: 0 0 1rem 0;
  color: ${({ color }) =>
    color === "white" ? "#fff" : color === "black" ? mts_text_primary : mts_red};
  max-width: 100%;
`;
