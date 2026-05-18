import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import {
  mts_accent_light_positive,
  mts_accent_light_negative,
  mts_bg_secondary,
  mts_text_primary,
  mts_text_secondary,
  mts_text_inverted,
  mts_text_tertiary,
} from "../../consts";
import "../../assets/fonts.css";
import { Text } from "../Text/Text";
import { Caption } from "../Caption/Caption";
import type { StepSize, StepColor, StepOrientation } from "./Step";

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const CIRCLE_SIZE: Record<StepSize, number> = { s: 24, m: 48 };
export const ICON_SIZE:   Record<StepSize, number> = { s: 24, m: 48 };
export const FONT_SIZE:   Record<StepSize, string> = { s: "14px", m: "24px" };
export const FONT_LH:     Record<StepSize, string> = { s: "20px", m: "28px" };
export const BADGE_SIZE:  Record<StepSize, number> = { s: 12, m: 18 };

// ─── Color tokens ─────────────────────────────────────────────────────────────

export const COLOR_BG: Record<StepColor, string> = {
  primary:   "#FF0032",
  secondary: mts_text_primary,
};

export const DONE_BG      = mts_accent_light_positive;
export const FAILED_BG    = mts_accent_light_negative;
export const DISABLED_BG  = mts_bg_secondary;
export const ACTIVE_COLOR = mts_text_inverted;
export const DISABLED_COLOR = mts_text_tertiary;

// ─── Outer wrapper (circle + text) ───────────────────────────────────────────

export const StepWrapper = styled.div<{ $orientation: StepOrientation }>`
  display: inline-flex;
  flex-direction: ${({ $orientation }) => $orientation === "horizontal" ? "column" : "row"};
  align-items: flex-start;
  gap: ${({ $orientation }) => $orientation === "horizontal" ? "12px" : "16px"};
`;

// ─── Root circle ─────────────────────────────────────────────────────────────

export const StepCircleRoot = styled.div<{ $size: StepSize }>`
  position: relative;
  width: ${({ $size }) => CIRCLE_SIZE[$size]}px;
  height: ${({ $size }) => CIRCLE_SIZE[$size]}px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${visuallyImpairedMixin};
`;

// ─── Circle surface ───────────────────────────────────────────────────────────

export const StepCircle = styled.div<{ $bg: string; $color: string; $size: StepSize }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "MTS Wide", sans-serif;
  font-weight: 500;
  font-size: ${({ $size }) => FONT_SIZE[$size]};
  line-height: ${({ $size }) => FONT_LH[$size]};
  transition: background 0.2s ease;
`;

// ─── Badge ────────────────────────────────────────────────────────────────────

export const StepBadge = styled.div<{ $bg: string; $color: string; $size: StepSize }>`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: ${({ $size }) => BADGE_SIZE[$size]}px;
  height: ${({ $size }) => BADGE_SIZE[$size]}px;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px white;
`;

// ─── Text block ───────────────────────────────────────────────────────────────

export const StepTextBlock = styled.div<{ $orientation: StepOrientation }>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;

  ${({ $orientation }) =>
    $orientation === "vertical" &&
    css`padding: 2px 0;`}
`;

export const StepLabelText = styled(Text).attrs({ as: "span", variant: "P4-Medium-Comp" as const })`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StepDescText = styled(Caption).attrs({ variant: "C1-Regular-Comp" as const })`
  color: ${mts_text_secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
