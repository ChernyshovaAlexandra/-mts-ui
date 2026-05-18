import React, { FC } from "react";
import styled from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import { Step } from "../Step/Step";
import { Divider } from "../Divider/Divider";
import { CIRCLE_SIZE } from "../Step/style";
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

// ─── Styled ───────────────────────────────────────────────────────────────────

// Horizontal: CSS Grid — circles in `auto` cols, dividers in `1fr` cols.
// padding={12} on each Divider = exactly 12px from circle edge to line.
const StepsHorizGrid = styled.div<{ $cols: string }>`
  display: grid;
  grid-template-columns: ${({ $cols }) => $cols};
  align-items: center;
  ${visuallyImpairedMixin};
`;

const StepsHorizTextRow = styled.div<{ $cols: string }>`
  display: grid;
  grid-template-columns: ${({ $cols }) => $cols};
  margin-top: 12px;
`;

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
  return (
    <div
      className={className}
      style={{ display: "inline-flex", alignItems: "flex-start", ...style }}
    >
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
    </div>
  );
};

export default Steps;
