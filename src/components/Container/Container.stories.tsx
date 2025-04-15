import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Container } from "./Container";
import { Text } from "../Text/Text";

export default {
  title: "МТС/Container",
  component: Container,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = () => (
  <Container>
    <Text>Какой-то текст для примера внутри контейнера</Text>
  </Container>
);

export const Default = Template.bind({});
