import styled from "styled-components";
import { mts_bg_primary, mts_radius_12, mts_text_primary, mts_text_secondary } from "../../consts";
import { visuallyImpairedMixin } from "../../accessibility";
import { textStyles } from "../Text/style";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (min-width: 769px) { gap: 12px; }
`;

export const PageList = styled.div<{ $compact: boolean }>`
  display: ${({ $compact }) => $compact ? "flex" : "none"};
  align-items: center;
  gap: inherit;
  @media (min-width: 769px) {
    display: ${({ $compact }) => $compact ? "none" : "flex"};
  }
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  padding: 4px;
  border: none;
  border-radius: ${mts_radius_12};
  background: ${({ $active }) => $active ? mts_bg_primary : "transparent"};
  color: ${mts_text_primary};
  ${textStyles["P3-Medium-Comp"]}
  line-height: 24px;
  cursor: pointer;
  transition: opacity 0.15s, background 0.15s;
  &:hover:not(:disabled) { background: ${mts_bg_primary}; }
  &:focus-visible { outline: 2px solid ${mts_text_primary}; outline-offset: 2px; }
  &:disabled { color: ${mts_text_secondary}; opacity: 0.6; cursor: default; }
  > span { font-size: 28px; font-weight: 400; line-height: 21px; }
  ${visuallyImpairedMixin}
`;

export const PageCounter = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  color: ${mts_text_primary};
  ${textStyles["P3-Medium-Comp"]}
`;
