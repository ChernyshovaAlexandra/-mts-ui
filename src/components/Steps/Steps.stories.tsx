import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Steps } from "./Steps";
import { Caption } from "../Caption/Caption";
import type { StepItem } from "./Steps";

const meta: Meta<typeof Steps> = {
  title: "МТС/Steps",
  component: Steps,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Steps** — индикатор прогресса по шагам на основе \`Step\` и \`Divider\`.

Шаги и разделитель всегда выровнены по центру круга. Паддинг дивайдера — 12px.

### Props

| Prop | Тип | Описание |
|---|---|---|
| \`steps\` | \`StepItem[]\` | Массив шагов |
| \`orientation\` | \`"horizontal" \\| "vertical"\` | Направление |
| \`size\` | \`"s" \\| "m"\` | Размер кружков |
| \`color\` | \`"primary" \\| "secondary"\` | Цвет по умолчанию |

### StepItem

| Поле | Тип | Описание |
|---|---|---|
| \`variant\` | \`"icon" \\| "number" \\| "number-badge"\` | Вариант круга (по умолчанию \`number\`) |
| \`value\` | \`number\` | Цифра внутри |
| \`status\` | \`StepStatus\` | Статус шага |
| \`color\` | \`"primary" \\| "secondary"\` | Цвет, перекрывает общий |
| \`label\` | \`string\` | Заголовок |
| \`description\` | \`string\` | Подпись |
        `,
      },
    },
  },
  argTypes: {
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
    size:        { control: "radio", options: ["s", "m"] },
    color:       { control: "radio", options: ["primary", "secondary"] },
    steps:       { control: false },
    style:       { control: false },
    className:   { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Steps>;

// ── Данные ────────────────────────────────────────────────────────────────────

const STEPS_WITH_TEXT: StepItem[] = [
  { value: 1, status: "done",    label: "Личные данные",  description: "Имя и контакты" },
  { value: 2, status: "done",    label: "Адрес доставки", description: "Куда привезти"  },
  { value: 3, status: "active",  label: "Оплата",         description: "Выберите способ" },
  { value: 4, status: "default", label: "Подтверждение",  description: "Проверьте заказ" },
];

const STEPS_NO_TEXT: StepItem[] = [
  { value: 1, status: "done"    },
  { value: 2, status: "done"    },
  { value: 3, status: "active"  },
  { value: 4, status: "default" },
];

// ── Default ────────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default",
  args: { steps: STEPS_WITH_TEXT, orientation: "horizontal", size: "m", color: "primary" },
};

// ── Горизонтальный ────────────────────────────────────────────────────────────

export const Horizontal: Story = {
  name: "Horizontal",
  parameters: {
    controls: { disable: true },
    docs: { description: { story: "С текстом и без текста, размеры S и M." } },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      {(["m", "s"] as const).map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{ textTransform: "uppercase" }}>{size} — с текстом</Caption>
          <Steps steps={STEPS_WITH_TEXT} orientation="horizontal" size={size} color="primary" />
          <Caption variant="C1-Medium-Comp" as="span" style={{ textTransform: "uppercase" }}>{size} — без текста</Caption>
          <Steps steps={STEPS_NO_TEXT} orientation="horizontal" size={size} color="primary" />
        </div>
      ))}
    </div>
  ),
};

// ── Вертикальный ──────────────────────────────────────────────────────────────

export const Vertical: Story = {
  name: "Vertical",
  parameters: {
    controls: { disable: true },
    docs: { description: { story: "С текстом и без текста, размеры S и M." } },
  },
  render: () => (
    <div style={{ display: "flex", gap: 80 }}>
      {(["m", "s"] as const).map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{ textTransform: "uppercase" }}>{size}</Caption>
          <Steps steps={STEPS_WITH_TEXT} orientation="vertical" size={size} color="primary" />
        </div>
      ))}
    </div>
  ),
};

// ── Primary / Secondary ───────────────────────────────────────────────────────

export const PrimarySecondary: Story = {
  name: "Primary / Secondary",
  parameters: {
    controls: { disable: true },
    docs: { description: { story: "Активный шаг: **Primary** — красный МТС, **Secondary** — тёмный." } },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {(["primary", "secondary"] as const).map((color) => (
        <div key={color} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{ textTransform: "capitalize" }}>{color}</Caption>
          <Steps steps={STEPS_WITH_TEXT} orientation="horizontal" size="m" color={color} />
        </div>
      ))}
    </div>
  ),
};

// ── Icon variant ──────────────────────────────────────────────────────────────

export const IconVariant: Story = {
  name: "Icon variant",
  parameters: {
    controls: { disable: true },
    docs: { description: { story: "Шаги с иконками вместо цифр." } },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <Steps
        orientation="horizontal"
        size="m"
        steps={[
          { variant: "icon", status: "done",    label: "Готово",    description: "Завершён" },
          { variant: "icon", status: "done",    label: "Готово",    description: "Завершён" },
          { variant: "icon", status: "failed",  label: "Ошибка",    description: "Не удалось" },
          { variant: "icon", status: "done",    label: "Готово",    description: "Завершён" },
        ]}
      />
    </div>
  ),
};
