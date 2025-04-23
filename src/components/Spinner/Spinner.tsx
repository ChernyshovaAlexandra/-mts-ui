import { memo } from "react";
import styled, { keyframes } from "styled-components";
import { mts_brand_red } from "../../consts";

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

interface SpinnerContainerProps {
  color?: string;
  speed?: string;
}

const SpinnerContainer = styled.div<SpinnerContainerProps>`
  height: 1.5rem;
  width: 1.5rem;
  border: 2px solid ${({ color }) => color || "#ff0032"};
  border-radius: 100%;
  border-right-color: transparent;
  display: block;
  animation: ${spinAnimation} ${({ speed }) => speed || "1.5s"} linear infinite;
`;

const VisuallyHidden = styled.span`
  position: absolute;
  margin: -1px;
  height: 1px;
  width: 1px;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  padding: 0;
  clip: rect(0, 0, 0, 0);
`;

export interface SpinnerProps {
  color?: string;
  speed?: string;
  style?: React.CSSProperties;
}

export const Spinner = memo(
  ({ color = mts_brand_red, speed = "1.5s", style }: SpinnerProps) => (
    <SpinnerContainer style={style} role="status" color={color} speed={speed}>
      <VisuallyHidden>Ожидание ответа...</VisuallyHidden>
    </SpinnerContainer>
  )
);

export default Spinner;
