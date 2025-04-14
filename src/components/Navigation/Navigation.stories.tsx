import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Navigation, NavigationProps } from "./Navigation";
import { Button } from "../Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "МТС/Navigation",
  component: Navigation,
  argTypes: {
    onLogin: { action: "login clicked" },
    links: { control: "object" },
    withLogin: { control: "boolean" },
    style: { control: "object" },
    menuStyle: { control: "object" },
    customBtn: { control: false },
  },
} as Meta<NavigationProps>;

const Template: StoryFn<NavigationProps> = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { title: "Механика игр", url: "/" },
    { title: "Правила участия", url: "/" },
    { title: "Таблица результатов", url: "/" },
  ],
  withLogin: true,
};

export const WithoutLogin = Template.bind({});
WithoutLogin.args = {
  links: [
    { title: "Механика игр", url: "/" },
    { title: "Правила участия", url: "/" },
    { title: "Таблица результатов", url: "/" },
  ],
  withLogin: false,
};

export const CustomButton = Template.bind({});
CustomButton.args = {
  links: [
    { title: "Механика игр", url: "/" },
    { title: "Правила участия", url: "/" },
    { title: "Таблица результатов", url: "/" },
  ],
  withLogin: true,
  customBtn: (
    <Button
      btn_type="button"
      variant="secondary"
      style={{
        padding: "5px 10px",
        height: "35px",
        fontSize: "10px",
      }}
      onClick={action("custom button clicked")}
    >
      Custom Login
    </Button>
  ),
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  links: [
    { title: "Механика игр", url: "/" },
    { title: "Правила участия", url: "/" },
    { title: "Таблица результатов", url: "/" },
  ],
  withLogin: true,
  style: { backgroundColor: "#f0f0f0", padding: "1rem" },
  menuStyle: { color: "#ff0032", fontWeight: "bold" },
};
