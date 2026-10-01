import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./TextArea";

const meta = {
  title: "МТС/FormItems/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: { label: "Твоя история", placeholder: "Расскажи свою историю", rows: 7 },
} satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Error: Story = { args: { errorMessage: "Расскажи историю" } };
export const Disabled: Story = { args: { disabled: true, value: "Сохранённая история" } };
