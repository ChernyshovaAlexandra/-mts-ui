import {
  CIRCLE_SIZE,
  DEFAULT_DIVIDER_MAX_LENGTH,
  DEFAULT_DIVIDER_MIN_LENGTH,
  DIVIDER_SIDE_PADDING,
} from "../Step/style";
import type { StepStatus } from "../Step/Step";
import type { CompactToken, StepItem, StepsSize } from "./types";

export const isDoneStatus = (status?: StepStatus): boolean =>
  status === "done" || status === "success" || status === "disabled-done";

export const getCurrentStepIndex = (steps: StepItem[]): number => {
  const activeIndex = steps.findIndex((step) => step.status === "active");
  if (activeIndex >= 0) return activeIndex;

  const firstNotDoneIndex = steps.findIndex((step) => !isDoneStatus(step.status));
  if (firstNotDoneIndex >= 0) return firstNotDoneIndex;

  return Math.max(steps.length - 1, 0);
};

export const buildCompactTokens = (
  total: number,
  _currentIndex: number,
  availableWidth: number | undefined
): CompactToken[] => {
  if (total <= 0) return [];

  let leftEnd = 0;
  let rightStart = total - 1;
  let tokens = buildEdgeTokens(leftEnd, rightStart, total);

  if (!availableWidth || getCompactMinWidth(tokens) > availableWidth) {
    return [{ type: "step", index: 0 }];
  }

  while (true) {
    const leftCount = leftEnd + 1;
    const rightCount = total - rightStart;
    const sides: Array<"left" | "right"> =
      leftCount <= rightCount ? ["left", "right"] : ["right", "left"];
    let didExpand = false;

    for (const side of sides) {
      const nextLeftEnd = side === "left" ? leftEnd + 1 : leftEnd;
      const nextRightStart = side === "right" ? rightStart - 1 : rightStart;

      if (nextLeftEnd >= nextRightStart) continue;

      const nextTokens = buildEdgeTokens(nextLeftEnd, nextRightStart, total);

      if (getCompactMinWidth(nextTokens) <= availableWidth) {
        leftEnd = nextLeftEnd;
        rightStart = nextRightStart;
        tokens = nextTokens;
        didExpand = true;
        break;
      }
    }

    if (!didExpand) return tokens;
  }
};

const buildEdgeTokens = (
  leftEnd: number,
  rightStart: number,
  total: number
): CompactToken[] => {
  const tokens: CompactToken[] = [];

  for (let index = 0; index <= leftEnd; index += 1) {
    tokens.push({ type: "step", index });
  }

  if (leftEnd + 1 < rightStart) {
    tokens.push({ type: "ellipsis", key: `${leftEnd}-${rightStart}` });
  }

  for (let index = Math.max(rightStart, leftEnd + 1); index < total; index += 1) {
    tokens.push({ type: "step", index });
  }

  return tokens;
};

export const getMobileCompactStatus = (
  step: StepItem,
  index: number,
  currentIndex: number,
  hasExplicitActiveStep: boolean
): StepStatus | undefined => {
  if (index !== currentIndex || hasExplicitActiveStep) return step.status;
  if (
    step.status === undefined ||
    step.status === "default" ||
    step.status === "disabled"
  ) {
    return "active";
  }

  return step.status;
};

export const clampDividerLengths = (
  minLength: number | undefined,
  maxLength: number | undefined,
  length: number | undefined
) => {
  const max = Math.max(0, maxLength ?? length ?? DEFAULT_DIVIDER_MAX_LENGTH);
  const min = Math.min(
    Math.max(0, minLength ?? DEFAULT_DIVIDER_MIN_LENGTH),
    max
  );

  return { min, max };
};

export const getHorizontalMinWidth = (
  stepsCount: number,
  size: StepsSize,
  dividerMinLength: number
): number => {
  if (stepsCount <= 0) return 0;

  const circlesWidth = stepsCount * CIRCLE_SIZE[size];
  const dividersWidth =
    Math.max(stepsCount - 1, 0) *
    (dividerMinLength + DIVIDER_SIDE_PADDING * 2);

  return circlesWidth + dividersWidth;
};

export const getCompactMinWidth = (tokens: CompactToken[]): number => {
  const tokensWidth = tokens.reduce((width, token) => {
    return width + CIRCLE_SIZE.s;
  }, 0);
  const connectorsWidth =
    Math.max(tokens.length - 1, 0) *
    (DEFAULT_DIVIDER_MIN_LENGTH + DIVIDER_SIDE_PADDING * 2);

  return tokensWidth + connectorsWidth;
};
