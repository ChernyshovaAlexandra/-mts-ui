import React from "react";
import styled from "styled-components";

type Direction = "left" | "right";

interface Props extends React.SVGProps<SVGSVGElement> {
  direction?: Direction;
}

const Svg = styled.svg<{ $direction: Direction }>`
  transform: ${({ $direction }) =>
    $direction === "right" ? "rotate(180deg)" : "none"};
  transition: transform 0.2s ease;
`;

export const IconArrowCircle = ({
  direction = "left",
  "aria-label": ariaLabel,
  role,
  ...props
}: Props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 36}
    height={props.height ?? 36}
    viewBox="0 0 36 36"
    fill="none"
    $direction={direction}
    role={ariaLabel ? (role ?? "img") : (role ?? "presentation")}
    aria-label={ariaLabel}
    aria-hidden={ariaLabel ? undefined : true}
    focusable="false"
    {...props}
  >
    ...
  </Svg>
);

export default IconArrowCircle;
