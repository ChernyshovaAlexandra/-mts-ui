import React, { FC } from "react";
import { IconSort } from "../../icons/IconSort/IconSort";
import { IconSortingAscending } from "../../icons/IconSortingAscending/IconSortingAscending";
import { IconSortingDescending } from "../../icons/IconSortingDescending/IconSortingDescending";
import {
  TableRoot,
  TableContainer,
  TableHeaderRow,
  TableHeaderCell,
  HeaderText,
  HeaderLabel,
  SortButton,
  TableBody,
  TableRow,
  TableCell,
} from "./style";

export type SortDirection = "asc" | "desc" | null;
export type TableSize = "s" | "m";
export type TableVariant = "white" | "grey";

export interface TableColumn<T = Record<string, unknown>> {
  key: string;
  title: string;
  width?: number | string;
  flex?: boolean;
  sortable?: boolean;
  noPadding?: boolean;
  render?: (value: unknown, row: T, index: number) => React.ReactNode;
}

export interface TableProps<T extends Record<string, unknown> = Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  rowKey?: keyof T | ((row: T) => string | number);
  size?: TableSize;
  variant?: TableVariant;
  selectedRows?: (string | number)[];
  onRowClick?: (row: T, index: number) => void;
  onSort?: (key: string, direction: SortDirection) => void;
  sortKey?: string;
  sortDirection?: SortDirection;
  className?: string;
  style?: React.CSSProperties;
}

function getRowKey<T extends Record<string, unknown>>(
  row: T,
  index: number,
  rowKey?: keyof T | ((row: T) => string | number)
): string | number {
  if (!rowKey) return index;
  if (typeof rowKey === "function") return rowKey(row);
  return row[rowKey] as string | number;
}

function nextSortDirection(current: SortDirection): SortDirection {
  if (current === null) return "asc";
  if (current === "asc") return "desc";
  return null;
}

export const Table = <T extends Record<string, unknown>>({
  columns,
  data,
  rowKey,
  size = "s",
  variant = "white",
  selectedRows,
  onRowClick,
  onSort,
  sortKey,
  sortDirection,
  className,
  style,
}: TableProps<T>) => {
  const handleSort = (key: string) => {
    if (!onSort) return;
    const isActive = sortKey === key;
    const next = isActive ? nextSortDirection(sortDirection ?? null) : "asc";
    onSort(key, next);
  };

  return (
    <TableRoot className={className} style={style}>
      <TableContainer $variant={variant}>
        <TableHeaderRow $variant={variant}>
          {columns.map((col) => (
            <TableHeaderCell
              key={col.key}
              $width={col.width}
              $flex={col.flex}
              $noPadding={col.noPadding}
              $size={size}
            >
              <HeaderText>
                <HeaderLabel>{col.title}</HeaderLabel>
                {col.sortable && (
                  <SortButton
                    onClick={() => handleSort(col.key)}
                    aria-label={`Сортировать по ${col.title}`}
                  >
                    {sortKey === col.key && sortDirection === "asc" ? (
                      <IconSortingAscending width={16} height={16} />
                    ) : sortKey === col.key && sortDirection === "desc" ? (
                      <IconSortingDescending width={16} height={16} />
                    ) : (
                      <IconSort width={16} height={16} />
                    )}
                  </SortButton>
                )}
              </HeaderText>
            </TableHeaderCell>
          ))}
        </TableHeaderRow>

        <TableBody>
          {data.map((row, index) => {
            const key = getRowKey(row, index, rowKey);
            const isSelected = selectedRows?.includes(key) ?? false;

            return (
              <TableRow
                key={key}
                $selected={isSelected}
                $clickable={!!onRowClick}
                onClick={onRowClick ? () => onRowClick(row, index) : undefined}
              >
                {columns.map((col) => (
                  <TableCell
                    key={col.key}
                    $width={col.width}
                    $flex={col.flex}
                    $noPadding={col.noPadding}
                    $size={size}
                  >
                    {col.render
                      ? col.render(row[col.key], row, index)
                      : (row[col.key] as React.ReactNode) ?? null}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>
    </TableRoot>
  );
};

export default Table;
