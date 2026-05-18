import React, { FC } from "react";
import { Counter } from "../Counter/Counter";
import { Divider } from "../Divider/Divider";
import { IconDoneS } from "../../icons/IconDoneS/IconDoneS";
import { IconFailedS } from "../../icons/IconFailedS/IconFailedS";
import {
  StepsRoot,
  StepWrap,
  CircleAndDivider,
  StepCircle,
  StepText,
  StepLabel,
  StepDescription,
  ICON_SIZE,
} from "./style";

// ─── Types ────────────────────────────────────────────────────────────────────

export type StepStatus = "default" | "active" | "success" | "error" | "disabled";
export type StepsSize = "s" | "m";
export type StepsOrientation = "horizontal" | "vertical";
export type StepsVariant = "circle" | "counter";
export type StepsColor = "primary" | "secondary";

export interface StepItem {
  label?: string;
  description?: string;
  status: StepStatus;
}

export interface StepsProps {
  steps: StepItem[];
  size?: StepsSize;
  orientation?: StepsOrientation;
  variant?: StepsVariant;
  color?: StepsColor;
  className?: string;
  style?: React.CSSProperties;
}

// ─── Counter color maps ───────────────────────────────────────────────────────

const COUNTER_VARIANT: Record<StepsColor, Record<StepStatus, "red" | "dark" | "ghost">> = {
  primary: {
    active:   "red",
    success:  "dark",
    error:    "red",
    default:  "ghost",
    disabled: "ghost",
  },
  secondary: {
    active:   "dark",
    success:  "dark",
    error:    "dark",
    default:  "ghost",
    disabled: "ghost",
  },
};

// ─── Step node ────────────────────────────────────────────────────────────────

const StepNode: FC<{
  status: StepStatus;
  index: number;
  size: StepsSize;
  variant: StepsVariant;
  color: StepsColor;
}> = ({ status, index, size, variant, color }) => {
  const iconSize = ICON_SIZE[size];

  if (variant === "counter") {
    return (
      <Counter
        value={index}
        size={size === "s" ? "s" : "m"}
        variant={COUNTER_VARIANT[color][status]}
      />
    );
  }

  return (
    <StepCircle $status={status} $size={size} $color={color}>
      {status === "success" ? <IconDoneS width={iconSize} height={iconSize} /> :
       status === "error"   ? <IconFailedS width={iconSize} height={iconSize} /> :
       index}
    </StepCircle>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────

export const Steps: FC<StepsProps> = ({
  steps,
  size = "m",
  orientation = "horizontal",
  variant = "circle",
  color = "primary",
  className,
  style,
}) => {
  const isHoriz = orientation === "horizontal";
  const lastIdx = steps.length - 1;

  return (
    <StepsRoot $orientation={orientation} className={className} style={style}>
      {steps.map((step, i) => (
        <StepWrap key={i} $orientation={orientation}>
          <CircleAndDivider $orientation={orientation}>
            <StepNode
              status={step.status}
              index={i + 1}
              size={size}
              variant={variant}
              color={color}
            />
            {i !== lastIdx && (
              <Divider
                orientation={isHoriz ? "horizontal" : "vertical"}
                padding={12}
                style={!isHoriz ? { height: 60 } : undefined}
              />
            )}
          </CircleAndDivider>

          {(step.label || step.description) && (
            <StepText>
              {step.label && <StepLabel>{step.label}</StepLabel>}
              {step.description && <StepDescription>{step.description}</StepDescription>}
            </StepText>
          )}
        </StepWrap>
      ))}
    </StepsRoot>
  );
};

export default Steps;
