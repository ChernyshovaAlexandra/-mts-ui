import styled from "styled-components";
import { mts_bg_modal } from "../../consts";

export const StyledUserMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 280px;
  padding: 6px;
  background-color: ${mts_bg_modal};
  border-radius: 16px;
  box-shadow:
    0 4px 24px 0 rgba(0, 0, 0, 0.12),
    0 12px 20px 0 rgba(0, 0, 0, 0.14);
  overflow: hidden;
  box-sizing: border-box;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 6px;
`;

export const StyledTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  min-width: 0;
`;

export const StyledActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 6px 6px;
`;
