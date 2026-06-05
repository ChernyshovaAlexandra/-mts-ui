import React, { FC, useMemo } from "react";
import { Step } from "../Step/Step";
import { COMPACT_THRESHOLD } from "./constants";
import {
  buildCompactTokens,
  clampDividerLengths,
  getCurrentStepIndex,
  getHorizontalMinWidth,
  getMobileCompactStatus,
} from "./helpers";
import { useElementWidth } from "./hooks";
import {
  StepsHorizFullRow,
  StepsHorizRoot,
  StepsMobileCompactConnector,
  StepsMobileCompactEllipsis,
  StepsMobileCompactRoot,
  StepsMobileCompactStep,
} from "./style";
import type { StepItem, StepsColor, StepsSize } from "./types";

interface HorizontalStepsProps {
  steps: StepItem[];
  size: StepsSize;
  color: StepsColor;
  dividerLength?: number;
  dividerMinLength?: number;
  dividerMaxLength?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const HorizontalSteps: FC<HorizontalStepsProps> = ({
  steps,
  size,
  color,
  dividerLength,
  dividerMinLength,
  dividerMaxLength,
  className,
  style,
}) => {
  const [rootRef, containerWidth] = useElementWidth<HTMLDivElement>();
  const dividerLengths = useMemo(
    () =>
      clampDividerLengths(
        dividerMinLength,
        dividerMaxLength,
        dividerLength
      ),
    [dividerLength, dividerMaxLength, dividerMinLength]
  );
  const fullMinWidth = useMemo(
    () => getHorizontalMinWidth(steps.length, size, dividerLengths.min),
    [dividerLengths.min, size, steps.length]
  );
  const shouldUseCompact =
    steps.length > COMPACT_THRESHOLD &&
    containerWidth !== undefined &&
    fullMinWidth > containerWidth;
  const currentStepIndex = useMemo(() => getCurrentStepIndex(steps), [steps]);
  const hasExplicitActiveStep = useMemo(
    () => steps.some((step) => step.status === "active"),
    [steps]
  );
  const compactTokens = useMemo(() => {
    if (!shouldUseCompact) return [];

    return buildCompactTokens(
      steps.length,
      currentStepIndex,
      containerWidth
    );
  }, [containerWidth, currentStepIndex, shouldUseCompact, steps.length]);

  return (
    <StepsHorizRoot
      ref={rootRef}
      className={className}
      style={style}
    >
      <StepsHorizFullRow $isHidden={shouldUseCompact}>
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
            dividerMinLength={dividerMinLength}
            dividerMaxLength={dividerMaxLength}
            label={step.label}
            description={step.description}
          />
        ))}
      </StepsHorizFullRow>

      {steps.length > COMPACT_THRESHOLD && (
        <StepsMobileCompactRoot
          $isVisible={shouldUseCompact}
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
                <StepsMobileCompactEllipsis aria-hidden="true" />
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
