import React from "react";
import styled from "styled-components";
import { mts_bg_secondary } from "../../consts";

export interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  thickness?: number;
  length?: string;
  color?: string;
  margin?: string;
  style?: React.CSSProperties;
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 1,
  length = "100%",
  color = mts_bg_secondary,
  margin = "8px 0",
  style,
}) => {
  return (
    <Line
      orientation={orientation}
      thickness={thickness}
      length={length}
      color={color}
      margin={margin}
      style={style}
    />
  );
};

const Line = styled.div<Required<Omit<SeparatorProps, "style">>>`
  background-color: ${({ color }) => color};
  ${({ orientation, thickness, length, margin }) =>
    orientation === "horizontal"
      ? `
    width: ${length};
    height: ${thickness}px;
    margin: ${margin};
  `
      : `
    width: ${thickness}px;
    height: ${length};
    margin: ${margin};
  `}
`;

export default Separator;
