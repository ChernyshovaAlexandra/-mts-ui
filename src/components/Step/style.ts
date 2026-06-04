import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import {
  mts_accent_light_positive,
  mts_accent_light_negative,
  mts_bg_secondary,
  mts_bg_lower,
  mts_text_primary,
  mts_text_secondary,
  mts_text_inverted,
  mts_text_tertiary,
} from "../../consts";
import "../../assets/fonts.css";
import type { StepSize, StepColor, StepOrientation } from "./Step";
import { Text } from "../Text/Text";
import { textStyles } from "../Text/style";
import { Caption } from "../Caption/Caption";

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const CIRCLE_SIZE: Record<StepSize, number> = { s: 24, m: 48 };
export const ICON_SIZE: Record<StepSize, number> = { s: 24, m: 48 };
export const BADGE_SIZE: Record<StepSize, number> = { s: 12, m: 18 };
export const DIVIDER_SIDE_PADDING = 12;
export const DEFAULT_DIVIDER_MIN_LENGTH = 8;
export const DEFAULT_DIVIDER_MAX_LENGTH = 100;

// ─── Color tokens ─────────────────────────────────────────────────────────────

export const COLOR_BG: Record<StepColor, string> = {
  primary: "#FF0032",
  secondary: mts_text_primary,
};

export const DONE_BG = mts_accent_light_positive;
export const FAILED_BG = mts_accent_light_negative;
export const DISABLED_BG = mts_bg_secondary;
export const BADGE_CIRCLE_BG = mts_bg_lower; // #F2F3F7 — круг number-badge при done/failed
export const BADGE_CIRCLE_COLOR = mts_text_primary; // #1D2023
export const ACTIVE_COLOR = mts_text_inverted;
export const DISABLED_COLOR = mts_text_tertiary;

// ─── Outer wrapper (circle + text) ───────────────────────────────────────────

export const StepWrapper = styled.div<{ $orientation: StepOrientation }>`
  display: inline-flex;
  flex-direction: ${({ $orientation }) =>
    $orientation === "horizontal" ? "column" : "row"};
  align-items: flex-start;
  gap: ${({ $orientation }) =>
    $orientation === "horizontal" ? "12px" : "16px"};
`;

// ─── Root circle ─────────────────────────────────────────────────────────────

export const StepCircleRoot = styled.div<{ $size: StepSize }>`
  position: relative;
  width: ${({ $size }) => CIRCLE_SIZE[$size]}px;
  min-width: ${({ $size }) => CIRCLE_SIZE[$size]}px;
  max-width: ${({ $size }) => CIRCLE_SIZE[$size]}px;
  height: ${({ $size }) => CIRCLE_SIZE[$size]}px;
  min-height: ${({ $size }) => CIRCLE_SIZE[$size]}px;
  max-height: ${({ $size }) => CIRCLE_SIZE[$size]}px;
  flex: 0 0 ${({ $size }) => CIRCLE_SIZE[$size]}px;
  box-sizing: border-box;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${visuallyImpairedMixin};
`;

// ─── Circle surface ───────────────────────────────────────────────────────────

export const StepCircle = styled.div<{
  $bg: string;
  $color: string;
  $size: StepSize;
}>`
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  flex: 0 0 auto;
  box-sizing: border-box;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background 0.2s ease;
`;

export const StepCircleText = styled.span`
  ${textStyles["P4-Medium-Comp"]};
  color: inherit;
  max-width: calc(100% - 4px);
  margin: 0;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
`;

// ─── Badge ────────────────────────────────────────────────────────────────────

export const StepBadge = styled.div<{
  $bg: string;
  $color: string;
  $size: StepSize;
}>`
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

// ─── Horizontal with-divider layout ──────────────────────────────────────────

export const StepWithDividerWrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0 1 auto;
`;

export const StepTopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-width: 0;
`;

export const StepBottomRow = styled.div`
  width: 100%;
  min-width: 0;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
`;

// ─── Text block ───────────────────────────────────────────────────────────────

export const StepTextBlock = styled.div<{ $orientation: StepOrientation; $withDivider?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;

  ${({ $orientation, $withDivider }) =>
    $orientation === "horizontal" && $withDivider &&
    css`min-width: 204px;`}

  ${({ $orientation }) =>
    $orientation === "vertical" &&
    css`padding: 2px 0;`}
`;

export const StepLabelText = styled(Text).attrs({ as: "span" })`
  font-family: "MTS Compact", sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StepDescText = styled(Caption).attrs({ as: "span" })`
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
  color: ${mts_text_secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
