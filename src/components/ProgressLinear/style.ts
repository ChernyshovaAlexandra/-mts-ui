import styled, { keyframes, css } from "styled-components";
import {
  mts_accent_light_negative,
  mts_accent_light_positive,
  mts_greyscale_800,
  mts_input_stroke,
  mts_radius_12,
  mts_text_secondary,
} from "../../consts";
import { visuallyImpairedMixin } from "../../accessibility";
import type { ProgressLinearSize, ProgressLinearType } from "./ProgressLinear";

const FILL_COLOR: Record<ProgressLinearType, string> = {
  progress: mts_accent_light_positive,
  paused: "#FAC031",
  indeterminate: mts_accent_light_positive,
  success: mts_accent_light_positive,
  error: mts_accent_light_negative,
};

const STATUS_TEXT_COLOR: Record<"success" | "error", string> = {
  success: "#12B23F",
  error: "#D8400C",
};

const TRACK_HEIGHT: Record<ProgressLinearSize, string> = {
  s: "4px",
  m: "8px",
  l: "32px",
};

const indeterminateSlide = keyframes`
  0%   { transform: translateX(-100%) }
  100% { transform: translateX(250%) }
`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  ${visuallyImpairedMixin};
`;

export const Track = styled.div<{ $size: ProgressLinearSize }>`
  position: relative;
  height: ${({ $size }) => TRACK_HEIGHT[$size]};
  border-radius: ${mts_radius_12};
  background: ${mts_input_stroke};
  overflow: hidden;
  width: 100%;
`;

export const Fill = styled.div<{ $type: ProgressLinearType; $progress: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: ${({ $progress }) => 100 - $progress}%;
  border-radius: ${mts_radius_12};
  background: ${({ $type }) => FILL_COLOR[$type]};
  transition: ${({ $type }) => $type === "indeterminate" ? "none" : "right 0.3s ease"};

  ${({ $type }) =>
    $type === "indeterminate" &&
    css`
      right: auto;
      left: 0;
      width: 40%;
      animation: ${indeterminateSlide} 1.4s ease-in-out infinite;
    `}
`;

export const InnerText = styled.span<{ $align: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $align }) => $align === "right" ? "right: 8px;" : "left: 8px;"}
  font-family: "MTS Compact", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${mts_greyscale_800};
  white-space: nowrap;
  pointer-events: none;
`;

export const StatusRow = styled.div<{ $type: "success" | "error" }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ $type }) => STATUS_TEXT_COLOR[$type]};
`;

export const StatusText = styled.span`
  flex: 1;
  font-family: "MTS Compact", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: inherit;
`;

export const Label = styled.span`
  font-family: "MTS Compact", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${mts_text_secondary};
`;
