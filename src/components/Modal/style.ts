import styled from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import { mts_text_primary, mts_bg_secondary, mts_bg_hover } from "../../consts";
import Text from "../Text/Text";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999999;
  backdrop-filter: blur(5px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  clip-path: none !important;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 24px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  max-height: 90vh;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 480px) {
    border-radius: 16px;
    max-width: 90%;
    max-height: 85vh;
    padding: 16px;
  }
  ${visuallyImpairedMixin};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  width: 32px;
  height: 32px;
  background-color: ${mts_bg_secondary};
  border: none;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  cursor: pointer;

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

export const Title = styled(Text)`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  max-width: calc(100% - 100px);
  color: rgb(29, 32, 35);
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
`;
