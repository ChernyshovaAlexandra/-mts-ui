import styled, { css } from "styled-components";
import {
  mts_bg_lower,
  mts_bg_inverted,
  mts_bg_disabled,
  mts_text_primary,
  mts_greyscale_0,
} from "../../consts";
import { visuallyImpairedMixin } from "../../accessibility";
import { textStyles } from "../Text/style";

export type ChipSize = "medium" | "small";
export type ChipSelectedVariant = "filled" | "outline";

const sizeStyles: Record<ChipSize, ReturnType<typeof css>> = {
  medium: css`
    border-radius: 16px;
    padding: 12px 10px;
    gap: 4px;
    ${textStyles["P4-Regular-Comp"]}
    line-height: 1;
  `,
  small: css`
    border-radius: 12px;
    padding: 12px 10px;
    gap: 4px;
    ${textStyles["P4-Regular-Comp"]}
    line-height: 1;
  `,
};

export const StyledChip = styled.button<{
  $size: ChipSize;
  $selected: boolean;
  $selectedVariant: ChipSelectedVariant;
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s ease, transform 0.1s ease, box-shadow 0.15s ease;
  box-sizing: border-box;
  user-select: none;

  ${({ $size }) => sizeStyles[$size]}

  /* Default state */
  background: ${mts_bg_lower};
  color: ${mts_text_primary};
  border: 1px solid transparent;

  /* Selected filled */
  ${({ $selected, $selectedVariant }) =>
    $selected &&
    $selectedVariant === "filled" &&
    css`
      background: ${mts_bg_inverted};
      color: ${mts_greyscale_0};
    `}

  /* Selected outline */
  ${({ $selected, $selectedVariant }) =>
    $selected &&
    $selectedVariant === "outline" &&
    css`
      background: ${mts_bg_lower};
      color: ${mts_text_primary};
      border: 1px solid ${mts_text_primary};
    `}

  /* Disabled */
  ${({ $disabled }) =>
    $disabled &&
    css`
      background: ${mts_bg_disabled};
      color: ${mts_text_primary};
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}

  /* Hover (only non-disabled) */
  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:hover {
        filter: brightness(0.95);
      }
      &:active {
        transform: scale(0.98);
      }
      &:focus-visible {
        box-shadow: 0 0 0 2px #007cff;
      }
    `}

  ${visuallyImpairedMixin}
`;

export const ChipIconSlot = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ChipCloseButton = styled.button<{ $onDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: inherit;
  flex-shrink: 0;
  line-height: 1;
  border-radius: 6px;
  background: ${({ $onDark }) =>
    $onDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)"};

  &:hover {
    background: ${({ $onDark }) =>
      $onDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.14)"};
  }
`;
