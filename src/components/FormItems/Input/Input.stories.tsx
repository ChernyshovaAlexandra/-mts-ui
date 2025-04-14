import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "МТС/FormItems/Input",
  component: Input,
  argTypes: {
    errorMessage: { control: "text" },
    onBlur: { action: "blur" },
    onChange: { action: "change" },
    validatePattern: { table: { disable: true } },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Input>> = (args) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text",
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  placeholder: "Enter your email",
  errorMessage: "Invalid email format",
  validatePattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
};
