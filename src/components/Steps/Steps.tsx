import { FC } from "react";
import { HorizontalSteps } from "./HorizontalSteps";
import { VerticalSteps } from "./VerticalSteps";
import type { StepsProps } from "./types";

export type {
  StepItem,
  StepsProps,
  StepsOrientation,
  StepsSize,
  StepsColor,
} from "./types";

export const Steps: FC<StepsProps> = ({
  steps,
  orientation = "horizontal",
  size = "m",
  color = "primary",
  dividerLength,
  dividerMinLength,
  dividerMaxLength,
  className,
  style,
}) => {
  if (orientation === "vertical") {
    return (
      <VerticalSteps
        steps={steps}
        size={size}
        color={color}
        className={className}
        style={style}
      />
    );
  }

  return (
    <HorizontalSteps
      steps={steps}
      size={size}
      color={color}
      dividerLength={dividerLength}
      dividerMinLength={dividerMinLength}
      dividerMaxLength={dividerMaxLength}
      className={className}
      style={style}
    />
  );
};

export default Steps;
