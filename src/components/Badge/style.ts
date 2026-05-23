import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import {
  mts_bg_lower,
  mts_radius_6,
  mts_radius_8,
  mts_text_inverted,
  mts_text_primary,
} from "../../consts";
import "../../assets/fonts.css";
import type { BadgeSize, BadgeVariant } from "./Badge";

const BADGE_CUSTOM_COLOR = "#1286D9";

const sizeStyles: Record<BadgeSize, ReturnType<typeof css>> = {
  xs: css`
    height: 16px;
    padding: 1px 4px;
    font-size: 10px;
    line-height: 14px;
    border-radius: ${mts_radius_6};
  `,
  s: css`
    height: 20px;
    padding: 2px 6px;
    font-size: 12px;
    line-height: 16px;
    border-radius: ${mts_radius_6};
  `,
  m: css`
    height: 24px;
    padding: 2px 8px;
    font-size: 14px;
    line-height: 20px;
    border-radius: ${mts_radius_6};
  `,
  l: css`
    height: 32px;
    padding: 4px 10px;
    font-size: 16px;
    line-height: 24px;
    border-radius: ${mts_radius_8};
  `,
};

const variantStyles: Record<BadgeVariant, ReturnType<typeof css>> = {
  default: css`
    background: ${mts_bg_lower};
    color: ${mts_text_primary};
  `,
  custom: css`
    background: ${BADGE_CUSTOM_COLOR};
    color: ${mts_text_inverted};
  `,
};

export const StyledBadge = styled.span<{
  $size: BadgeSize;
  $variant: BadgeVariant;
  $color?: string;
  $textColor?: string;
}>`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-family: "MTS Compact", sans-serif;
  font-weight: 400;
  white-space: nowrap;
  box-sizing: border-box;

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}

  ${({ $color }) => $color && css`background: ${$color};`}
  ${({ $textColor }) => $textColor && css`color: ${$textColor};`}

  ${visuallyImpairedMixin};
`;
