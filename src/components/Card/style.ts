import styled, { css } from "styled-components";
import {
  mts_accent_light_active,
  mts_bg_disabled,
  mts_bg_lower,
  mts_bg_primary_elevated,
  mts_radius_24,
} from "../../consts";
import { visuallyImpairedMixin } from "../../accessibility";

export type CardVariant = "default" | "default-no-shadow" | "grey" | "outline" | "transparent";

const shadowLow = `0px 0px 16px rgba(0,0,0,0.08), 0px 4px 16px rgba(0,0,0,0.08)`;
const shadowMiddle = `0px 8px 16px rgba(0,0,0,0.08), 0px 4px 24px rgba(0,0,0,0.12)`;

// Controls/Blur token from Figma: rgba(255,255,255,0.08)
// Note: mts_control_blur in consts.ts = #F2F3F7 which does not match Figma — using raw value
const controlsBlur = `rgba(255, 255, 255, 0.08)`;

const variantStyles: Record<CardVariant, ReturnType<typeof css>> = {
  // Background/Primary Elevated — карточки на Primary Background с тенью
  default: css`
    background: ${mts_bg_primary_elevated};
    box-shadow: ${shadowLow};
  `,
  // Background/Primary Elevated — карточки на Secondary Background без тени
  "default-no-shadow": css`
    background: ${mts_bg_primary_elevated};
  `,
  // Background/Secondary (Lower) = #F2F3F7 — серая карточка на Primary Background
  grey: css`
    background: ${mts_bg_lower};
  `,
  // Background/Primary Elevated + Background/Stroke border
  outline: css`
    background: ${mts_bg_primary_elevated};
    border: 1px solid ${mts_bg_disabled};
  `,
  // Controls/Blur = rgba(255,255,255,0.08) + backdrop-filter — для тёмных/цветных фонов
  transparent: css`
    background: ${controlsBlur};
    backdrop-filter: blur(20px);
  `,
};

export const StyledCard = styled.div<{
  $variant: CardVariant;
  $interactive: boolean;
}>`
  border-radius: ${mts_radius_24};
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
