import styled from "styled-components";
import { ButtonElementProps, LinkElementProps } from "./type";
import {
  mts_black,
  mts_gray,
  mts_gray_hover,
  mts_red,
  mts_red_hover,
} from "../../consts";
import "../../assets/fonts.css";

export const StyledBtn = styled.button<
  Pick<ButtonElementProps, "style" | "disabled" | "width" | "variant">
>`
  outline: none;
  -webkit-appearance: none;
  border: none;

  background: ${({ variant }) =>
    variant === "secondary" ? mts_gray : mts_red};
  font: 700 0.75rem/1rem "MTS Wide", sans-serif;
  color: ${({ variant }) => (variant === "secondary" ? mts_black : `#fff`)};
  border: 1px solid transparent;
  text-overflow: ellipsis;
  width: ${({ width }) =>
    width === "auto" ? "auto" : width === "max" ? "100%" : width || "100%"};
  max-width: 330px;
  padding: 9px;
  border-radius: 1rem;
  text-transform: uppercase;

  &:not(:disabled) {
    cursor: pointer;
    &:hover {
      background: ${({ variant }) =>
        variant === "secondary" ? mts_gray_hover : mts_red_hover};
    }
  }
`;

export const StyledBtnLink = styled.a<
  Pick<LinkElementProps, "href" | "style" | "variant" | "width"> & {
    dangerouslySetInnerHTML?: { __html: string };
  }
>`
  display: block;
  text-align: center;
  outline: none;
  -webkit-appearance: none;
  border: none;

  background: ${({ variant }) =>
    variant === "secondary" ? mts_gray : mts_red};
  font: 700 0.75rem/1rem "MTS Wide", sans-serif;
  color: ${({ variant }) => (variant === "secondary" ? mts_black : `#fff`)};
  border: 1px solid transparent;
  text-overflow: ellipsis;
  width: ${({ width }) =>
    width === "auto" ? "auto" : width === "max" ? "100%" : width || "100%"};
  max-width: 330px;
  padding: 9px;
  border-radius: 1rem;
  text-transform: uppercase;
  text-decoration: none;

  &:not(:disabled) {
    cursor: pointer;
    &:hover {
      background: ${({ variant }) =>
        variant === "secondary" ? mts_gray_hover : mts_red_hover};
    }
  }
`;
