import React, { FC } from "react";
import { StepLineRoot, StepLineSegment } from "./style";

export type StepLineSize = "s" | "m";

export interface StepLineProps {
  total: number;
  current: number;
  size?: StepLineSize;
  className?: string;
  style?: React.CSSProperties;
}

export const StepLine: FC<StepLineProps> = ({
  total,
  current,
  size = "s",
  className,
  style,
}) => (
  <StepLineRoot
    className={className}
    style={style}
    role="progressbar"
    aria-valuenow={current}
    aria-valuemin={0}
    aria-valuemax={total}
    aria-label={`Шаг ${current} из ${total}`}
  >
    {Array.from({ length: total }, (_, i) => (
      <StepLineSegment key={i} $completed={i < current} $size={size} />
    ))}
  </StepLineRoot>
);

export default StepLine;
