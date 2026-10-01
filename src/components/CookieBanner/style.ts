import styled from "styled-components";
import { mts_bg_primary_elevated, mts_bg_lower } from "../../consts";

export const Wrapper = styled.div<{ $bottomOffset: string }>`
  position: fixed;
  bottom: ${({ $bottomOffset }) => $bottomOffset};
  left: 0;
  right: 0;
  z-index: 9999;
  background: ${mts_bg_primary_elevated};
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    padding: 12px 24px calc(12px + env(safe-area-inset-bottom, 0px));
    gap: 24px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${mts_bg_lower};
`;
