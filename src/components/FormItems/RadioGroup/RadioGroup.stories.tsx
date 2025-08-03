import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { RadioGroup, type RadioGroupProps } from "./RadioGroup";

export default {
  title: "МТС/FormItems/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    errorMessage: { control: "text" },
    direction: {
      control: {
        type: "radio",
        options: ["vertical", "horizontal"],
      },
    },
    onChange: { action: "change" },
  },
} as Meta<RadioGroupProps>;

const sampleOptions = [
  { value: "one", label: "Один" },
  { value: "two", label: "Два" },
  { value: "three", label: "Три" },
];

const Template: StoryFn<RadioGroupProps> = (args) => {
  const [val, setVal] = useState(args.value ?? "");

  return (
    <RadioGroup
      {...args}
      value={val}
      onChange={(v) => {
        setVal(v);
        if (args.onChange) args.onChange(v);
      }}
    />
  );
};

export const Vertical: StoryFn<RadioGroupProps> = Template.bind({});
Vertical.args = {
  name: "vertical-sample",
  label: "Выберите вариант",
  options: sampleOptions,
  direction: "vertical",
};

export const Horizontal: StoryFn<RadioGroupProps> = Template.bind({});
Horizontal.args = {
  ...Vertical.args,
  name: "horizontal-sample",
  direction: "horizontal",
};

export const WithError: StoryFn<RadioGroupProps> = Template.bind({});
WithError.args = {
  ...Vertical.args,
  name: "error-sample",
  errorMessage: "Необходимо выбрать вариант",
};

export const DisabledOption: StoryFn<RadioGroupProps> = Template.bind({});
DisabledOption.args = {
  ...Vertical.args,
  name: "disabled-sample",
  options: [
    { value: "one", label: "Один" },
    { value: "two", label: "Два", disabled: true },
    { value: "three", label: "Три" },
  ],
};