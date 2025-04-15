// Breadcrumbs.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs, BreadcrumbsProps } from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "МТС/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

const sampleCrumbs: BreadcrumbsProps["crumbs"] = [
  { name: "Категория", path: "/category" },
  { name: "Подкатегория", path: "/category/sub" },
  { name: "Товар", path: "/category/sub/product" },
];

export const Default: Story = {
  args: {
    crumbs: sampleCrumbs,
  },
};

export const SingleCrumb: Story = {
  args: {
    crumbs: [{ name: "Только один уровень", path: "/single" }],
  },
};

export const EmptyCrumbs: Story = {
  args: {
    crumbs: [],
  },
};
