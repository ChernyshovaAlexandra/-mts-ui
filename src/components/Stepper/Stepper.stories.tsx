// stories/Stepper.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "./Stepper";

const meta: Meta<typeof Stepper> = {
  title: "МТС/Stepper",
  component: Stepper,
  tags: ["autodocs"],

  argTypes: {
    steps: {
      control: "object",
      description:
        'Массив шагов: { index: number; status: "active"|"disabled"|"success"|"error" }[]',
    },
  },

  parameters: {
    backgrounds: {
      values: [{ name: "grey canvas", value: "#fff" }],
      default: "grey canvas",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Stepper>;

const Template: Story = {
  render: (args) => <Stepper {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    steps: [
      { index: 1, status: "success" },
      { index: 2, status: "success" },
      { index: 3, status: "error" },
      { index: 4, status: "active" },
      { index: 5, status: "disabled" },
      { index: 6, status: "success" },
      { index: 7, status: "error" },
      { index: 8, status: "active" },
      { index: 9, status: "disabled" },
    ],
  },
};
