import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import {
  mts_accent_light_active,
  mts_bg_lower,
  mts_radius_16,
  mts_text_primary,
  mts_text_secondary,
} from "../../consts";
import type { AccordionSize, AccordionVariant } from "./AccordionItem";

const headerSizes: Record<AccordionSize, ReturnType<typeof css>> = {
  s: css`
    min-height: 44px;
    padding: 12px 16px;
    gap: 12px;
  `,
  m: css`
    min-height: 52px;
    padding: 16px 20px;
    gap: 12px;
  `,
  l: css`
    min-height: 64px;
    padding: 20px 24px;
    gap: 16px;
  `,
};

const contentPaddings: Record<AccordionSize, ReturnType<typeof css>> = {
  s: css`
    padding: 0 16px 16px;
  `,
  m: css`
    padding: 0 20px 20px;
  `,
  l: css`
    padding: 0 24px 24px;
  `,
};

const iconSizes: Record<AccordionSize, number> = { s: 16, m: 20, l: 24 };

export const ItemWrapper = styled.div<{
  $variant: AccordionVariant;
  $disabled: boolean;
}>`
  width: 100%;
  box-sizing: border-box;
  ${({ $variant }) =>
    $variant === "secondary"
      ? css`
          background: ${mts_bg_lower};
          border-radius: ${mts_radius_16};
          overflow: hidden;
        `
      : css`
          background: transparent;
          border-radius: 0;
        `}
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
    `}
  ${visuallyImpairedMixin};
`;

export const HeaderButton = styled.button<{
  $size: AccordionSize;
  $isOpen: boolean;
  $disabled: boolean;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  font: inherit;
  color: inherit;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  box-sizing: border-box;
  ${({ $size }) => headerSizes[$size]};

  &:focus-visible {
    outline: 2px solid ${mts_accent_light_active};
    outline-offset: -2px;
  }
`;

export const LeftSlotBox = styled.div<{ $size: AccordionSize }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${({ $size }) => css`
    min-width: ${iconSizes[$size]}px;
    min-height: ${iconSizes[$size]}px;
  `};
`;

export const TitleColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  min-width: 0;
  gap: 2px;
  color: ${mts_text_primary};
`;

export const DescriptionWrap = styled.div`
  color: ${mts_text_secondary};
`;

export const ChevronWrap = styled.span<{
  $size: AccordionSize;
  $isOpen: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${mts_text_primary};

  svg {
    width: ${({ $size }) => iconSizes[$size]}px;
    height: ${({ $size }) => iconSizes[$size]}px;
    transition: transform 0.3s ease-in-out;
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

export const ContentInner = styled.div<{ $size: AccordionSize }>`
  ${({ $size }) => contentPaddings[$size]};
  color: ${mts_text_primary};
`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  ${visuallyImpairedMixin};
`;

export const ItemSpacer = styled.div<{ $variant: AccordionVariant }>`
  ${({ $variant }) =>
    $variant === "secondary"
      ? css`
          height: 8px;
        `
      : css`
          height: 0;
        `}
`;
