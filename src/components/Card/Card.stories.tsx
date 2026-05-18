import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Text } from "../Text/Text";
import {
  mts_text_primary,
  mts_text_secondary,
  mts_bg_lower,
  mts_bg_secondary,
  mts_bg_inverted,
} from "../../consts";

const meta: Meta<typeof Card> = {
  title: "МТС/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Card** — базовый контейнер для группировки контента. Используется как обёртка для любых блоков: информационных секций, форм, превью и т.д.

### Варианты

| Вариант | Когда использовать |
|---|---|
| \`default\` | Карточка на светлом фоне (\`#F2F3F7\`) — основной вариант |
| \`default-no-shadow\` | Карточка на сером или контрастном фоне, тень не нужна |
| \`grey\` | Вложенный блок внутри белой секции |
| \`outline\` | Когда нужна граница без тени — например, в списках |
| \`transparent\` | На тёмных или цветных фонах с блюром |

### Интерактивность

Если передать \`onClick\` — карточка становится кликабельной: появляется курсор, анимация подъёма при hover и outline при фокусе.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      description: "Визуальный стиль карточки.",
      control: "select",
      options: ["default", "default-no-shadow", "grey", "outline", "transparent"],
    },
    onClick: {
      description: "Если передан — карточка становится интерактивной (cursor pointer, hover-анимация).",
    },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const Content = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
    <Text variant="P3-Medium-Comp" style={{ color: mts_text_primary }}>Заголовок</Text>
    <Text variant="P4-Regular-Comp" style={{ color: mts_text_secondary }}>Подзаголовок</Text>
  </div>
);

const wrap = (bg: string, maxWidth = 360) =>
  (Story: React.FC) => (
    <div style={{ padding: 24, background: bg, maxWidth }}>
      <Story />
    </div>
  );

export const Default: Story = {
  name: "Default — с тенью",
  decorators: [wrap(mts_bg_lower)],
  args: { variant: "default", children: <Content /> },
  parameters: {
    docs: {
      description: { story: "Основной вариант. Используется на сером фоне `#F2F3F7`." },
    },
  },
};

export const DefaultNoShadow: Story = {
  name: "Default No Shadow — без тени",
  decorators: [wrap(mts_bg_secondary)],
  args: { variant: "default-no-shadow", children: <Content /> },
  parameters: {
    docs: {
      description: { story: "Белая карточка без тени. Подходит для вторичного серого фона, где тень сливается с фоном." },
    },
  },
};

export const Grey: Story = {
  name: "Grey — серая",
  decorators: [wrap(mts_bg_lower)],
  args: { variant: "grey", children: <Content /> },
  parameters: {
    docs: {
      description: { story: "Серый блок (`#F2F3F7`) внутри белой секции. Подходит для вложенных блоков информации." },
    },
  },
};

export const Outline: Story = {
  name: "Outline — с обводкой",
  decorators: [wrap(mts_bg_lower)],
  args: { variant: "outline", children: <Content /> },
  parameters: {
    docs: {
      description: { story: "Белая карточка с тонкой границей и без тени. Используется в списках или там, где нужно визуальное разделение без объёма." },
    },
  },
};

export const Transparent: Story = {
  name: "Transparent — на тёмном фоне",
  decorators: [wrap(mts_bg_inverted)],
  args: { variant: "transparent", children: <Content /> },
  parameters: {
    docs: {
      description: { story: "Полупрозрачный блок с блюром (`rgba(255,255,255,0.08)`). Используется поверх тёмных или цветных фонов." },
    },
  },
};

export const Clickable: Story = {
  name: "Кликабельная",
  decorators: [wrap(mts_bg_lower)],
  args: {
    variant: "default",
    onClick: () => console.log("card clicked"),
    children: <Content />,
  },
  parameters: {
    docs: {
      description: { story: "При наличии `onClick` карточка получает интерактивное поведение: hover-подъём, focus-outline, cursor pointer." },
    },
  },
};

export const AllVariants: Story = {
  name: "Все варианты",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Все визуальные варианты карточки на соответствующих фонах." },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {(
        [
          { variant: "default", bg: mts_bg_lower, label: "default" },
          { variant: "default-no-shadow", bg: mts_bg_secondary, label: "default-no-shadow" },
          { variant: "grey", bg: mts_bg_lower, label: "grey" },
          { variant: "outline", bg: mts_bg_lower, label: "outline" },
          { variant: "transparent", bg: mts_bg_inverted, label: "transparent" },
        ] as const
      ).map(({ variant, bg, label }) => (
        <div key={variant} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 11, color: "#969FA8", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {label}
          </span>
          <div style={{ padding: 16, background: bg, borderRadius: 12, maxWidth: 360 }}>
            <Card variant={variant}>
              <Content />
            </Card>
          </div>
        </div>
      ))}
    </div>
  ),
};
