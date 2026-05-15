import styled from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import {
  mts_bg_modal,
  mts_bg_overlay,
  mts_bg_secondary,
  mts_bg_hover,
  mts_text_primary,
  mts_control_stroke,
} from "../../consts";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${mts_bg_overlay};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: safe center;
  z-index: 999999999;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  padding: 16px;

  @media (max-width: 480px) {
    align-items: flex-end;
    padding: 0;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  background: ${mts_bg_modal};
  border-radius: 24px;
  width: 440px;
  max-width: 100%;
  padding: 32px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: 0 20px 40px rgba(20, 21, 24, 0.16);

  @media (max-width: 480px) {
    width: calc(100% - 16px);
    border-radius: 24px 24px 0 0;
    margin: 0 8px;
  }
  ${visuallyImpairedMixin};
`;

export const MobileIndicator = styled.span`
  display: none;

  @media (max-width: 480px) {
    display: block;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 4px;
    border-radius: 2px;
    background: ${mts_control_stroke};
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  padding: 0 16px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Footer = styled.div`
  display: flex;
  gap: 12px;

  & > * {
    flex: 1;
    max-width: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background-color: ${mts_bg_secondary};
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: ${mts_bg_hover};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${mts_text_primary};
  }
  ${visuallyImpairedMixin};
`;
