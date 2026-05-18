import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import {
  mts_text_primary,
  mts_text_secondary,
  mts_bg_secondary,
  mts_bg_secondary_elevated,
  mts_control_tertiary_active,
  mts_control_alternative,
  mts_accent_light_active,
} from "../../consts";
import "../../assets/fonts.css";
import type { InlineEditSize, InlineEditBg } from "./InlineEdit";

const fontBySize: Record<InlineEditSize, ReturnType<typeof css>> = {
  s: css`font-size: 12px; line-height: 16px;`,
  m: css`font-size: 14px; line-height: 20px;`,
  l: css`font-size: 17px; line-height: 24px;`,
};

const iconDisplaySizeBySize: Record<InlineEditSize, number> = { s: 12, m: 14, l: 16 };
export { iconDisplaySizeBySize };

const hoverBgByContext: Record<InlineEditBg, string> = {
  primary: mts_bg_secondary,
  secondary: mts_bg_secondary_elevated,
  ghost: "transparent",
};

export const Wrapper = styled.span<{
  $size: InlineEditSize;
  $bg: InlineEditBg;
  $editing: boolean;
  $showIcon: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: ${({ $editing }) => ($editing ? "text" : "pointer")};
  border-radius: 4px;
  padding: 0 2px;
  min-width: 0;
  font-family: "MTS Compact", "Arial", sans-serif;
  font-weight: 400;
  color: ${mts_text_primary};
  ${({ $size }) => fontBySize[$size]}

  ${({ $editing, $bg }) =>
    $editing
      ? css`
          outline: 1px solid ${mts_accent_light_active};
          border-radius: 4px;
        `
      : css`
          &:hover {
            background: ${hoverBgByContext[$bg]};
          }
        `}

  ${({ $showIcon }) =>
    !$showIcon &&
    css`
      .inline-edit-icon {
        opacity: 0;
      }
      &:hover .inline-edit-icon {
        opacity: 1;
      }
    `}

  ${visuallyImpairedMixin};
`;

export const IconWrapper = styled.span<{ $bg: InlineEditBg }>`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  color: ${mts_text_secondary};
`;

export const DisplayText = styled.span`
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Placeholder = styled.span`
  color: ${mts_text_secondary};
  white-space: nowrap;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  color: ${mts_text_primary};
  padding: 0;
  margin: 0;
  width: 100%;
  min-width: 40px;
`;
