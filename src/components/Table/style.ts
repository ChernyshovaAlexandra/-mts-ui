import styled, { css } from "styled-components";
import {
  mts_input_stroke,
  mts_text_primary,
  mts_text_secondary,
  mts_bg_secondary,
  mts_bg_primary,
} from "../../consts";
import { visuallyImpairedMixin } from "../../accessibility";
import { Text } from "../Text/Text";
import type { TableSize, TableVariant } from "./Table";

const CELL_PADDING: Record<TableSize, string> = {
  s: "12px",
  m: "16px",
};

export const TableRoot = styled.div`
  width: 100%;
  overflow-x: auto;
  box-sizing: border-box;
  ${visuallyImpairedMixin};
`;

export const TableContainer = styled.div<{ $variant: TableVariant }>`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  background: ${({ $variant }) => ($variant === "grey" ? mts_bg_secondary : mts_bg_primary)};
  border: ${({ $variant }) => ($variant === "grey" ? "none" : `1px solid ${mts_input_stroke}`)};
  box-sizing: border-box;
`;

export const TableHeaderRow = styled.div<{ $variant: TableVariant }>`
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid ${mts_input_stroke};
  background: ${({ $variant }) => ($variant === "grey" ? mts_bg_secondary : mts_bg_primary)};
`;

export const TableHeaderCell = styled.div<{
  $width?: number | string;
  $flex?: boolean;
  $noPadding?: boolean;
  $size: TableSize;
}>`
  display: flex;
  align-items: center;
  padding: ${({ $size, $noPadding }) => `${CELL_PADDING[$size]} ${$noPadding ? "0" : CELL_PADDING[$size]}`};
  box-sizing: border-box;
  flex-shrink: 0;

  ${({ $flex }) =>
    $flex
      ? css`flex: 1 0 0; min-width: 0;`
      : css`flex-shrink: 0;`}

  ${({ $width }) =>
    $width !== undefined &&
    css`width: ${typeof $width === "number" ? `${$width}px` : $width};`}
`;

export const HeaderText = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: default;
  user-select: none;
`;

export const HeaderLabel = styled(Text).attrs({ as: "span" })`
  font-family: "MTS Compact", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${mts_text_primary};
  white-space: nowrap;
`;

export const SortButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${mts_text_secondary};
  flex-shrink: 0;

  &:hover {
    color: ${mts_text_primary};
  }
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableRow = styled.div<{ $selected?: boolean; $clickable?: boolean }>`
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid ${mts_input_stroke};
  background: ${({ $selected }) => ($selected ? "rgba(0, 124, 255, 0.06)" : "transparent")};
  transition: background 0.15s ease;

  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;
      &:hover {
        background: rgba(0, 0, 0, 0.03);
      }
    `}

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.div<{
  $width?: number | string;
  $flex?: boolean;
  $noPadding?: boolean;
  $size: TableSize;
}>`
  display: flex;
  align-items: center;
  padding: ${({ $size, $noPadding }) => `${CELL_PADDING[$size]} ${$noPadding ? "0" : CELL_PADDING[$size]}`};
  box-sizing: border-box;
  align-self: stretch;
  min-width: 0;

  ${({ $flex }) =>
    $flex
      ? css`flex: 1 0 160px;`
      : css`flex-shrink: 0;`}

  ${({ $width }) =>
    $width !== undefined &&
    css`width: ${typeof $width === "number" ? `${$width}px` : $width};`}
`;
