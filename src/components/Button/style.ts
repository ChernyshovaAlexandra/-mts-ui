import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import {
  mts_bg_disabled,
  mts_bg_hover,
  mts_bg_inverted,
  mts_bg_lower,
  mts_bg_primary,
  mts_brand_red,
  mts_control_blur,
  mts_greyscale_400,
  mts_greyscale_700,
  mts_radius_12,
  mts_radius_16,
  mts_radius_20,
  mts_radius_32,
  mts_radius_8,
  mts_text_inverted,
  mts_text_primary,
} from "../../consts";
import "../../assets/fonts.css";

const sizeStyles = css<{ $size?: string }>`
  ${({ $size }) => {
    switch ($size) {
      case "xs":
        return css`
          padding: 4px;
          border-radius: ${mts_radius_8};
          font-size: 0.625rem;
          line-height: 0.75rem;
          gap: 4px;
          .btn-icon svg {
            width: 16px;
            height: 16px;
          }
        `;
      case "s":
        return css`
          padding: 8px;
          border-radius: ${mts_radius_12};
          font-size: 0.625rem;
          line-height: 0.75rem;
          gap: 4px;
          .btn-icon svg {
            width: 16px;
            height: 16px;
          }
        `;
      case "m":
        return css`
          padding: 10px;
          border-radius: ${mts_radius_16};
          font-size: 0.75rem;
          line-height: 1rem;
          .btn-icon svg {
            width: 24px;
            height: 24px;
          }
        `;
      case "xl":
        return css`
          padding: 24px;
          border-radius: ${mts_radius_20};
          font-size: 0.875rem;
          line-height: 1.25rem;
          .btn-icon svg {
            width: 24px;
            height: 24px;
          }
        `;
      case "l":
      default:
        return css`
          padding: 14px;
          border-radius: ${mts_radius_16};
          font-size: 0.75rem;
          line-height: 1rem;
          .btn-icon svg {
            width: 24px;
            height: 24px;
          }
        `;
    }
  }}
`;

const sharedStyles = css<{ $variant?: string; $width?: string; $size?: string }>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  text-align: center;
  font-family: "MTS Wide", sans-serif;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: ${({ $width }) =>
    $width === "auto" ? "auto" : $width === "max" ? "100%" : $width || "100%"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-height: 44px;
  min-width: 44px;
  border: 1px solid transparent;

  ${sizeStyles}

  ${({ $variant }) => {
    switch ($variant) {
      case "alternative":
        return css`
          background: ${mts_bg_inverted};
          color: ${mts_text_inverted};
          &:not(:disabled):hover {
            background: ${mts_greyscale_700};
          }
        `;
      case "secondary":
        return css`
          background: ${mts_bg_lower};
          color: ${mts_text_primary};
          &:not(:disabled):hover {
            background: ${mts_bg_hover};
          }
        `;
      case "tetriary":
        return css`
          background: ${mts_bg_primary};
          color: ${mts_text_primary};
          &:not(:disabled):hover {
            background: ${mts_bg_hover};
          }
        `;
      case "gray":
        return css`
          background: ${mts_control_blur};
          color: ${mts_text_inverted};
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          &:not(:disabled):hover {
            background: rgba(255, 255, 255, 0.16);
          }
        `;
      case "ghost":
        return css`
          background: transparent;
          color: ${mts_text_primary};
          &:not(:disabled):hover {
            background: ${mts_bg_hover};
          }
        `;
      case "icon":
        return css`
          background: ${mts_control_blur};
          color: ${mts_text_inverted};
          padding: 6px;
          border-radius: ${mts_radius_32};
          &:not(:disabled):hover {
            background: rgba(255, 255, 255, 0.16);
          }
        `;
      case "negative":
      case "menu-item":
        return css`
          background: ${mts_bg_lower};
          color: #d8400c;
          &:not(:disabled):hover {
            background: ${mts_bg_hover};
          }
        `;
      case "primary":
      default:
        return css`
          background: ${mts_brand_red};
          color: ${mts_text_inverted};
          &:not(:disabled):hover {
            background: #e4002e;
          }
        `;
    }
  }}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background: ${mts_bg_disabled} !important;
    color: ${mts_greyscale_400} !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  .btn-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }

  .btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    svg {
      width: 18px;
      height: 18px;
    }
  }
  ${visuallyImpairedMixin};
`;

export interface StyledBtnProps {
  $variant?: string;
  $width?: string;
  $size?: string;
}

export const StyledBtn = styled.button<StyledBtnProps>`
  outline: none;
  -webkit-appearance: none;
  ${sharedStyles}
`;

export const StyledBtnLink = styled.a<StyledBtnProps>`
  text-decoration: none;
  -webkit-appearance: none;
  ${sharedStyles}
`;
