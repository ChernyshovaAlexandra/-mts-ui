import styled, { css } from "styled-components";
import {
  mts_card_colors,
  mts_control_blur,
  mts_radius_24,
  mts_radius_32,
  mts_radius_40,
  mts_radius_48,
  mts_radius_64,
  mts_radius_80,
} from "../../consts";
import { visuallyImpairedMixin } from "../../accessibility";

export type CardVariant = "default" | "default-no-shadow" | "grey" | "outline" | "transparent";
export type CardSize = "s" | "m" | "mobile";
export type CardTheme = "light" | "dark";
export type CardRadius = 32 | 40 | 48 | 64 | 80;
export type CardBackgroundContext = "secondary" | "lower";

const shadowLow = "0px 0px 16px rgba(0,0,0,0.08), 0px 4px 16px rgba(0,0,0,0.08)";
const shadowMiddle = "0px 8px 16px rgba(0,0,0,0.08), 0px 4px 24px rgba(0,0,0,0.12)";
const mediumRadii: Record<CardRadius, string> = {
  32: mts_radius_32,
  40: mts_radius_40,
  48: mts_radius_48,
  64: mts_radius_64,
  80: mts_radius_80,
};

export const StyledCard = styled.div<{
  $variant: CardVariant;
  $interactive: boolean;
  $size: CardSize;
  $colorTheme: CardTheme;
  $radius: CardRadius;
  $padding: number;
  $backgroundContext: CardBackgroundContext;
  $blur: boolean;
}>`
  border-radius: ${({ $size, $radius }) => $size === "m" ? mediumRadii[$radius] : mts_radius_24};
  padding: ${({ $size, $padding }) => $size === "m" ? $padding : 16}px;
  overflow: hidden;
  box-sizing: border-box;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  ${({ $variant, $colorTheme, $backgroundContext, $blur }) => {
    const colors = mts_card_colors[$colorTheme];
    switch ($variant) {
      case "default":
        return css`
          background: ${colors.primaryElevated};
          box-shadow: ${shadowLow};
        `;
      case "default-no-shadow":
        return css`
          background: ${$backgroundContext === "lower" ? colors.primaryElevated : colors.secondaryElevated};
        `;
      case "grey":
        return css`background: ${colors.secondary};`;
      case "outline":
        return css`
          background: ${colors.primary};
          border: 1px solid ${colors.stroke};
        `;
      case "transparent":
        return css`
          background: ${mts_control_blur};
          backdrop-filter: ${$blur ? "blur(20px)" : "none"};
        `;
    }
  }}

  ${({ $interactive, $variant }) => $interactive && css`
    cursor: pointer;

    &:hover,
    &:focus-visible {
      transform: translateY(-4px);
      ${($variant === "default" || $variant === "default-no-shadow") && css`box-shadow: ${shadowMiddle};`}
    }

    &:focus-visible {
      outline: none;
    }

    &:active {
      transform: translateY(0);
      box-shadow: ${$variant === "default" ? shadowLow : "none"};
    }
  `}

  ${visuallyImpairedMixin}
`;
