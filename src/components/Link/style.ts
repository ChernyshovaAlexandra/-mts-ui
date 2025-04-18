import styled from "styled-components";
import {
  mts_text_primary,
  mts_brand_red,
  mts_accent_light_active,
} from "../../consts";
import { LinkProps } from "./Link";
import "../../assets/fonts.css";

export const StyledLink = styled.a<LinkProps>`
  color: ${({ type }) =>
    type === "menuItem" ? mts_text_primary : mts_accent_light_active};
  font:
    16px / 1.2 "MTS Compact",
    "Arial",
    sans-serif;
  cursor: pointer;
  position: relative;
  display: block;
  width: fit-content;
  text-decoration: none !important;

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    background: ${mts_brand_red};
    left: 0;
    transition: all 0.3s ease-in;
    bottom: -6px;
    margin: auto;
    width: ${({ underlined }) => (underlined ? "100%" : "0")};
    display: ${({ type }) => (type === "menuItem" ? "block" : "none")};
  }
  &:hover {
    color: ${({ type }) =>
      type === "menuItem" ? "inherit" : mts_text_primary};

    &::after {
      width: ${({ underlined }) => (underlined ? "0" : "100%")};
      transition: all 0.3s ease-in;
      display: ${({ type }) => (type === "menuItem" ? "block" : "none")};
    }
  }
`;
