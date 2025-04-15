import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Snackbar, SnackBarProps } from "./Snackbar";
import { Button } from "../Button";

export default {
  title: "МТС/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error"],
    },
  },
} as Meta;

const Template: StoryFn<SnackBarProps> = () => (
  <Snackbar
    type="success"
    message={
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Успех! действие выполнено.
        <Button
          variant="primary"
          btn_type="button"
          width="auto"
          style={{ marginLeft: "10px" }}
        >
          Хорошо
        </Button>
      </div>
    }
  />
);

export const Default = Template.bind({});
