import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./Calendar";

const meta: Meta<typeof Calendar> = {
  title: "МТС/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Calendar** — автономный компонент выбора даты в стиле МТС.

Позволяет выбрать дату, месяц или год. Три вида:
- **Day** — сетка дней с навигацией по месяцам
- **Month** — выбор месяца с подтверждением
- **Year** — выбор года с подтверждением

Формат значения: \`DD.MM.YYYY\`

\`\`\`tsx
const [date, setDate] = useState<string | null>(null);
<Calendar value={date} onChange={setDate} />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    value: {
      description: "Выбранная дата в формате DD.MM.YYYY",
      control: "text",
    },
    onChange: { action: "onChange" },
    className: { control: false },
    style: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  name: "Default",
  args: {
    value: null,
  },
};

export const WithSelected: Story = {
  name: "С выбранной датой",
  args: {
    value: "05.08.2023",
  },
};

export const Interactive: Story = {
  name: "Интерактивный",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Управляемый компонент — выбранная дата отображается под календарём.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
        <Calendar value={value} onChange={setValue} />
        <span style={{ fontFamily: "sans-serif", fontSize: 14, color: "#626C77" }}>
          {value ? `Выбрана дата: ${value}` : "Дата не выбрана"}
        </span>
      </div>
    );
  },
};

export const Today: Story = {
  name: "Сегодняшняя дата",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Сегодняшний день отмечен точкой снизу.",
      },
    },
  },
  render: () => {
    const today = new Date();
    const d = String(today.getDate()).padStart(2, "0");
    const m = String(today.getMonth() + 1).padStart(2, "0");
    const y = today.getFullYear();
    return <Calendar value={`${d}.${m}.${y}`} />;
  },
};
