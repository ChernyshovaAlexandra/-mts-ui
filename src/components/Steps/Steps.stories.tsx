import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Steps } from "./Steps";
import type { StepItem } from "./Steps";
import { Button } from "../Button/Button";
import { Caption } from "../Caption/Caption";

const meta: Meta<typeof Steps> = {
  title: "МТС/Steps",
  component: Steps,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Steps** — индикатор прогресса по шагам. Используется в многошаговых формах, онбординге, процессах оформления.

### Ориентация
| Prop | Описание |
|---|---|
| \`horizontal\` | Шаги в ряд, соединены линией |
| \`vertical\` | Шаги сверху вниз с текстом справа |

### Размеры
| Размер | Кружок |
|---|---|
| \`s\` | 32px |
| \`m\` | 48px |

### Цвет (\`color\`)
| Значение | Активный шаг |
|---|---|
| \`primary\` | Красный МТС |
| \`secondary\` | Тёмный |

### Статусы шага
| Статус | Описание |
|---|---|
| \`default\` | Ещё не дошли |
| \`active\` | Текущий шаг |
| \`success\` | Завершён успешно |
| \`error\` | Завершён с ошибкой |
| \`disabled\` | Недоступен |
        `,
      },
    },
  },
  argTypes: {
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
    size:        { control: "radio", options: ["s", "m"] },
    variant:     { control: "radio", options: ["circle", "counter"] },
    color:       { control: "radio", options: ["primary", "secondary"] },
    steps:       { control: false },
    style:       { control: false },
    className:   { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Steps>;

const STEPS_SAMPLE: StepItem[] = [
  { status: "success", label: "Личные данные", description: "Имя и контакты" },
  { status: "success", label: "Адрес доставки", description: "Куда привезти" },
  { status: "active",  label: "Оплата",         description: "Выберите способ" },
  { status: "default", label: "Подтверждение",   description: "Проверьте заказ" },
];

const STEPS_SIMPLE: StepItem[] = [
  { status: "active",  label: "Header", description: "Description" },
  { status: "default", label: "Header", description: "Description" },
  { status: "default", label: "Header", description: "Description" },
];

// ── Default ────────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default",
  args: { steps: STEPS_SAMPLE, size: "m", orientation: "horizontal", variant: "counter", color: "primary" },
};

// ── Primary vs Secondary ───────────────────────────────────────────────────────

export const PrimarySecondary: Story = {
  name: "Primary / Secondary",
  parameters: {
    controls: { disable: true },
    docs: { description: { story: "**Primary** — активный шаг красный МТС. **Secondary** — активный шаг тёмный." } },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      {(["s", "m"] as const).map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{ textTransform: "uppercase" }}>{size.toUpperCase()}</Caption>
          <div style={{ display: "flex", gap: 64 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
              <Caption variant="C1-Medium-Comp" as="span">Primary</Caption>
              <Steps variant="counter" size={size} orientation="horizontal" color="primary" steps={STEPS_SIMPLE} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
              <Caption variant="C1-Medium-Comp" as="span">Secondary</Caption>
              <Steps variant="counter" size={size} orientation="horizontal" color="secondary" steps={STEPS_SIMPLE} />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

// ── Все состояния ─────────────────────────────────────────────────────────────

export const AllStatuses: Story = {
  name: "Все статусы",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {(["m", "s"] as const).map((size) => (
        <Steps key={size} size={size} orientation="horizontal" variant="circle" steps={[
          { status: "success" },
          { status: "error" },
          { status: "active" },
          { status: "default" },
          { status: "disabled" },
        ]} />
      ))}
    </div>
  ),
};

// ── Horizontal с текстом ──────────────────────────────────────────────────────

export const HorizontalWithLabels: Story = {
  name: "Horizontal с текстом",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      <Steps size="m" orientation="horizontal" variant="counter" color="primary" steps={STEPS_SAMPLE} />
      <Steps size="s" orientation="horizontal" variant="counter" color="primary" steps={STEPS_SAMPLE} />
    </div>
  ),
};

// ── Vertical ──────────────────────────────────────────────────────────────────

export const Vertical: Story = {
  name: "Vertical с текстом",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 48 }}>
      <Steps size="m" orientation="vertical" steps={STEPS_SAMPLE} />
      <Steps size="s" orientation="vertical" steps={STEPS_SAMPLE} />
    </div>
  ),
};

// ── Interactive ───────────────────────────────────────────────────────────────

export const Interactive: Story = {
  name: "Интерактивный",
  parameters: { controls: { disable: true } },
  render: () => {
    const labels = ["Личные данные", "Адрес", "Оплата", "Подтверждение"];
    const [current, setCurrent] = useState(2);

    const steps: StepItem[] = labels.map((label, i) => ({
      label,
      status: i < current ? "success" : i === current ? "active" : "default",
    }));

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 600 }}>
        <Steps size="m" orientation="horizontal" variant="counter" color="primary" steps={steps} />
        <div style={{ display: "flex", gap: 8 }}>
          <Button
            variant="secondary"
            size="s"
            onClick={() => setCurrent((p) => Math.max(0, p - 1))}
            disabled={current === 0}
          >
            ← Назад
          </Button>
          <Button
            variant="primary"
            size="s"
            onClick={() => setCurrent((p) => Math.min(labels.length - 1, p + 1))}
            disabled={current === labels.length - 1}
          >
            Далее →
          </Button>
        </div>
        <Caption variant="C1-Regular-Comp" as="span" style={{ color: "#626C77" }}>
          Шаг {current + 1} из {labels.length}
        </Caption>
      </div>
    );
  },
};
