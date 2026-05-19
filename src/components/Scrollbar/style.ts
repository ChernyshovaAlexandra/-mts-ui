import styled, { css } from "styled-components";
import { mts_greyscale_300 } from "../../consts";
import { ScrollbarOrientation, ScrollbarSize } from "./Scrollbar";

const thumbSize: Record<ScrollbarSize, string> = {
  s: "4px",
  l: "8px",
};

const overflowStyles: Record<ScrollbarOrientation, ReturnType<typeof css>> = {
  vertical: css`
    overflow-y: auto;
    overflow-x: hidden;
  `,
  horizontal: css`
    overflow-x: auto;
    overflow-y: hidden;
  `,
  both: css`
    overflow: auto;
  `,
};

export const StyledScrollContainer = styled.div<{
  $size: ScrollbarSize;
  $orientation: ScrollbarOrientation;
  $maxHeight?: string;
  $maxWidth?: string;
}>`
  ${({ $orientation }) => overflowStyles[$orientation]}
  ${({ $maxHeight }) => $maxHeight && css`max-height: ${$maxHeight};`}
  ${({ $maxWidth }) => $maxWidth && css`max-width: ${$maxWidth};`}

  scrollbar-color: ${mts_greyscale_300} transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    ${({ $size }) => css`
      width: ${thumbSize[$size]};
      height: ${thumbSize[$size]};
    `}
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${mts_greyscale_300};
    border-radius: 100px;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;
