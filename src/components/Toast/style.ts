import styled, { css, keyframes } from "styled-components";
import {
  mts_bg_inverted,
  mts_bg_primary_elevated,
  mts_radius_12,
  mts_radius_16,
} from "../../consts";
import "../../assets/fonts.css";

export type ToastPosition =
  | "bottom-right"
  | "bottom-center"
  | "top-right"
  | "top-center";

export type ToastVariant = "dark" | "light";

const MOBILE_BREAKPOINT = "767px";

const fadeInBottom = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeInTop = keyframes`
  from { opacity: 0; transform: translateY(-12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const positionStyles = ($position: ToastPosition) => {
  switch ($position) {
    case "bottom-center":
      return css`
        bottom: 32px;
        left: 50%;
        transform: translateX(-50%);
        animation: ${fadeInBottom} 0.3s ease-out;
      `;
    case "top-right":
      return css`
        top: 16px;
        right: 32px;
        animation: ${fadeInTop} 0.3s ease-out;
      `;
    case "top-center":
      return css`
        top: 16px;
        left: 50%;
        transform: translateX(-50%);
        animation: ${fadeInTop} 0.3s ease-out;
      `;
    case "bottom-right":
    default:
      return css`
        bottom: 32px;
        right: 32px;
        animation: ${fadeInBottom} 0.3s ease-out;
      `;
  }
};

export const ToastRoot = styled.div<{ $position: ToastPosition }>`
  position: fixed;
  z-index: 9999;
  max-width: 364px;
  ${({ $position }) => positionStyles($position)};

  @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
    bottom: 12px;
    top: auto;
    left: 12px;
    right: 12px;
    max-width: none;
    transform: none;
    animation: ${fadeInBottom} 0.3s ease-out;
  }
`;

export const ToastBody = styled.div<{
  $rounded: "sm" | "lg";
  $variant: ToastVariant;
}>`
  display: flex;
  align-items: ${({ $rounded }) => ($rounded === "lg" ? "flex-start" : "center")};
  gap: 8px;
  padding: 8px 12px;
  background: ${({ $variant }) =>
    $variant === "light" ? mts_bg_primary_elevated : mts_bg_inverted};
  border-radius: ${({ $rounded }) =>
    $rounded === "lg" ? mts_radius_16 : mts_radius_12};
  overflow: hidden;
  ${({ $variant }) =>
    $variant === "light" &&
    css`
      box-shadow:
        0 0 8px rgba(0, 0, 0, 0.08),
        0 4px 8px rgba(0, 0, 0, 0.08);
    `};
`;

export const ToastIconSlot = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`;

export const ToastAvatarSlot = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ToastMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`;
