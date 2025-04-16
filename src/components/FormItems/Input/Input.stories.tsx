import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "МТС/FormItems/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    errorMessage: { control: "text" },
    onBlur: { action: "blur" },
    onChange: { action: "change" },
    validatePattern: { table: { disable: true } },
  },
  args: {
    value: "",
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Input>> = (args) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        // Если нужно вызвать действие из argTypes:
        if (args.onChange) args.onChange(e);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text",
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  label: "Валидация",
  placeholder: "Enter your email",
  errorMessage: "Invalid email format",
  validatePattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Нередактируемый",
  value: "elena_sv@mts.ru",
  placeholder: "Enter your email",
  errorMessage: "Invalid email format",
  validatePattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
};
