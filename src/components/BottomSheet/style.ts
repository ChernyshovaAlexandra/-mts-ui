import styled from "styled-components";
import { motion } from "framer-motion";
import { visuallyImpairedMixin } from "../../accessibility";
import "../../assets/fonts.css";
import {
  mts_bg_lower,
  mts_bg_primary_elevated,
  mts_bg_secondary,
  mts_control_stroke,
  mts_input_background,
  mts_input_stroke,
  mts_radius_12,
  mts_radius_16,
  mts_radius_2,
  mts_radius_32,
  mts_text_primary,
  mts_text_secondary,
} from "../../consts";

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(29, 32, 35, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10000;
`;

export const Sheet = styled(motion.div)<{ $fixedHeight?: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10001;
  background: ${mts_bg_primary_elevated};
  border-radius: ${mts_radius_32} ${mts_radius_32} 0 0;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08), 0 -8px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  ${({ $fixedHeight }) => $fixedHeight ? "height: 85vh;" : "max-height: 85vh;"}
`;

export const DragIndicator = styled.span<{ $collapsable?: boolean }>`
  display: block;
  margin: 12px auto 0;
  width: 32px;
  height: 4px;
  border-radius: ${mts_radius_2};
  background: ${mts_control_stroke};
  flex-shrink: 0;
  ${({ $collapsable }) => $collapsable && "cursor: grab; touch-action: none;"}
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 20px 20px 12px;
  flex-shrink: 0;
`;

export const SheetTitle = styled.p`
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 4px 0;
  font-family: "MTS Wide", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: ${mts_text_primary};
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  background: ${mts_bg_lower};
  border: none;
  border-radius: ${mts_radius_12};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;

  &:hover {
    background: ${mts_bg_secondary};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${mts_text_primary};
  }
  ${visuallyImpairedMixin};
`;

export const OptionsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
`;

export const OptionRow = styled.button<{ $selected?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: ${mts_bg_lower};
  }

  ${visuallyImpairedMixin};
`;

export const OptionLabel = styled.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  color: ${mts_text_primary};
`;

export const GroupLabel = styled.p`
  margin: 0;
  padding: 12px 20px 4px;
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${mts_text_secondary};
`;

export const SheetFooter = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 20px 24px;
  flex-shrink: 0;

  & > * {
    flex: 1;
    max-width: none !important;
  }
`;

export const SearchWrapper = styled.div`
  padding: 0 20px 8px;
  flex-shrink: 0;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  background: ${mts_input_background};
  border: 1px solid ${mts_input_stroke};
  border-radius: ${mts_radius_12};
  padding: 0 44px 0 16px;
  font-family: "MTS Compact", sans-serif;
  font-size: 17px;
  line-height: 24px;
  color: ${mts_text_primary};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${mts_text_secondary};
  }

  &:focus {
    border-color: #626c77;
  }
`;

export const SearchIconWrapper = styled.span`
  position: absolute;
  right: 32px;
  top: 22px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${mts_text_secondary};
`;

// Mobile select trigger field
export const MobileField = styled.div<{ $hasValue?: boolean; $isError?: boolean; $disabled?: boolean }>`
  height: 48px;
  display: flex;
  align-items: center;
  background: rgba(188, 195, 208, 0.3);
  border: 1px solid ${({ $isError }) => ($isError ? "#F95721" : "rgba(188, 195, 208, 0.5)")};
  border-radius: ${mts_radius_16};
  padding: 0 8px 0 16px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  font-family: "MTS Compact", sans-serif;
  font-size: 17px;
  line-height: 24px;
  color: ${({ $hasValue }) => ($hasValue ? mts_text_primary : mts_text_secondary)};
`;

export const MobileFieldText = styled.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
