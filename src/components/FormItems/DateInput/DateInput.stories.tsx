import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DateInput } from "./DateInput";

export default {
  title: "МТС/FormItems/DateInput",
  component: DateInput,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <DateInput
      {...args}
      value={value}
      onChange={(val: string | null) => {
        if (val) {
          console.log("Date changed:", val);
          setValue(val);
        }
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Дата рождения",
  errorMessage: "",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Дата рождения",
  errorMessage: "Неверный формат даты",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Дата рождения",
  errorMessage: "",
  disabled: true,
};
