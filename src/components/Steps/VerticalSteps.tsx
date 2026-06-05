import React, { FC } from "react";
import { Divider } from "../Divider/Divider";
import { Step } from "../Step/Step";
import { CIRCLE_SIZE } from "../Step/style";
import type { StepItem, StepsColor, StepsSize } from "./types";
import { StepsVertRoot, StepVertBlock } from "./style";

interface VerticalStepsProps {
  steps: StepItem[];
  size: StepsSize;
  color: StepsColor;
  className?: string;
  style?: React.CSSProperties;
}

export const VerticalSteps: FC<VerticalStepsProps> = ({
  steps,
  size,
  color,
  className,
  style,
}) => {
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
};
