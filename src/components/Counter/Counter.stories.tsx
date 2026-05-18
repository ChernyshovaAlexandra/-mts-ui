import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Counter } from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "МТС/Counter",
  component: Counter,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Counter** — числовой каунтер для отображения количества уведомлений или непрочитанных элементов. Некликабельный.

### Размеры

| Размер | Высота | Шрифт | Описание |
|---|---|---|---|
| \`notification\` | 6px | — | Только точка, без числа |
| \`s\` | 16px | 10px | Компактный |
| \`m\` | 20px | 12px | Стандартный |
| \`l\` | 24px | 14px | Крупный |

### Ширина

- **0–9**: всегда круглый (width = height)
- **10–99**: расширяется по контенту с padding:
  - S → 4px, M → 6px, L → 7px
- **>99**: отображается как **99+**

### Варианты

| Вариант | Фон | Текст |
|---|---|---|
| \`red\` | \`#FF0032\` | Белый |
| \`dark\` | \`#1D2023\` | Белый |
| \`ghost\` | Прозрачный | Тёмный |
        `,
      },
    },
  },
  argTypes: {
    value: {
      description: "Числовое значение. Если не передано — пустой каунтер. Для `notification` игнорируется.",
      control: { type: "number", min: 0 },
    },
    size: {
      description: "Размер каунтера.",
      control: "radio",
      options: ["notification", "s", "m", "l"],
    },
    variant: {
      description: "Цветовой вариант.",
      control: "radio",
      options: ["red", "dark", "ghost"],
    },
    max: {
      description: "Максимальное отображаемое значение. При превышении показывается `{max}+`. По умолчанию 99.",
      control: { type: "number" },
    },
    style: { control: false },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

const SizeLabel = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontSize: 11, color: "#969FA8", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em", minWidth: 80 }}>
    {children}
  </span>
);

const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>{children}</div>
);

export const Default: Story = {
  name: "Default",
  args: { value: 1, size: "m", variant: "red" },
};

export const Sizes: Story = {
  name: "Размеры",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Четыре размера. Notification — только точка без числа." },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Row>
        <SizeLabel>notification</SizeLabel>
        <Counter size="notification" />
      </Row>
      {(["s", "m", "l"] as const).map((size) => (
        <Row key={size}>
          <SizeLabel>{size}</SizeLabel>
          <Counter size={size} value={1} variant="red" />
          <Counter size={size} value={99} variant="red" />
          <Counter size={size} value={100} variant="red" />
        </Row>
      ))}
    </div>
  ),
};

export const CircularVsPill: Story = {
  name: "Круглый и пилюля",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "0–9 → круглый. 10+ → пилюля. >99 → отображается «99+»." },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {(["s", "m", "l"] as const).map((size) => (
        <Row key={size}>
          <SizeLabel>{size}</SizeLabel>
          {[1, 5, 9, 10, 42, 99, 100, 999].map((v) => (
            <Counter key={v} size={size} value={v} variant="red" />
          ))}
        </Row>
      ))}
    </div>
  ),
};

export const Variants: Story = {
  name: "Варианты",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Red — для уведомлений. Dark — ахроматический. Ghost — без фона." },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {(["red", "dark", "ghost"] as const).map((variant) => (
        <Row key={variant}>
          <SizeLabel>{variant}</SizeLabel>
          <Counter size="m" value={1} variant={variant} />
          <Counter size="m" value={99} variant={variant} />
          <Counter size="m" value={100} variant={variant} />
        </Row>
      ))}
    </div>
  ),
};

export const OnBackgrounds: Story = {
  name: "На разных фонах",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Каунтеры на светлом (Primary) и сером (Secondary) фоне." },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      {[{ bg: "#FFFFFF", label: "On Primary Bg" }, { bg: "#F2F3F7", label: "On Secondary Bg" }].map(({ bg, label }) => (
        <div key={label} style={{ background: bg, padding: "20px 24px", borderRadius: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ fontSize: 11, color: "#969FA8", fontFamily: "sans-serif" }}>{label}</span>
          {(["s", "m", "l"] as const).map((size) => (
            <Row key={size}>
              <Counter size={size} value={1} variant="ghost" />
              <Counter size={size} value={100} variant="ghost" />
              <Counter size={size} value={1} variant="red" />
              <Counter size={size} value={100} variant="red" />
              <Counter size={size} value={1} variant="dark" />
              <Counter size={size} value={100} variant="dark" />
            </Row>
          ))}
        </div>
      ))}
    </div>
  ),
};
