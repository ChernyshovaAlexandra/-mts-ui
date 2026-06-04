import React, { FC } from "react";
import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import { Step } from "../Step/Step";
import { Divider } from "../Divider/Divider";
import { CIRCLE_SIZE } from "../Step/style";
import { mts_input_stroke, mts_text_tertiary } from "../../consts";
import type {
  StepVariant,
  StepStatus,
  StepColor,
  StepSize,
  StepOrientation,
} from "../Step/Step";

// ─── Types ────────────────────────────────────────────────────────────────────

export type StepsOrientation = StepOrientation;
export type StepsSize = StepSize;
export type StepsColor = StepColor;

export interface StepItem {
  variant?: StepVariant;
  value?: number;
  status?: StepStatus;
  color?: StepColor;
  label?: string;
  description?: string;
}

export interface StepsProps {
  steps: StepItem[];
  orientation?: StepsOrientation;
  size?: StepsSize;
  color?: StepsColor;
  dividerLength?: number;
  className?: string;
  style?: React.CSSProperties;
}

type CompactToken =
  | { type: "step"; index: number }
  | { type: "ellipsis"; key: string };

const MOBILE_COMPACT_BREAKPOINT = 480;
const MOBILE_COMPACT_THRESHOLD = 5;

// ─── Styled ───────────────────────────────────────────────────────────────────

// Vertical: each step (except last) is wrapped with its divider below.
const StepsVertRoot = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  ${visuallyImpairedMixin};
`;

// Wrapper per step+divider block (from Figma)
const StepVertBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
`;

const StepsHorizRoot = styled.div<{ $hasMobileCompact: boolean }>`
  display: inline-flex;
  align-items: flex-start;
  max-width: 100%;

  ${({ $hasMobileCompact }) =>
    $hasMobileCompact &&
    css`
      @media (max-width: ${MOBILE_COMPACT_BREAKPOINT}px) {
        display: block;
        width: 100%;
      }
    `}
`;

const StepsHorizFullRow = styled.div<{ $hideOnMobile: boolean }>`
  display: inline-flex;
  align-items: flex-start;

  ${({ $hideOnMobile }) =>
    $hideOnMobile &&
    css`
      @media (max-width: ${MOBILE_COMPACT_BREAKPOINT}px) {
        display: none;
      }
    `}
`;

const StepsMobileCompactRoot = styled.div`
  display: none;
  ${visuallyImpairedMixin};

  @media (max-width: ${MOBILE_COMPACT_BREAKPOINT}px) {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }
`;

const StepsMobileCompactConnector = styled.div`
  height: 1px;
  min-width: 4px;
  max-width: 24px;
  flex: 1 1 8px;
  background: ${mts_input_stroke};
`;

const StepsMobileCompactEllipsis = styled.span`
  width: 18px;
  height: ${CIRCLE_SIZE.s}px;
  flex: 0 0 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${mts_text_tertiary};
  font-family: "MTS Compact", sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
`;

const StepsMobileCompactStep = styled.div`
  width: ${CIRCLE_SIZE.s}px;
  height: ${CIRCLE_SIZE.s}px;
  flex: 0 0 ${CIRCLE_SIZE.s}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

// ─── Helpers ─────────────────────────────────────────────────────────────────

const isDoneStatus = (status?: StepStatus): boolean =>
  status === "done" || status === "success" || status === "disabled-done";

const getCurrentStepIndex = (steps: StepItem[]): number => {
  const activeIndex = steps.findIndex((step) => step.status === "active");
  if (activeIndex >= 0) return activeIndex;

  const firstNotDoneIndex = steps.findIndex((step) => !isDoneStatus(step.status));
  if (firstNotDoneIndex >= 0) return firstNotDoneIndex;

  return Math.max(steps.length - 1, 0);
};

const buildCompactTokens = (
  total: number,
  currentIndex: number
): CompactToken[] => {
  if (total <= 0) return [];

  const visibleIndexes = new Set<number>([0, total - 1, currentIndex]);

  [currentIndex - 1, currentIndex + 1].forEach((index) => {
    if (index > 0 && index < total - 1) visibleIndexes.add(index);
  });

  if (currentIndex <= 2) {
    [1, 2, 3].forEach((index) => {
      if (index > 0 && index < total - 1) visibleIndexes.add(index);
    });
  }

  if (currentIndex >= total - 3) {
    [total - 4, total - 3, total - 2].forEach((index) => {
      if (index > 0 && index < total - 1) visibleIndexes.add(index);
    });
  }

  const sortedIndexes = Array.from(visibleIndexes).sort((a, b) => a - b);
  const tokens: CompactToken[] = [];

  sortedIndexes.forEach((index, position) => {
    const previousIndex = sortedIndexes[position - 1];

    if (position > 0) {
      const gap = index - previousIndex;

      if (gap === 2) {
        tokens.push({ type: "step", index: previousIndex + 1 });
      } else if (gap > 2) {
        tokens.push({ type: "ellipsis", key: `${previousIndex}-${index}` });
      }
    }

    tokens.push({ type: "step", index });
  });

  return tokens;
};

const getMobileCompactStatus = (
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

// ─── Component ────────────────────────────────────────────────────────────────

export const Steps: FC<StepsProps> = ({
  steps,
  orientation = "horizontal",
  size = "m",
  color = "primary",
  dividerLength,
  className,
  style,
}) => {
  // ── Vertical ────────────────────────────────────────────────────────────────
  if (orientation === "vertical") {
    const circleRadius = CIRCLE_SIZE[size] / 2;

    return (
      <StepsVertRoot className={className} style={style}>
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          const node = (
            <Step
              variant={step.variant ?? "number"}
              value={step.value}
              status={step.status}
              color={step.color ?? color}
              size={size}
              orientation="vertical"
              label={step.label}
              description={step.description}
            />
          );

          if (isLast) return <React.Fragment key={i}>{node}</React.Fragment>;

          return (
            <StepVertBlock key={i}>
              {node}
              <Divider
                orientation="vertical"
                padding={12}
                style={{
                  marginLeft: circleRadius - 0.5,
                  flex: "1 0 0",
                  height: size === "m" ? 48 : 32,
                }}
              />
            </StepVertBlock>
          );
        })}
      </StepsVertRoot>
    );
  }

  // ── Horizontal: каждый Step несёт свой дивайдер через withDivider ───────────
  const hasMobileCompact = steps.length > MOBILE_COMPACT_THRESHOLD;
  const currentStepIndex = getCurrentStepIndex(steps);
  const hasExplicitActiveStep = steps.some((step) => step.status === "active");
  const compactTokens = hasMobileCompact
    ? buildCompactTokens(steps.length, currentStepIndex)
    : [];

  return (
    <StepsHorizRoot
      className={className}
      style={style}
      $hasMobileCompact={hasMobileCompact}
    >
      <StepsHorizFullRow $hideOnMobile={hasMobileCompact}>
        {steps.map((step, i) => (
          <Step
            key={i}
            variant={step.variant ?? "number"}
            value={step.value}
            status={step.status}
            color={step.color ?? color}
            size={size}
            orientation="horizontal"
            withDivider={i < steps.length - 1}
            dividerLength={dividerLength}
            label={step.label}
            description={step.description}
          />
        ))}
      </StepsHorizFullRow>

      {hasMobileCompact && (
        <StepsMobileCompactRoot
          role="group"
          aria-label={`Шаг ${currentStepIndex + 1} из ${steps.length}`}
        >
          {compactTokens.map((token, tokenIndex) => (
            <React.Fragment
              key={token.type === "step" ? token.index : token.key}
            >
              {tokenIndex > 0 && (
                <StepsMobileCompactConnector aria-hidden="true" />
              )}
              {token.type === "ellipsis" ? (
                <StepsMobileCompactEllipsis aria-hidden="true">
                  ...
                </StepsMobileCompactEllipsis>
              ) : (
                <StepsMobileCompactStep
                  aria-current={
                    token.index === currentStepIndex ? "step" : undefined
                  }
                  aria-label={`Шаг ${token.index + 1} из ${steps.length}`}
                >
                  <Step
                    variant={steps[token.index].variant ?? "number"}
                    value={steps[token.index].value ?? token.index + 1}
                    status={getMobileCompactStatus(
                      steps[token.index],
                      token.index,
                      currentStepIndex,
                      hasExplicitActiveStep
                    )}
                    color={steps[token.index].color ?? color}
                    size="s"
                    orientation="horizontal"
                  />
                </StepsMobileCompactStep>
              )}
            </React.Fragment>
          ))}
        </StepsMobileCompactRoot>
      )}
    </StepsHorizRoot>
  );
};

export default Steps;
