import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import {
  mts_bg_lower,
  mts_radius_16,
  mts_text_primary,
  mts_text_secondary,
} from "../../consts";
import "../../assets/fonts.css";

export const CellWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  ${visuallyImpairedMixin};
`;


export const IconBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: ${mts_radius_16};
  background: ${mts_bg_lower};
  flex-shrink: 0;
  color: ${mts_text_secondary};
  overflow: hidden;
`;

export const ContentArea = styled.div`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  align-self: stretch;
  min-width: 0;
  position: relative;
`;

export const TextBlock = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  overflow: hidden;
`;


export const RightSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  color: ${mts_text_secondary};
`;

export const Separator = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(188, 195, 208, 0.5);
`;
