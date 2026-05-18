import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Steps } from "./Steps";
import { Step } from "../Step/Step";
import { Divider } from "../Divider/Divider";
import { Button } from "../Button/Button";
import { Caption } from "../Caption/Caption";
import type { StepStatus } from "../Step/Step";

const meta: Meta<typeof Steps> = {
  title: "МТС/Steps",
  component: Steps,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Steps** — индикатор прогресса по шагам. Используется в многошаговых формах, онбординге, процессах оформления.

Композиционный компонент — принимает \`<Step>\` и \`<Divider>\` как дочерние элементы.

\`\`\`tsx
<Steps orientation="horizontal" size="m" color="primary">
  <Step variant="number" value={1} status="success" label="Шаг 1" />
  <Divider orientation="horizontal" padding={12} />
  <Step variant="number" value={2} status="active" label="Шаг 2" />
  <Divider orientation="horizontal" padding={12} />
  <Step variant="number" value={3} status="default" label="Шаг 3" />
</Steps>
\`\`\`

### Ориентация
| Prop | Описание |
|---|---|
| \`horizontal\` | Шаги в ряд, Divider горизонтальный |
| \`vertical\` | Шаги сверху вниз, Divider вертикальный |

### Размеры (передаются через контекст Steps → Step)
| Размер | Кружок |
|---|---|
| \`s\` | 24px |
| \`m\` | 48px |

### Цвет (\`color\`) — передаётся через контекст
| Значение | Активный шаг |
|---|---|
| \`primary\` | Красный МТС |
| \`secondary\` | Тёмный |

### Статусы Step
| Статус | Описание |
|---|---|
| \`active\` | Текущий шаг |
| \`success\` / \`done\` | Завершён успешно |
| \`error\` / \`failed\` | Завершён с ошибкой |
| \`default\` / \`disabled\` | Недоступен / ещё не дошли |
        `,
      },
    },
  },
  argTypes: {
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
    size:        { control: "radio", options: ["s", "m"] },
    color:       { control: "radio", options: ["primary", "secondary"] },
    children:    { control: false },
    style:       { control: false },
    className:   { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Steps>;

// ── Helpers ────────────────────────────────────────────────────────────────────

const SAMPLE_STATUSES: StepStatus[] = ["success", "success", "active", "default"];
const SAMPLE_LABELS = ["Личные данные", "Адрес доставки", "Оплата", "Подтверждение"];
const SAMPLE_DESCS  = ["Имя и контакты", "Куда привезти", "Выберите способ", "Проверьте заказ"];

const HorizSteps = ({ size = "m", color = "primary" }: { size?: "s" | "m"; color?: "primary" | "secondary" }) => (
  <Steps orientation="horizontal" size={size} color={color}>
    {SAMPLE_STATUSES.map((status, i) => (
      <React.Fragment key={i}>
        <Step variant="number" value={i + 1} status={status} label={SAMPLE_LABELS[i]} description={SAMPLE_DESCS[i]} />
        {i < SAMPLE_STATUSES.length - 1 && <Divider orientation="horizontal" padding={12} />}
      </React.Fragment>
    ))}
  </Steps>
);

// ── Default ────────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default",
  render: (args) => (
    <Steps {...args}>
      <Step variant="number" value={1} status="success" label="Личные данные" description="Имя и контакты" />
      <Divider orientation="horizontal" padding={12} />
      <Step variant="number" value={2} status="success" label="Адрес доставки" description="Куда привезти" />
      <Divider orientation="horizontal" padding={12} />
      <Step variant="number" value={3} status="active"  label="Оплата"         description="Выберите способ" />
      <Divider orientation="horizontal" padding={12} />
      <Step variant="number" value={4} status="default" label="Подтверждение"   description="Проверьте заказ" />
    </Steps>
  ),
  args: { orientation: "horizontal", size: "m", color: "primary" },
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
              <HorizSteps size={size} color="primary" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
              <Caption variant="C1-Medium-Comp" as="span">Secondary</Caption>
              <HorizSteps size={size} color="secondary" />
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
        <Steps key={size} orientation="horizontal" size={size}>
          {(["success", "error", "active", "default", "disabled"] as StepStatus[]).map((status, i) => (
            <React.Fragment key={i}>
              <Step variant="icon" status={status} />
              {i < 4 && <Divider orientation="horizontal" padding={8} />}
            </React.Fragment>
          ))}
        </Steps>
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
      <HorizSteps size="m" color="primary" />
      <HorizSteps size="s" color="primary" />
    </div>
  ),
};

// ── Vertical ──────────────────────────────────────────────────────────────────

export const Vertical: Story = {
  name: "Vertical с текстом",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 48 }}>
      {(["m", "s"] as const).map((size) => (
        <Steps key={size} orientation="vertical" size={size}>
          {SAMPLE_STATUSES.map((status, i) => (
            <React.Fragment key={i}>
              <Step variant="number" value={i + 1} status={status} label={SAMPLE_LABELS[i]} description={SAMPLE_DESCS[i]} />
              {i < SAMPLE_STATUSES.length - 1 && <Divider orientation="vertical" style={{ height: 60 }} />}
            </React.Fragment>
          ))}
        </Steps>
      ))}
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

    const statuses: StepStatus[] = labels.map((_, i) =>
      i < current ? "success" : i === current ? "active" : "default"
    );

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 600 }}>
        <Steps orientation="horizontal" size="m" color="primary">
          {labels.map((label, i) => (
            <React.Fragment key={i}>
              <Step variant="number" value={i + 1} status={statuses[i]} label={label} />
              {i < labels.length - 1 && <Divider orientation="horizontal" padding={12} />}
            </React.Fragment>
          ))}
        </Steps>
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
