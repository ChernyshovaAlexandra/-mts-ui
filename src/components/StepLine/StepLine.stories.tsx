import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { StepLine } from "./StepLine";
import { Button } from "../Button/Button";
import { Caption } from "../Caption/Caption";

const meta: Meta<typeof StepLine> = {
  title: "МТС/StepLine",
  component: StepLine,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**StepLine** — индикатор прогресса по шагам в виде полос.

Используется как упрощённая альтернатива Steps там, где не нужны подписи.

| Prop | Тип | Описание |
|---|---|---|
| \`total\` | \`number\` | Общее количество шагов |
| \`current\` | \`number\` | Сколько шагов завершено (0 — ни одного, \`total\` — все) |
| \`size\` | \`"s" \\| "m"\` | Размер: S=4px, M=8px |

Каждый сегмент — отдельная полоса: зелёная (выполнено) или серая (не выполнено).
        `,
      },
    },
  },
  argTypes: {
    total:   { control: { type: "number", min: 1, max: 10 } },
    current: { control: { type: "number", min: 0, max: 10 } },
    size:    { control: "radio", options: ["s", "m"] },
    style:   { control: false },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof StepLine>;

export const Default: Story = {
  name: "Default",
  args: { total: 3, current: 1, size: "s" },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}><Story /></div>],
};

export const Sizes: Story = {
  name: "Размеры",
  parameters: {
    controls: { disable: true },
    docs: { description: { story: "**S** — высота 4px, **M** — высота 8px." } },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 350 }}>
      {(["s", "m"] as const).map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{ textTransform: "uppercase" }}>
            {size.toUpperCase()}
          </Caption>
          <StepLine total={3} current={1} size={size} />
        </div>
      ))}
    </div>
  ),
};

export const States: Story = {
  name: "Состояния",
  parameters: {
    controls: { disable: true },
    docs: { description: { story: "Заполнение шагов: первый пройден — все пройдены." } },
  },
  render: () => (
    <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
      {[
        { label: "Первый шаг пройден", current: 1 },
        { label: "Все шаги пройдены",  current: 3 },
      ].map(({ label, current }) => (
        <div key={label} style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 200, flex: 1 }}>
          <Caption variant="C1-Medium-Comp" as="span">{label}</Caption>
          <StepLine total={3} current={current} size="s" />
        </div>
      ))}
    </div>
  ),
};

export const Interactive: Story = {
  name: "Интерактивный",
  parameters: { controls: { disable: true } },
  render: () => {
    const [current, setCurrent] = useState(1);
    const total = 4;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
        <StepLine total={total} current={current} size="s" />
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
            onClick={() => setCurrent((p) => Math.min(total, p + 1))}
            disabled={current === total}
          >
            Далее →
          </Button>
        </div>
        <Caption variant="C1-Regular-Comp" as="span" style={{ color: "#626C77" }}>
          Шаг {current} из {total}
        </Caption>
      </div>
    );
  },
};
