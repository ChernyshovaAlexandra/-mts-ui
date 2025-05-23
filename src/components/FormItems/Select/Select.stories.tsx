import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Select, SelectProps } from "./Select";
import Input from "../Input/Input";

export default {
  title: "МТС/FormItems/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    options: { control: "object" },
  },
} as Meta<SelectProps>;

const Template: StoryFn<SelectProps> = (args: any) => (
  <div
    style={{
      height: "300px",
      // display: "grid",
      // gridTemplateColumns: "200px 200px",
      // gap: '10px'
    }}
  >
    <Select {...args} />
    {/* <Input value="123123" label="Input" /> */}
  </div>
);

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

export const DefaultNative = Template.bind({});

DefaultNative.args = {
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
