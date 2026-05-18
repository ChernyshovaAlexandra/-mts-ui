import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";
import styled from "styled-components";

const meta: Meta<typeof Carousel> = {
  title: "МТС/Carousel",
  component: Carousel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

// Заглушка для элементов карусели
const Item = styled.div`
  width: 160px;
  height: 120px;
  background-color: #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const mockItems = Array.from({ length: 10 }, (_, i) => (
  <Item key={i}>Элемент {i + 1}</Item>
));

export const Default: Story = {
  args: {
    items: mockItems,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrowColor: "#FF0032",
    infinite: false,
  },
};
