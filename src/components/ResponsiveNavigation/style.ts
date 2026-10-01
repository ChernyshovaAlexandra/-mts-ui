import styled from "styled-components";
import { mts_bg_primary } from "../../consts";

export const DesktopNavigation = styled.div<{ $breakpoint: number }>`
  display: none;
  @media (min-width: ${({ $breakpoint }) => $breakpoint + 1}px) {
    display: block;
    position: sticky;
    top: 0;
    z-index: 100;
    background: ${mts_bg_primary};
  }
`;

export const MobileNavigation = styled.div<{ $breakpoint: number }>`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: ${mts_bg_primary};
  @media (min-width: ${({ $breakpoint }) => $breakpoint + 1}px) {
    display: none;
  }
`;

export const MobileSpacer = styled.div<{ $breakpoint: number; $height: number }>`
  flex-shrink: 0;
  height: max(${({ $height }) => $height}px, calc(52px + env(safe-area-inset-bottom, 0px)));
  @media (min-width: ${({ $breakpoint }) => $breakpoint + 1}px) {
    display: none;
  }
`;
