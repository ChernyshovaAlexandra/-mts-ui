import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "МТС/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Divider** — разделитель. Блок с паддингами внутри которого лежит линия толщиной 1px.

\`\`\`
<Wrap padding={...}>
  <Line />        ← 1px
</Wrap>
\`\`\`

### Ориентация

| Prop | Описание |
|---|---|
| \`horizontal\` | Горизонтальная линия, паддинг сверху и снизу |
| \`vertical\` | Вертикальная линия, паддинг слева и справа |

### Padding

Отступ от края контейнера до линии. По умолчанию \`0\`.
        `,
      },
    },
  },
  argTypes: {
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
    padding: { control: { type: "number", min: 0, max: 32 } },
    style: { control: false },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  name: "Horizontal",
  args: { orientation: "horizontal", padding: 0 },
  decorators: [(Story) => <div style={{ width: 300, background: "white", padding: 16 }}><Story /></div>],
};

export const Vertical: Story = {
  name: "Vertical",
  args: { orientation: "vertical", padding: 0 },
  decorators: [(Story) => <div style={{ height: 60, display: "flex", background: "white", padding: 16 }}><Story /></div>],
};

export const WithPadding: Story = {
  name: "С паддингами",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 400 }}>
      <div>
        <p style={{ fontFamily: "MTS Compact, sans-serif", fontSize: 12, color: "#626C77", marginBottom: 4 }}>Horizontal, padding=0</p>
        <div style={{ background: "#f5f5f5", padding: 16 }}>
          <Divider orientation="horizontal" padding={0} />
        </div>
      </div>
      <div>
        <p style={{ fontFamily: "MTS Compact, sans-serif", fontSize: 12, color: "#626C77", marginBottom: 4 }}>Horizontal, padding=12</p>
        <div style={{ background: "#f5f5f5", padding: 16 }}>
          <Divider orientation="horizontal" padding={12} />
        </div>
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        <div>
          <p style={{ fontFamily: "MTS Compact, sans-serif", fontSize: 12, color: "#626C77", marginBottom: 4 }}>Vertical, padding=0</p>
          <div style={{ height: 80, display: "flex", background: "#f5f5f5", padding: 16 }}>
            <Divider orientation="vertical" padding={0} />
          </div>
        </div>
        <div>
          <p style={{ fontFamily: "MTS Compact, sans-serif", fontSize: 12, color: "#626C77", marginBottom: 4 }}>Vertical, padding=12</p>
          <div style={{ height: 80, display: "flex", background: "#f5f5f5", padding: 16 }}>
            <Divider orientation="vertical" padding={12} />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const InContext: Story = {
  name: "В контексте (список)",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ maxWidth: 320, background: "white", borderRadius: 12, border: "1px solid rgba(188,195,208,0.5)", overflow: "hidden" }}>
      {["Пункт первый", "Пункт второй", "Пункт третий"].map((item, i, arr) => (
        <React.Fragment key={item}>
          <div style={{ padding: "12px 16px", fontFamily: "MTS Compact, sans-serif", fontSize: 14 }}>
            {item}
          </div>
          {i < arr.length - 1 && <Divider orientation="horizontal" />}
        </React.Fragment>
      ))}
    </div>
  ),
};
