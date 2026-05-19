import React from "react";
import { StyledScrollContainer } from "./style";

export type ScrollbarSize = "s" | "l";
export type ScrollbarOrientation = "vertical" | "horizontal" | "both";

export interface ScrollbarProps {
  children: React.ReactNode;
  size?: ScrollbarSize;
  orientation?: ScrollbarOrientation;
  maxHeight?: string;
  maxWidth?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Scrollbar = ({
  children,
  size = "s",
  orientation = "vertical",
  maxHeight,
  maxWidth,
  className,
  style,
}: ScrollbarProps) => (
  <StyledScrollContainer
    $size={size}
    $orientation={orientation}
    $maxHeight={maxHeight}
    $maxWidth={maxWidth}
    className={className}
    style={style}
  >
    {children}
  </StyledScrollContainer>
);

export default Scrollbar;
