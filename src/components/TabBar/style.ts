import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import {
  mts_control_active_tabbar,
  mts_control_inactive_tabbar,
  mts_radius_4,
} from "../../consts";
import "../../assets/fonts.css";

const tabsLayoutByCount = (count: number) => {
  if (count === 3) return css`gap: 32px; padding: 0 16px;`;
  if (count === 4) return css`gap: 16px; padding: 0 8px;`;
  return css`padding: 0 4px;`;
};

export const TabBarWrapper = styled.div`
  position: relative;
  width: 100%;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding-bottom: env(safe-area-inset-bottom);
  ${visuallyImpairedMixin};
`;

export const TopDivider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(188, 195, 208, 0.5);
`;

export const TabsContainer = styled.div<{ $count: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $count }) => tabsLayoutByCount($count)};
`;

export const TabButton = styled.button<{ $active: boolean }>`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 52px;
  min-width: 1px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ $active }) => ($active ? mts_control_active_tabbar : mts_control_inactive_tabbar)};
  outline: none;

  &:focus-visible {
    outline: 2px solid ${mts_control_active_tabbar};
    outline-offset: -2px;
    border-radius: ${mts_radius_4};
  }
`;

export const TabLabel = styled.span<{ $active: boolean }>`
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0;
  font-weight: ${({ $active }) => ($active ? 500 : 400)};
  color: ${({ $active }) => ($active ? mts_control_active_tabbar : "#6E7782")};
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${visuallyImpairedMixin};
`;
