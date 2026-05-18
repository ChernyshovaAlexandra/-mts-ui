import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Step } from "./Step";
import { Caption } from "../Caption/Caption";

const meta: Meta<typeof Step> = {
  title: "МТС/Step",
  component: Step,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Step** — одиночный шаг. Строительный блок для компонента Steps.

### Варианты (\`variant\`)
| Значение | Описание |
|---|---|
| \`icon\` | Круг с иконкой галочки или минуса |
| \`number\` | Круг с цифрой, цвет primary/secondary |
| \`number-badge\` | Круг с цифрой + маленькая иконка в правом нижнем углу |

### Статусы (\`status\`)
| Статус | Применимо к |
|---|---|
| \`done\` | icon, number-badge |
| \`failed\` | icon, number-badge |
| \`disabled\` | все варианты |
| \`disabled-done\` | number-badge |
| \`disabled-failed\` | number-badge |

### Цвет (\`color\`)
Применяется к \`number\` и \`number-badge\` без статуса disabled.
| Значение | Описание |
|---|---|
| \`primary\` | Красный МТС |
| \`secondary\` | Тёмный |
        `,
      },
    },
  },
  argTypes: {
    variant: { control: "radio", options: ["icon", "number", "number-badge"] },
    status:  { control: "radio", options: ["done", "failed", "disabled", "disabled-done", "disabled-failed"] },
    color:   { control: "radio", options: ["primary", "secondary"] },
    size:    { control: "radio", options: ["s", "m"] },
    value:   { control: "number" },
    style:   { control: false },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Step>;

// ── Default ───────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default",
  args: { variant: "number", value: 1, color: "primary", size: "m" },
};

// ── Icon ──────────────────────────────────────────────────────────────────────

export const IconVariant: Story = {
  name: "Icon",
  parameters: {
    controls: { disable: true },
    docs: { description: { story: "Круг с иконкой: Done (зелёный ✓), Failed (красный −), Disabled (серый)." } },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {(["s", "m"] as const).map((size) => (
        <div key={size} style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{ width: 12, textTransform: "uppercase" }}>{size}</Caption>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Step variant="icon" status="done"   size={size} />
            <Step variant="icon" status="failed" size={size} />
          </div>
        </div>
      ))}
    </div>
  ),
};

// ── Number ────────────────────────────────────────────────────────────────────

export const NumberVariant: Story = {
  name: "Number",
  parameters: {
    controls: { disable: true },
    docs: { description: { story: "Круг с цифрой: Primary (красный), Secondary (тёмный), Disabled (серый)." } },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {(["s", "m"] as const).map((size) => (
        <div key={size} style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{ width: 12, textTransform: "uppercase" }}>{size}</Caption>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Step variant="number" value={1} color="primary"   size={size} />
            <Step variant="number" value={1} color="secondary" size={size} />
            <Step variant="number" value={1} status="disabled" size={size} />
          </div>
        </div>
      ))}
    </div>
  ),
};

// ── Number Badge ──────────────────────────────────────────────────────────────

export const NumberBadgeVariant: Story = {
  name: "Number + Badge",
  parameters: {
    controls: { disable: true },
    docs: { description: { story: "Круг с цифрой и маленькой иконкой в правом нижнем углу." } },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {(["s", "m"] as const).map((size) => (
        <div key={size} style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Caption variant="C1-Medium-Comp" as="span" style={{ width: 12, textTransform: "uppercase" }}>{size}</Caption>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
              <Step variant="number-badge" value={1} status="done"           color="primary"   size={size} />
              <Caption variant="C1-Regular-Comp" as="span" style={{ color: "#626C77" }}>done</Caption>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
              <Step variant="number-badge" value={1} status="failed"         color="primary"   size={size} />
              <Caption variant="C1-Regular-Comp" as="span" style={{ color: "#626C77" }}>failed</Caption>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
              <Step variant="number-badge" value={1} status="disabled-done"  size={size} />
              <Caption variant="C1-Regular-Comp" as="span" style={{ color: "#626C77" }}>dis-done</Caption>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
              <Step variant="number-badge" value={1} status="disabled-failed" size={size} />
              <Caption variant="C1-Regular-Comp" as="span" style={{ color: "#626C77" }}>dis-failed</Caption>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

// ── Все варианты ──────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  name: "Все варианты",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Caption variant="C1-Medium-Comp" as="span">Icon</Caption>
        <div style={{ display: "flex", gap: 12 }}>
          <Step variant="icon" status="done"     size="m" />
          <Step variant="icon" status="failed"   size="m" />
          <Step variant="icon" status="disabled" size="m" />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Caption variant="C1-Medium-Comp" as="span">Number</Caption>
        <div style={{ display: "flex", gap: 12 }}>
          <Step variant="number" value={2} color="primary"   size="m" />
          <Step variant="number" value={2} color="secondary" size="m" />
          <Step variant="number" value={2} status="disabled" size="m" />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Caption variant="C1-Medium-Comp" as="span">Number + Badge</Caption>
        <div style={{ display: "flex", gap: 12 }}>
          <Step variant="number-badge" value={3} status="done"           color="primary" size="m" />
          <Step variant="number-badge" value={3} status="failed"         color="primary" size="m" />
          <Step variant="number-badge" value={3} status="disabled-done"  size="m" />
          <Step variant="number-badge" value={3} status="disabled-failed" size="m" />
        </div>
      </div>
    </div>
  ),
};
