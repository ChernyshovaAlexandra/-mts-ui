import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TimeInput } from "./TimeInput";

export default {
  title: "МТС/FormItems/TimeInput",
  component: TimeInput,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args) => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <TimeInput
      {...args}
      value={value}
      onChange={(val: string | null) => {
        if (val) {
          console.log("Time changed:", val);
          setValue(val);
        }
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Время встречи",
  errorMessage: "",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Время встречи",
  errorMessage: "Неверный формат времени",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Время встречи",
  errorMessage: "",
  disabled: true,
};
