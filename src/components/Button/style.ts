import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import { ButtonElementProps, LinkElementProps } from "./type";
import {
  mts_text_primary,
  mts_bg_secondary,
  mts_bg_hover,
  mts_brand_red,
  mts_bg_lower,
} from "../../consts";
import "../../assets/fonts.css";

const sharedStyles = css<{ variant?: string; width?: string }>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  text-align: center;
  font:
    700 0.75rem/1rem "MTS Wide",
    sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05px;
  padding: 14px;
  border-radius: 16px;
  width: ${({ width }) =>
    width === "auto" ? "auto" : width === "max" ? "100%" : width || "100%"};
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 320px;
  border: 1px solid transparent;

  ${({ variant }) => {
    switch (variant) {
      case "secondary":
        return css`
          background: ${mts_bg_secondary};
          color: ${mts_text_primary};
          &:not(:disabled):hover {
            background: ${mts_bg_hover};
          }
        `;
      case "tetriary":
        return css`
          background: #ffffff;
          color: ${mts_text_primary};
          &:not(:disabled):hover {
            background: #e4e7ec;
          }
          &:disabled {
            background: #969fa8;
          }
        `;
      case "gray":
        return css`
          background: ${mts_bg_lower};
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);

          &:not(:disabled):hover {
            background-color: #bcc3d040;
          }
        `;
      case "ghost":
        return css`
          background: #ffffff12;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 32px;

          &:not(:disabled):hover {
            background: #ffffff30;
          }
        `;
      case "icon":
        return css`
          background: #ffffff12;
          color: #fff;
          padding: 6px;
          border-radius: 50%;
          justify-content: center;
          border-radius: 32px;

          &:not(:disabled):hover {
            background: #ffffff30;
          }
        `;
      case "primary":
      default:
        return css`
          background: ${mts_brand_red};
          color: #fff;
          &:not(:disabled):hover {
            background: #e4002e;
            color: #fff;
          }
        `;
    }
  }}

  &:disabled {
    cursor: not-allowed;
    background-color: #969fa8 !important;
    color: #fff !important;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  .btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 18px;
      height: 18px;
    }
  }
  ${visuallyImpairedMixin};
`;

export const StyledBtn = styled.button<
  Pick<ButtonElementProps, "style" | "disabled" | "width" | "variant">
>`
  outline: none;
  -webkit-appearance: none;
  ${sharedStyles}
`;

export const StyledBtnLink = styled.a<
  Pick<LinkElementProps, "href" | "style" | "variant" | "width">
>`
  text-decoration: none;
  -webkit-appearance: none;
  ${sharedStyles}
`;
