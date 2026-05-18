import styled from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import { mts_accent_light_positive, mts_input_stroke } from "../../consts";
import type { StepLineSize } from "./StepLine";

const SEGMENT_HEIGHT: Record<StepLineSize, number> = { s: 4, m: 8 };

export const StepLineRoot = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  ${visuallyImpairedMixin};
`;

export const StepLineSegment = styled.div<{ $completed: boolean; $size: StepLineSize }>`
  flex: 1;
  height: ${({ $size }) => SEGMENT_HEIGHT[$size]}px;
  border-radius: 12px;
  background: ${({ $completed }) => ($completed ? mts_accent_light_positive : mts_input_stroke)};
  transition: background 0.2s ease;
`;
