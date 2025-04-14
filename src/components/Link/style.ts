import styled from "styled-components";
import { mts_black, mts_red } from "../../consts";
import { LinkProps } from "./Link";
import "../../assets/fonts.css";

export const StyledLink = styled.a<LinkProps>`
  color: ${mts_black};
  font: 16px / 1.2 "MTS Compact", "Arial", sans-serif;
  cursor: pointer;
  position: relative;
  display: block;
  width: fit-content;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    background: ${mts_red};
    left: 0;
    transition: all 0.3s ease-in;
    bottom: -6px;
    margin: auto;
    width: ${({ underlined }) => (underlined ? "100%" : "0")};
  }
  &:hover {
    color: inherit;

    &::after {
      width: ${({ underlined }) => (underlined ? "0" : "100%")};
      transition: all 0.3s ease-in;
    }
  }
`;
