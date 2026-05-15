import styled from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import {
  mts_bg_primary_elevated,
  mts_bg_lower,
  mts_bg_secondary,
  mts_bg_inverted,
  mts_text_primary,
} from "../../consts";

export type SecondaryColor = "white" | "grey" | "inverted";

// Primary
export const PrimaryWrapper = styled.div`
  background: ${mts_bg_primary_elevated};
  border-radius: 24px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.08);
`;

export const PrimaryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PrimaryFooter = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const CloseIconButton = styled.button`
  width: 44px;
  height: 44px;
  background: ${mts_bg_lower};
  border: none;
  border-radius: 16px;
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

// Secondary
export const SecondaryWrapper = styled.div<{ $color: SecondaryColor }>`
  background: ${({ $color }) => {
    if ($color === "white") return mts_bg_primary_elevated;
    if ($color === "inverted") return mts_bg_inverted;
    return mts_bg_lower;
  }};
  border-radius: 20px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${({ $color }) =>
    $color === "white" &&
    `box-shadow: 0 0 16px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.08);`}
`;

export const SecondaryHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`;

export const SecondaryIconSlot = styled.span`
  width: 20px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const SecondaryCloseButton = styled.button<{ $inverted?: boolean }>`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 4px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover {
    background: ${({ $inverted }) =>
      $inverted ? "rgba(255,255,255,0.12)" : mts_bg_secondary};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({ $inverted }) => ($inverted ? "#FAFAFA" : mts_text_primary)};
  }
  ${visuallyImpairedMixin};
`;

export const LinkText = styled.span`
  color: #0070e5;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`;

// Tertiary
export const TertiaryWrapper = styled.div`
  background: ${mts_bg_lower};
  border-radius: 16px;
  padding: 8px 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  overflow: hidden;
`;

export const TertiaryIconSlot = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #0070e5;
`;
