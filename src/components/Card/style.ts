import styled, { css } from "styled-components";
import {
  mts_bg_primary_elevated,
  mts_bg_secondary_elevated,
  mts_bg_disabled,
  mts_accent_light_active,
} from "../../consts";
import { visuallyImpairedMixin } from "../../accessibility";

export type CardVariant = "default" | "default-no-shadow" | "grey" | "outline" | "transparent";

const shadowLow = `0px 0px 16px rgba(0,0,0,0.08), 0px 4px 16px rgba(0,0,0,0.08)`;
const shadowMiddle = `0px 8px 16px rgba(0,0,0,0.08), 0px 4px 24px rgba(0,0,0,0.12)`;

const variantStyles: Record<CardVariant, ReturnType<typeof css>> = {
  default: css`
    background: ${mts_bg_primary_elevated};
    box-shadow: ${shadowLow};
  `,
  "default-no-shadow": css`
    background: ${mts_bg_primary_elevated};
  `,
  grey: css`
    background: ${mts_bg_secondary_elevated};
  `,
  outline: css`
    background: ${mts_bg_primary_elevated};
    border: 1px solid ${mts_bg_disabled};
  `,
  transparent: css`
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px);
  `,
};

export const StyledCard = styled.div<{
  $variant: CardVariant;
  $interactive: boolean;
}>`
  border-radius: 24px;
  padding: 16px;
  overflow: hidden;
  box-sizing: border-box;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  ${({ $variant }) => variantStyles[$variant]}

  ${({ $interactive, $variant }) =>
    $interactive &&
    css`
      cursor: pointer;

      &:hover {
        transform: translateY(-4px);
        box-shadow: ${shadowMiddle};
      }

      &:active {
        transform: translateY(0);
        box-shadow: ${$variant === "default" ? shadowLow : "none"};
      }

      &:focus-visible {
        outline: none;
        transform: translateY(-4px);
        box-shadow: ${shadowMiddle};
        border: 1px solid ${mts_accent_light_active};
      }
    `}

  ${visuallyImpairedMixin}
`;
