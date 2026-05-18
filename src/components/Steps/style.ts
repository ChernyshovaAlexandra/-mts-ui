import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import { CIRCLE_SIZE } from "../Step/style";
import type { StepsOrientation, StepsSize } from "./Steps";

export const StepsRoot = styled.div<{ $orientation: StepsOrientation; $size: StepsSize }>`
  display: flex;
  flex-direction: ${({ $orientation }) => ($orientation === "vertical" ? "column" : "row")};
  align-items: flex-start;
  ${visuallyImpairedMixin};

  ${({ $orientation, $size }) =>
    $orientation === "horizontal" &&
    css`
      > [role="separator"] {
        align-self: flex-start;
        margin-top: ${CIRCLE_SIZE[$size] / 2 - 0.5}px;
      }
    `}
`;
