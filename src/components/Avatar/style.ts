import styled from "styled-components";

const FIGMA_ICONS_TERTIARY = "#BBC1C7";

export const StyledAvatar = styled.div<{
  $size: number;
  $borderRadius: number;
  $hasImage: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  background-color: ${({ $hasImage }) =>
    $hasImage ? "transparent" : FIGMA_ICONS_TERTIARY};
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
