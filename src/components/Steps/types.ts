import type { CSSProperties } from "react";
import type {
  StepVariant,
  StepStatus,
  StepColor,
  StepSize,
  StepOrientation,
} from "../Step/Step";

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
  dividerMinLength?: number;
  dividerMaxLength?: number;
  className?: string;
  style?: CSSProperties;
}

export type CompactToken =
  | { type: "step"; index: number }
  | { type: "ellipsis"; key: string };
