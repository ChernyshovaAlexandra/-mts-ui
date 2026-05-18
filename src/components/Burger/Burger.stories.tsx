import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Burger } from "./Burger";

export default {
  title: "МТС/Burger",
  component: Burger,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = () => <Burger />;

export const Default = Template.bind({});
