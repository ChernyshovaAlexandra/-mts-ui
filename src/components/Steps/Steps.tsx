import React, { FC, createContext, useContext } from "react";
import { StepsRoot } from "./style";

// ─── Types ────────────────────────────────────────────────────────────────────

export type StepsSize = "s" | "m";
export type StepsOrientation = "horizontal" | "vertical";
export type StepsColor = "primary" | "secondary";

export interface StepsContextValue {
  orientation: StepsOrientation;
  size: StepsSize;
  color: StepsColor;
}

export const StepsContext = createContext<StepsContextValue | null>(null);

export const useStepsContext = () => useContext(StepsContext);

export interface StepsProps {
  children: React.ReactNode;
  orientation?: StepsOrientation;
  size?: StepsSize;
  color?: StepsColor;
  className?: string;
  style?: React.CSSProperties;
}

// ─── Component ────────────────────────────────────────────────────────────────

export const Steps: FC<StepsProps> = ({
  children,
  orientation = "horizontal",
  size = "m",
  color = "primary",
  className,
  style,
}) => (
  <StepsContext.Provider value={{ orientation, size, color }}>
    <StepsRoot $orientation={orientation} $size={size} className={className} style={style}>
      {children}
    </StepsRoot>
  </StepsContext.Provider>
);

export default Steps;
