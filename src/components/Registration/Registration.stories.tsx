import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Registration, { RegistrationProps } from "./Registration";

const meta: Meta<typeof Registration> = {
  title: "МТС/Registration",
  component: Registration,
  tags: ["autodocs"],
  args: {
    ages: [{ label: "2-5" }, { label: "6-9" }],
    regions: [{ label: "Moscow" }, { label: "Ryazan" }],
  },
};

export default meta;

const Template: StoryFn<RegistrationProps> = (args: any) => (
  <div
    style={{
      background: "linear-gradient(135deg, #8e2de2, #f27121)",
      width: "100%",
      height: "100vh",
      position: "relative",
    }}
  >
    <Registration {...args} />;
  </div>
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => console.info(""),
};
