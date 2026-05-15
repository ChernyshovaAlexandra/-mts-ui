import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";

export const BG_DEFAULT = "#BBC1C7";
export const BG_COLORED = "#F2F3F7";
export const SILHOUETTE_DEFAULT = "#FFFFFF";
export const SILHOUETTE_COLORED = "#9898E9";
export const INITIALS_GRADIENT =
  "linear-gradient(135deg, #d2c5ff 0%, #9898e9 55%, #8195e3 100%)";

// Outer wrapper expands touch target to ≥44×44px without affecting overflow:hidden inside
export const StyledTouchTarget = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 44px;
    min-height: 44px;
    width: 100%;
    height: 100%;
  }

  ${visuallyImpairedMixin};
`;

export const StyledAvatar = styled.div<{
  $size: number;
  $borderRadius: number;
  $hasImage: boolean;
  $colored: boolean;
  $stroke: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  background-color: ${({ $hasImage, $colored }) =>
    $hasImage ? "transparent" : $colored ? BG_COLORED : BG_DEFAULT};
  ${({ $stroke }) =>
    $stroke &&
    css`
      box-shadow: inset 0 0 0 1px rgba(188, 195, 208, 0.5);
    `}
`;

export const StyledImage = styled.img<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  object-fit: cover;
  display: block;
`;

export const StyledPlaceholder = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledInitials = styled.span<{
  $size: number;
  $colored: boolean;
}>`
  font-family: "MTS Compact", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: ${({ $size }) => Math.round($size * 0.3)}px;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  user-select: none;
  letter-spacing: 0;

  ${({ $colored }) =>
    $colored
      ? css`
          background: ${INITIALS_GRADIENT};
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        `
      : css`
          color: #ffffff;
        `}
`;
