import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SelectField, { SelectFieldProps } from "./SelectField";

export default {
  title: "МТС/FormItems/SelectField",
  component: SelectField,
  argTypes: {
    onChange: { action: "changed" },
    options: { control: "object" },
  },
} as Meta<SelectFieldProps>;

const Template: StoryFn<SelectFieldProps> = (args) => <SelectField {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "example-select",
  value: "",
  label: "Choose an option",
  placeholder: "Select...",
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ],
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: "Invalid selection",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
