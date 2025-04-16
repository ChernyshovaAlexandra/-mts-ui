import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Registration, { RegistrationProps } from "./Registration";

const meta: Meta<typeof Registration> = {
  title: "МТС/Registration",
  component: Registration,
  tags: ["autodocs"],
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
