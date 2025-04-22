import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { RadioButton, RadioButtonProps } from "./RadioButton";

export default {
  title: "МТС/FormItems/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta<RadioButtonProps>;

const Template: StoryFn<RadioButtonProps> = (args: any) => (
  <RadioButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "radioGroup1",
  value: "option1",
  label: "Select me",
  checked: true,
};

export const WithError = Template.bind({});
WithError.args = {
  name: "radioGroup2",
  value: "option2",
  label: "Select me",
  errorMessage: "Error: Something went wrong",
  checked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: "radioGroup3",
  value: "option3",
  label: "Select me",
  checked: false,
  disabled: true,
};
