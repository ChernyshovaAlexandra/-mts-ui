import React, { FC } from "react";
import { Dot, StyledCounter } from "./style";

export type CounterSize = "notification" | "s" | "m" | "l";
export type CounterVariant = "red" | "dark" | "ghost";

export interface CounterProps {
  value?: number;
  size?: CounterSize;
  variant?: CounterVariant;
  max?: number;
  pad?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Counter: FC<CounterProps> = ({
  value,
  size = "m",
  variant = "red",
  max = 99,
  pad = false,
  className,
  style,
}) => {
  if (size === "notification") {
    return <Dot className={className} style={style} aria-hidden />;
  }

  const displayValue = value === undefined
    ? null
    : value > max
    ? `${max}+`
    : pad
    ? String(value).padStart(2, "0")
    : String(value);

  const isCircular = value !== undefined && value <= 9;

  return (
    <StyledCounter
      $size={size}
      $variant={variant}
      $circular={isCircular}
      className={className}
      style={style}
      aria-label={displayValue ? `${displayValue} уведомлений` : undefined}
    >
      {displayValue}
    </StyledCounter>
  );
};

export default Counter;
