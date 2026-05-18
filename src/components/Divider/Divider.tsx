import React, { FC } from "react";
import styled, { css } from "styled-components";
import { mts_input_stroke } from "../../consts";
import { visuallyImpairedMixin } from "../../accessibility";

export type DividerOrientation = "horizontal" | "vertical";

export interface DividerProps {
  orientation?: DividerOrientation;
  /** Паддинг по осям, перпендикулярным линии. Horizontal: top/bottom. Vertical: left/right. */
  padding?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Wrap = styled.div<{ $orientation: DividerOrientation; $padding: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ $orientation, $padding }) =>
    $orientation === "horizontal"
      ? css`
          flex: 1;
          padding: 0 ${$padding}px;
        `
      : css`
          flex-direction: column;
          padding: ${$padding}px 0;
        `}

  ${visuallyImpairedMixin};
`;

const Line = styled.div<{ $orientation: DividerOrientation }>`
  background: ${mts_input_stroke};

  ${({ $orientation }) =>
    $orientation === "horizontal"
      ? css`
          width: 100%;
          height: 1px;
        `
      : css`
          width: 1px;
          height: 100%;
        `}
`;

export const Divider: FC<DividerProps> = ({
  orientation = "horizontal",
  padding = 0,
  className,
  style,
}) => (
  <Wrap
    role="separator"
    aria-orientation={orientation}
    $orientation={orientation}
    $padding={padding}
    className={className}
    style={style}
  >
    <Line $orientation={orientation} />
  </Wrap>
);

export default Divider;
