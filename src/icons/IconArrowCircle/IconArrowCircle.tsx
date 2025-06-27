import type { SVGProps } from "react";
import React from "react";
import styled from "styled-components";

type Direction = "left" | "right";

interface Props extends SVGProps<SVGSVGElement> {
  direction?: Direction;
}

const Svg = styled.svg<{ $direction: Direction }>`
  transform: ${({ $direction }) =>
    $direction === "right" ? "rotate(180deg)" : "none"};
  transition: transform 0.2s ease;
`;

export const IconArrowCircle = ({ direction = "left", ...props }: Props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 36}
    height={props.height ?? 36}
    viewBox="0 0 36 36"
    fill="none"
    $direction={direction}
    {...props}
  >
    <path
      d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.89 23.295L14.61 18L19.89 12.705"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default IconArrowCircle;
