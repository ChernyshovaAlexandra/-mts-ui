import React, { memo } from "react";
import { mts_brand_red } from "../../consts";
import styled, { keyframes } from "styled-components";
import { IconSpinner } from "../../icons";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export interface SpinnerProps {
  color?: string;
  speed?: string;
  style?: React.CSSProperties;
  size?: string;
}

export const IconSpinnerWrapper = styled(IconSpinner)<{
  speed?: string;
  color?: string;
  width?: string;
  height?: string;
}>`
  display: inline-block;
  transform-origin: center center;
  animation: ${spin} ${({ speed }) => speed || "1.5s"} linear infinite;
  width: ${({ width }) => width || "1.5rem"};
  height: ${({ height }) => height || "1.5rem"};
  color: ${({ color }) => color || "#fff"};
`;

export const Spinner = memo(
  ({
    color = mts_brand_red,
    speed = "1.5s",
    style,
    size = "1.5rem",
  }: SpinnerProps) => (
    <div
      role="status"
      aria-live="polite"
      aria-label="Загрузка"
      style={{ display: "inline-flex", alignItems: "center", ...style }}
    >
      <IconSpinnerWrapper
        color={color}
        speed={speed}
        width={size}
        height={size}
        aria-hidden="true"
      />
    </div>
  )
);

export default Spinner;
