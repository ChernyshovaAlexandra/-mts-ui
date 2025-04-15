import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "МТС/FormItems/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta<CheckboxProps>;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "checkbox1",
  label: "Check me",
  errorMessage: "",
  checked: true,
};

export const WithError = Template.bind({});
WithError.args = {
  name: "checkbox2",
  label: "Check me",
  errorMessage: "Error: Something went wrong",
  checked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: "checkbox3",
  label: "Check me",
  errorMessage: "",
  checked: false,
  disabled: true,
};
