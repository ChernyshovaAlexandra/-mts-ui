import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { GalleryCard } from "./GalleryCard";

const meta: Meta<typeof GalleryCard> = {
  title: "МТС/GalleryCard",
  component: GalleryCard,
};

export default meta;

type Story = StoryObj<typeof GalleryCard>;

export const SingleImage: Story = {
  args: {
    images: [
      {
        src: "https://i.pinimg.com/236x/a9/7c/c8/a97cc8055115fddd43b6b4a526458772.jpg",
        title: "Оригинал",
      },
    ],
    description:
      "Каждый раз, наблюдая за безумными перипетиями в «Кремниевой долине», я невольно вспоминаю твою работу!",
    lightbox: true,
  },
};

export const CarouselImages: Story = {
  args: {
    images: [
      {
        src: "https://i.pinimg.com/236x/a9/7c/c8/a97cc8055115fddd43b6b4a526458772.jpg",
        title: "Оригинал",
      },
      {
        src: "https://pikuco.ru/upload/test_stable/035/0357a7dffda8730f405b1a02b7dd6844.webp",
        title: "Результат",
      },
    ],
    description: "Тот же драйв, та же одержимость идеей. Отличная работа!",
    lightbox: true,
  },
};
