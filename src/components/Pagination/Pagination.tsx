import React, { type HTMLAttributes } from "react";
import { Navigation, PageButton, PageCounter, PageList } from "./style";

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

function getPages(current: number, total: number, compact: boolean): (number | "ellipsis")[] {
  if (total <= (compact ? 5 : 7)) return Array.from({ length: total }, (_, index) => index + 1);
  if (compact) {
    if (current <= 3) return [1, 2, 3, "ellipsis", total];
    if (current >= total - 2) return [1, "ellipsis", total - 2, total - 1, total];
    return [1, "ellipsis", current, "ellipsis", total];
  }
  if (current <= 4) return [1, 2, 3, 4, 5, "ellipsis", total];
  if (current >= total - 3) return [1, "ellipsis", total - 4, total - 3, total - 2, total - 1, total];
  return [1, "ellipsis", current - 1, current, current + 1, "ellipsis", total];
}

export const Pagination = ({ currentPage, totalPages, onPageChange, disabled = false, "aria-label": ariaLabel = "Пагинация", ...rest }: PaginationProps) => {
  const total = Number.isFinite(totalPages) ? Math.max(0, Math.floor(totalPages)) : 0;
  if (total <= 1) return null;
  const current = Number.isFinite(currentPage) ? Math.min(total, Math.max(1, Math.floor(currentPage))) : 1;
  const renderPages = (compact: boolean) => getPages(current, total, compact).map((page, index) => (
    page === "ellipsis" ? <PageCounter key={`ellipsis-${index}`} aria-hidden="true">…</PageCounter> : (
      <PageButton key={page} type="button" $active={page === current} aria-current={page === current ? "page" : undefined} aria-label={`Страница ${page}`} disabled={disabled} onClick={() => { if (page !== current) onPageChange(page); }}>{page}</PageButton>
    )
  ));
  return (
    <Navigation {...rest} aria-label={ariaLabel}>
      {total > 2 && <PageButton type="button" disabled={disabled || current === 1} aria-label="Предыдущая страница" onClick={() => onPageChange(current - 1)}><span aria-hidden="true">‹</span></PageButton>}
      <PageList $compact>{renderPages(true)}</PageList>
      <PageList $compact={false}>{renderPages(false)}</PageList>
      {total > 2 && <PageButton type="button" disabled={disabled || current === total} aria-label="Следующая страница" onClick={() => onPageChange(current + 1)}><span aria-hidden="true">›</span></PageButton>}
    </Navigation>
  );
};
