// style.ts
import styled from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import {
  mts_bg_hover,
  mts_bg_modal,
  mts_radius_12,
  mts_text_primary,
  mts_text_secondary,
} from "../../consts/index.js";
import "../../assets/fonts.css";
import { StyledLink } from "../Link/style.js";

export const Wrapper = styled.ol`
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  max-width: 100%;
  flex-wrap: nowrap;
  ${visuallyImpairedMixin};
`;

export const CrumbItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  flex: 0 1 auto;
  position: relative;

  &:last-child {
    flex: 0 1 auto;
  }

  &:hover > ul,
  &:focus-within > ul {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

export const CrumbLink = styled(StyledLink)<{ $size?: "s" | "m"; $textColor?: string }>`
  display: inline-block;
  min-width: 0;
  max-width: 36ch;
  text-decoration: none;
  color: ${({ $textColor }) => $textColor || mts_text_secondary};
  font-family: "MTS Compact", "Arial", sans-serif;
  font-size: ${({ $size }) => ($size === "s" ? "14px" : "17px")};
  line-height: ${({ $size }) => ($size === "s" ? "20px" : "24px")};
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::after {
    display: none;
  }

  ${visuallyImpairedMixin};
`;

export const CrumbText = styled.span<{ $size?: "s" | "m"; $textColor?: string }>`
  display: inline-block;
  min-width: 0;
  max-width: 36ch;
  color: ${({ $textColor }) => $textColor || mts_text_primary};
  cursor: default;
  font-family: "MTS Compact", "Arial", sans-serif;
  font-size: ${({ $size }) => ($size === "s" ? "14px" : "17px")};
  line-height: ${({ $size }) => ($size === "s" ? "20px" : "24px")};
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${visuallyImpairedMixin};
`;

export const Separator = styled.span<{ $textColor?: string }>`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({ $textColor }) => $textColor || mts_text_secondary};
`;

export const HiddenCrumbsTrigger = styled.button<{ $size?: "s" | "m"; $textColor?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ $size }) => ($size === "s" ? "24px" : "28px")};
  height: ${({ $size }) => ($size === "s" ? "20px" : "24px")};
  padding: 0 4px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: ${({ $textColor }) => $textColor || mts_text_secondary};
  cursor: pointer;
  font-family: "MTS Compact", "Arial", sans-serif;
  font-size: ${({ $size }) => ($size === "s" ? "14px" : "17px")};
  line-height: ${({ $size }) => ($size === "s" ? "20px" : "24px")};
  font-weight: 400;

  &:hover,
  &:focus-visible {
    background: ${mts_bg_hover};
    outline: none;
  }
`;

export const HiddenCrumbsDropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 24px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 220px;
  max-width: min(320px, calc(100vw - 32px));
  max-height: 280px;
  padding: 10px 6px 6px;
  margin: 0;
  overflow-y: auto;
  list-style: none;
  border-radius: ${mts_radius_12};
  background: ${mts_bg_modal};
  box-shadow:
    0 4px 24px 0 rgba(0, 0, 0, 0.12),
    0 12px 20px 0 rgba(0, 0, 0, 0.14);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  pointer-events: none;
  transition:
    opacity 0.15s ease,
    transform 0.15s ease,
    visibility 0.15s ease;
`;

export const HiddenCrumbsItem = styled.li`
  min-width: 0;
`;

export const HiddenCrumbsLink = styled(CrumbLink)`
  width: 100%;
  max-width: none;
  box-sizing: border-box;
  padding: 8px 10px;
  border-radius: 8px;
  color: ${mts_text_primary};

  &:hover,
  &:focus-visible {
    background: ${mts_bg_hover};
    opacity: 1;
    outline: none;
  }
`;
