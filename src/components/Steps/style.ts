import styled, { css } from "styled-components";
import { mts_accent_light_positive, mts_accent_light_negative, mts_bg_secondary, mts_text_primary, mts_text_secondary } from "../../consts";
import { visuallyImpairedMixin } from "../../accessibility";
import { Text } from "../Text/Text";
import { Caption } from "../Caption/Caption";
import "../../assets/fonts.css";
import type { StepStatus, StepsSize, StepsOrientation, StepsColor } from "./Steps";

// ─── Sizes ────────────────────────────────────────────────────────────────────

const CIRCLE_SIZE: Record<StepsSize, number> = { s: 24, m: 48 };
const NUMBER_SIZE: Record<StepsSize, string> = { s: "14px", m: "24px" };
const NUMBER_LH: Record<StepsSize, string> = { s: "20px", m: "28px" };
const ICON_SIZE: Record<StepsSize, number> = { s: 24, m: 48 };

// ─── Step circle colors ───────────────────────────────────────────────────────

const STATUS_BG: Record<StepStatus, string> = {
  default:  mts_bg_secondary,
  active:   "#FF0032",
  success:  mts_accent_light_positive,
  error:    mts_accent_light_negative,
  disabled: mts_bg_secondary,
};

const STATUS_COLOR: Record<StepStatus, string> = {
  default:  mts_text_primary,
  active:   "#ffffff",
  success:  "#ffffff",
  error:    "#ffffff",
  disabled: mts_text_secondary,
};

// ─── Container ────────────────────────────────────────────────────────────────

export const StepsRoot = styled.div<{ $orientation: StepsOrientation }>`
  display: flex;
  flex-direction: ${({ $orientation }) => ($orientation === "vertical" ? "column" : "row")};
  align-items: ${({ $orientation }) => ($orientation === "vertical" ? "flex-start" : "stretch")};
  ${visuallyImpairedMixin};
`;

// ─── Single step wrapper ──────────────────────────────────────────────────────

export const StepWrap = styled.div<{ $orientation: StepsOrientation }>`
  display: flex;
  flex-direction: ${({ $orientation }) => ($orientation === "vertical" ? "row" : "column")};
  align-items: flex-start;
  gap: ${({ $orientation }) => ($orientation === "vertical" ? "12px" : "0")};

  ${({ $orientation }) =>
    $orientation === "horizontal" &&
    css`flex: 1; min-width: 0;`}
`;

// ─── Circle + divider row ─────────────────────────────────────────────────────

export const CircleAndDivider = styled.div<{ $orientation: StepsOrientation }>`
  display: flex;
  flex-direction: ${({ $orientation }) => ($orientation === "vertical" ? "column" : "row")};
  align-items: center;
  flex-shrink: 0;

  ${({ $orientation }) =>
    $orientation === "horizontal" && css`width: 100%;`}
`;

// ─── Circle (icon/number wrapper for circle variant) ─────────────────────────

export const StepCircle = styled.div<{ $status: StepStatus; $size: StepsSize; $color: StepsColor }>`
  width: ${({ $size }) => CIRCLE_SIZE[$size]}px;
  height: ${({ $size }) => CIRCLE_SIZE[$size]}px;
  border-radius: 100px;
  background: ${({ $status, $color }) =>
    $status === "active" && $color === "secondary" ? mts_text_primary : STATUS_BG[$status]};
  color: ${({ $status }) => STATUS_COLOR[$status]};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s ease;
  font-family: "MTS Wide", sans-serif;
  font-weight: 500;
  font-size: ${({ $size }) => NUMBER_SIZE[$size]};
  line-height: ${({ $size }) => NUMBER_LH[$size]};
  ${({ $status }) => $status === "disabled" && css`opacity: 0.5;`}
`;

// ─── Step text ────────────────────────────────────────────────────────────────

export const StepText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 8px;
  min-width: 0;
`;

export const StepLabel = styled(Text).attrs({ as: "span" })`
  font-family: "MTS Compact", sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StepDescription = styled(Caption).attrs({ variant: "C1-Regular-Comp" as const })`
  color: ${mts_text_secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { ICON_SIZE };
