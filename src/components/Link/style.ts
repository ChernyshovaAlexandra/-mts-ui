import styled from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import {
  mts_text_primary,
  mts_text_primary_link,
  mts_text_secondary_link,
  mts_text_inverted,
} from "../../consts";
import "../../assets/fonts.css";

export type LinkVariant =
  | "default"
  | "straight-line"
  | "dotted-line"
  | "external"
  | "icon-right"
  | "icon-left";

export type LinkTheme = "primary" | "secondary" | "black" | "white";

function getLinkColor(theme: LinkTheme): string {
  switch (theme) {
    case "secondary": return mts_text_secondary_link;
    case "black":     return mts_text_primary;
    case "white":     return mts_text_inverted;
    default:          return mts_text_primary_link;
  }
}

export interface StyledLinkProps {
  $type?: "menuItem" | "link";
  $variant?: LinkVariant;
  $underlined?: boolean;
  $theme?: LinkTheme;
}

export const LinkText = styled.span<{
  $variant?: LinkVariant;
  $underlined?: boolean;
}>`
  ${({ $variant, $underlined }) => {
    if ($variant === "dotted-line") {
      return `
        text-decoration: underline dotted;
        text-underline-offset: 3px;
      `;
    }
    if ($variant === "straight-line" || $underlined) {
      return `
        text-decoration: underline solid;
        text-underline-offset: 3px;
      `;
    }
    return "";
  }}

  ${({ $variant, $underlined }) => {
    const alreadyUnderlined =
      $underlined ||
      $variant === "straight-line" ||
      $variant === "dotted-line";
    if (alreadyUnderlined) {
      return `
        a:hover & {
          text-decoration: none;
        }
      `;
    }
    return `
      a:hover & {
        text-decoration: underline solid;
        text-underline-offset: 3px;
      }
    `;
  }}
`;

export const StyledLink = styled.a<StyledLinkProps>`
  color: ${({ $theme, $type }) => {
    if ($theme) return getLinkColor($theme);
    return $type === "menuItem" ? mts_text_primary : mts_text_primary_link;
  }};
  font:
    16px / 1.2 "MTS Compact",
    "Arial",
    sans-serif;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  text-decoration: none !important;

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    background: currentColor;
    left: 0;
    transition: all 0.3s ease-in;
    bottom: -6px;
    margin: auto;
    width: ${({ $underlined }) => ($underlined ? "100%" : "0")};
    display: ${({ $type }) => ($type === "menuItem" ? "block" : "none")};
  }

  &:hover {
    opacity: 0.8;

    &::after {
      width: ${({ $underlined }) => ($underlined ? "0" : "100%")};
      transition: all 0.3s ease-in;
      display: ${({ $type }) => ($type === "menuItem" ? "block" : "none")};
    }
  }
  ${visuallyImpairedMixin};
`;
