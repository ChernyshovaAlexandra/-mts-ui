import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { IconDate } from "../../icons/IconDate/IconDate";

const meta: Meta<typeof Badge> = {
  title: "МТС/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Badge** — компактная метка для отображения статуса, категории или числового значения. Используется рядом с другими элементами интерфейса.

### Размеры

| Размер | Высота | Шрифт | Когда использовать |
|---|---|---|---|
| \`xs\` | 16px | 10px | Плотные списки, таблицы |
| \`s\` | 20px | 12px | Основной размер по умолчанию |
| \`m\` | 24px | 14px | Карточки, заголовки секций |
| \`l\` | 32px | 16px | Крупные акцентные метки |

### Варианты

| Вариант | Фон | Текст | Когда использовать |
|---|---|---|---|
| \`default\` | \`#F2F3F7\` (серый) | Тёмный | Нейтральные метки, категории |
| \`custom\` | \`#1286D9\` (синий) | Белый | Акцентные метки, статусы |

### Иконка

Передаётся через \`icon\`, позиция задаётся через \`iconPosition\`: \`left\` или \`right\`.

Компонент автоматически масштабирует иконку под размер бейджа — передавать размер вручную не нужно:

| Размер бейджа | Размер иконки |
|---|---|
| \`xs\` | 12px |
| \`s\` | 16px |
| \`m\` | 16px |
| \`l\` | 24px |
        `,
      },
    },
  },
  argTypes: {
    size: {
      description: "Размер бейджа.",
      control: "select",
      options: ["xs", "s", "m", "l"],
    },
    variant: {
      description: "Визуальный стиль: `default` — серый, `custom` — синий акцентный.",
      control: "radio",
      options: ["default", "custom"],
    },
    iconPosition: {
      description: "Позиция иконки относительно текста.",
      control: "radio",
      options: ["left", "right"],
    },
    color: {
      description: "Произвольный цвет фона. Переопределяет цвет варианта. При передаче текст автоматически становится белым, если не задан `textColor`.",
      control: "color",
    },
    textColor: {
      description: "Цвет текста и иконки. По умолчанию белый, если задан `color`.",
      control: "color",
    },
    icon: { control: false },
    children: { control: "text" },
    style: { control: false },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const SmallIcon = () => <IconDate color="currentColor" />;

const SizeLabel = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontSize: 11, color: "#969FA8", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em", minWidth: 28 }}>
    {children}
  </span>
);

export const Default: Story = {
  name: "Default",
  args: {
    children: "Badge",
    size: "s",
    variant: "default",
  },
};

export const AllSizes: Story = {
  name: "Все размеры",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Четыре размера — XS (16px), S (20px), M (24px), L (32px). Верхний ряд — `default`, нижний — `custom`." },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {(["default", "custom"] as const).map((variant) => (
        <div key={variant} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <SizeLabel>{variant}</SizeLabel>
          {(["xs", "s", "m", "l"] as const).map((size) => (
            <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <Badge size={size} variant={variant}>Badge</Badge>
              <span style={{ fontSize: 10, color: "#969FA8", fontFamily: "sans-serif" }}>{size}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const WithIcon: Story = {
  name: "С иконкой",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Иконка слева (`left`) или справа (`right`) от текста. Размер иконки адаптируется к размеру бейджа." },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {(["default", "custom"] as const).map((variant) => (
        <div key={variant} style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <SizeLabel>{variant}</SizeLabel>
          {(["s", "m", "l"] as const).map((size) => (
            <React.Fragment key={size}>
              <Badge size={size} variant={variant} icon={<SmallIcon />} iconPosition="left">Badge</Badge>
              <Badge size={size} variant={variant} icon={<SmallIcon />} iconPosition="right">Badge</Badge>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const Variants: Story = {
  name: "Варианты",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "`default` — нейтральный серый для категорий и меток. `custom` — синий акцентный для статусов и важных маркеров." },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Badge variant="default" size="m">Default</Badge>
      <Badge variant="custom" size="m">Custom</Badge>
    </div>
  ),
};

export const CustomColor: Story = {
  name: "Произвольный цвет",
  parameters: {
    docs: {
      description: { story: "`color` переопределяет цвет фона любого варианта. Текст автоматически становится белым — или задайте `textColor` явно." },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Badge size="m" color="#26CD58">Акция</Badge>
      <Badge size="m" color="#F95721">Ошибка</Badge>
      <Badge size="m" color="#FAC031" textColor="#1D2023">Внимание</Badge>
      <Badge size="m" color="#9B93FF">Новое</Badge>
      <Badge size="m" color="#1D2023">Тёмный</Badge>
    </div>
  ),
};

export const NoIcon: Story = {
  name: "Без иконки",
  args: {
    children: "Badge",
    size: "s",
    variant: "default",
  },
  parameters: {
    docs: {
      description: { story: "Базовый вариант без иконки — только текст." },
    },
  },
};
