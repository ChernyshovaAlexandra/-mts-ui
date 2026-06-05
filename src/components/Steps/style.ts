import styled from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import { mts_input_stroke, mts_text_tertiary } from "../../consts";
import {
  CIRCLE_SIZE,
  DEFAULT_DIVIDER_MIN_LENGTH,
  DISABLED_BG,
  DIVIDER_SIDE_PADDING,
} from "../Step/style";

export const StepsVertRoot = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  ${visuallyImpairedMixin};
`;

export const StepVertBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
`;

export const StepsHorizRoot = styled.div`
  position: relative;
  display: block;
  width: 100%;
  max-width: 100%;
`;

export const StepsHorizFullRow = styled.div<{ $isHidden: boolean }>`
  display: ${({ $isHidden }) => ($isHidden ? "none" : "flex")};
  align-items: flex-start;
  width: 100%;
  min-width: 0;
`;

export const StepsMobileCompactRoot = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  align-items: center;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  ${visuallyImpairedMixin};
`;

export const StepsMobileCompactConnector = styled.div`
  height: ${CIRCLE_SIZE.s}px;
  min-width: ${DEFAULT_DIVIDER_MIN_LENGTH + DIVIDER_SIDE_PADDING * 2}px;
  flex: 1 1 ${DEFAULT_DIVIDER_MIN_LENGTH + DIVIDER_SIDE_PADDING * 2}px;
  box-sizing: border-box;
  padding: 0 ${DIVIDER_SIDE_PADDING}px;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    width: 100%;
    min-width: ${DEFAULT_DIVIDER_MIN_LENGTH}px;
    height: 1px;
    background: ${mts_input_stroke};
  }
`;

export const StepsMobileCompactEllipsis = styled.span`
  width: ${CIRCLE_SIZE.s}px;
  min-width: ${CIRCLE_SIZE.s}px;
  max-width: ${CIRCLE_SIZE.s}px;
  height: ${CIRCLE_SIZE.s}px;
  min-height: ${CIRCLE_SIZE.s}px;
  max-height: ${CIRCLE_SIZE.s}px;
  flex: 0 0 ${CIRCLE_SIZE.s}px;
  box-sizing: border-box;
  border-radius: 50%;
  background: ${DISABLED_BG};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${mts_text_tertiary};

  &::before {
    content: "";
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: currentColor;
    box-shadow:
      -5px 0 0 currentColor,
      5px 0 0 currentColor;
  }
`;

export const StepsMobileCompactStep = styled.div`
  width: ${CIRCLE_SIZE.s}px;
  min-width: ${CIRCLE_SIZE.s}px;
  max-width: ${CIRCLE_SIZE.s}px;
  height: ${CIRCLE_SIZE.s}px;
  min-height: ${CIRCLE_SIZE.s}px;
  max-height: ${CIRCLE_SIZE.s}px;
  flex: 0 0 ${CIRCLE_SIZE.s}px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
