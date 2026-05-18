import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import { mts_brand_red, mts_text_primary, mts_text_inverted } from "../../consts";
import "../../assets/fonts.css";
import type { CounterSize, CounterVariant } from "./Counter";

export const Dot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${mts_brand_red};
  flex-shrink: 0;
`;

const sizeStyles: Record<Exclude<CounterSize, "notification">, ReturnType<typeof css>> = {
  s: css`
    min-width: 16px;
    height: 16px;
    font-size: 10px;
    line-height: 12px;
    border-radius: 8px;
    padding: 0 4px;
  `,
  m: css`
    min-width: 20px;
    height: 20px;
    font-size: 12px;
    line-height: 15px;
    border-radius: 10px;
    padding: 0 6px;
  `,
  l: css`
    min-width: 24px;
    height: 24px;
    font-size: 14px;
    line-height: 18px;
    border-radius: 12px;
    padding: 0 7px;
  `,
};

const variantStyles: Record<CounterVariant, ReturnType<typeof css>> = {
  red: css`
    background: ${mts_brand_red};
    color: ${mts_text_inverted};
  `,
  dark: css`
    background: ${mts_text_primary};
    color: ${mts_text_inverted};
  `,
  ghost: css`
    background: transparent;
    color: ${mts_text_primary};
  `,
};

export const StyledCounter = styled.span<{
  $size: Exclude<CounterSize, "notification">;
  $variant: CounterVariant;
  $circular: boolean;
}>`
  display: inline-grid;
  place-items: center;
  font-family: "MTS Compact", sans-serif;
  font-weight: 500;
  white-space: nowrap;
  box-sizing: border-box;
  flex-shrink: 0;

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}

  ${({ $circular, $size }) =>
    $circular &&
    css`
      padding: 0;
      width: ${$size === "s" ? "16px" : $size === "m" ? "20px" : "24px"};
      border-radius: 50%;
    `}

  ${visuallyImpairedMixin};
`;
