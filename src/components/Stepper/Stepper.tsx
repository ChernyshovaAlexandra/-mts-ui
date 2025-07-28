import React from "react";
import type { FC } from "react";

import { Container, Circle, Divider } from "./styles";
import { IconCheck, IconMinus } from "../../icons";
import Text from "../Text/Text";

export type StepStatus =
  | "current" // alias → active
  | "active"
  | "not_available" // alias → disabled
  | "disabled"
  | "answered_true" // alias → success
  | "success"
  | "answered_false" // alias → error
  | "error";

export interface Step {
  index: number;
  status: StepStatus;
}

export interface StepperProps {
  steps: Step[];
}

export const Stepper: FC<StepperProps> = ({ steps }) => {
  const lastIdx = steps.length - 1;

  return (
    <Container>
      {steps.map(({ index, status }, i) => (
        <React.Fragment key={index}>
          <Circle $status={status}>
            {status === "success" || status === "answered_true" ? (
              <IconCheck width={16} height={16} />
            ) : status === "error" || status === "answered_false" ? (
              <IconMinus width={16} height={16} />
            ) : (
              <Text variant="P4-Medium-Comp">{index}</Text>
            )}
          </Circle>

          {i !== lastIdx && <Divider />}
        </React.Fragment>
      ))}
    </Container>
  );
};
