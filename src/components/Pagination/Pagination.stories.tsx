import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Pagination, type PaginationProps } from "./Pagination";
import { mts_bg_lower } from "../../consts";

export default {
  title: "МТС/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: { currentPage: 1, totalPages: 12 },
  render: (args) => <InteractivePagination {...args} />,
  decorators: [(Story) => <div style={{ background: mts_bg_lower, padding: 24 }}><Story /></div>],
} as Meta<PaginationProps>;

const InteractivePagination = (args: PaginationProps) => {
  const [page, setPage] = useState(args.currentPage);
  return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
};
export const Default: StoryFn<PaginationProps> = (args) => <InteractivePagination {...args} />;
export const TwoPages = { args: { totalPages: 2 } };
export const MiddlePage = { args: { currentPage: 6, totalPages: 12 } };
export const LastPage = { args: { currentPage: 12, totalPages: 12 } };
export const Disabled = { args: { currentPage: 6, totalPages: 12, disabled: true } };
