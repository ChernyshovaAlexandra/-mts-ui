import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Steps } from "./Steps";
import { Caption } from "../Caption/Caption";
import type { StepItem, StepsProps } from "./Steps";

type MobileDevice = "iphone14Pro" | "iphone14ProMax";

type StepsStoryArgs = StepsProps & {
  mobileView?: boolean;
  mobileDevice?: MobileDevice;
};

const MOBILE_DEVICE_PRESETS: Record<
  MobileDevice,
  { label: string; width: number; height: number; radius: number }
> = {
  iphone14Pro: {
    label: "iPhone 14 Pro",
    width: 393,
    height: 852,
    radius: 48,
  },
  iphone14ProMax: {
    label: "iPhone 14 Pro Max",
    width: 430,
    height: 932,
    radius: 54,
  },
};

const MOBILE_DEVICE_OPTIONS = Object.keys(MOBILE_DEVICE_PRESETS) as MobileDevice[];
const DEFAULT_MOBILE_DEVICE: MobileDevice = "iphone14Pro";

const STEP_VIEWPORTS = {
  ...INITIAL_VIEWPORTS,
  iphone14Pro: {
    name: "iPhone 14 Pro",
    styles: {
      width: "393px",
      height: "852px",
    },
    type: "mobile",
  },
  iphone14ProMax: {
    name: "iPhone 14 Pro Max",
    styles: {
      width: "430px",
      height: "932px",
    },
    type: "mobile",
  },
};

const meta: Meta<StepsStoryArgs> = {
  title: "МТС/Steps",
  component: Steps,
  tags: ["autodocs"],
  parameters: {
    viewport: {
      viewports: STEP_VIEWPORTS,
      defaultViewport: "responsive",
    },
    docs: {
      description: {
        component: `
**Steps** — индикатор прогресса по шагам на основе \`Step\` и \`Divider\`.

Шаги и разделитель всегда выровнены по центру круга. Паддинг дивайдера — 12px.

В горизонтальной ориентации при количестве шагов больше 5 компонент измеряет ширину своего контейнера. Если полная строка не помещается даже с минимальной шириной дивайдеров, включается компактный вид: первый/последний шаг, текущий шаг, соседние шаги и скрытые диапазоны через \`...\`.

### Props

| Prop | Тип | Описание |
|---|---|---|
| \`steps\` | \`StepItem[]\` | Массив шагов |
| \`orientation\` | \`"horizontal" \\| "vertical"\` | Направление |
| \`size\` | \`"s" \\| "m"\` | Размер кружков |
| \`color\` | \`"primary" \\| "secondary"\` | Цвет по умолчанию |
| \`dividerLength\` | \`number\` | Максимальная ширина дивайдера для обратной совместимости |
| \`dividerMinLength\` | \`number\` | Минимальная ширина линии дивайдера |
| \`dividerMaxLength\` | \`number\` | Максимальная ширина линии дивайдера |

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
    dividerLength: {
      control: { type: "number", min: 0, max: 240 },
    },
    dividerMinLength: {
      control: { type: "number", min: 0, max: 120 },
    },
    dividerMaxLength: {
      control: { type: "number", min: 0, max: 240 },
    },
    mobileView: {
      name: "Мобильный вид",
      description: "Показывает пример внутри имитации экрана iPhone.",
      control: "boolean",
      table: { category: "Story controls" },
    },
    mobileDevice: {
      name: "Устройство",
      description: "Пресет экрана для мобильного вида.",
      control: {
        type: "radio",
        labels: {
          iphone14Pro: "iPhone 14 Pro",
          iphone14ProMax: "iPhone 14 Pro Max",
        },
      },
      options: MOBILE_DEVICE_OPTIONS,
      table: { category: "Story controls" },
    },
    steps:       { control: false },
    style:       { control: false },
    className:   { control: false },
  },
};

export default meta;
type Story = StoryObj<StepsStoryArgs>;

const StepsPreviewFrame = ({
  mobileView = false,
  mobileDevice = DEFAULT_MOBILE_DEVICE,
  children,
}: {
  mobileView?: boolean;
  mobileDevice?: MobileDevice;
  children: React.ReactNode;
}) => {
  if (!mobileView) {
    return (
      <div style={{ width: "fit-content", maxWidth: "100%" }}>
        {children}
      </div>
    );
  }

  const device = MOBILE_DEVICE_PRESETS[mobileDevice];

  return (
    <div
      style={{
        maxWidth: "100%",
        overflowX: "auto",
        padding: "20px 0",
      }}
    >
      <div
        aria-label={`${device.label}, ${device.width} by ${device.height}`}
        style={{
          position: "relative",
          width: device.width,
          height: device.height,
          boxSizing: "border-box",
          padding: 10,
          borderRadius: device.radius,
          background: "#1D2023",
          boxShadow:
            "0 24px 70px rgba(29, 32, 35, 0.22), inset 0 0 0 1px rgba(255, 255, 255, 0.12)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 152,
            width: 3,
            height: 74,
            borderRadius: "3px 0 0 3px",
            background: "#2C3136",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 0,
            top: 180,
            width: 3,
            height: 96,
            borderRadius: "0 3px 3px 0",
            background: "#2C3136",
          }}
        />
        <div
          style={{
            position: "relative",
            height: "100%",
            overflow: "hidden",
            borderRadius: device.radius - 10,
            background: "#FFFFFF",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              zIndex: 2,
              left: "50%",
              top: 18,
              width: 126,
              height: 36,
              transform: "translateX(-50%)",
              borderRadius: 999,
              background: "#050505",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              zIndex: 2,
              left: 28,
              right: 28,
              top: 18,
              height: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#1D2023",
              fontFamily: '"MTS Compact", sans-serif',
              fontSize: 14,
              fontWeight: 500,
              lineHeight: "20px",
            }}
          >
            <span>9:41</span>
            <span style={{ fontSize: 12 }}>5G</span>
          </div>
          <div
            style={{
              height: "100%",
              overflow: "auto",
              padding: "76px 16px 34px",
              boxSizing: "border-box",
            }}
          >
            {children}
          </div>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "50%",
              bottom: 10,
              width: 134,
              height: 5,
              transform: "translateX(-50%)",
              borderRadius: 999,
              background: "#1D2023",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const renderSteps = ({ mobileView, mobileDevice, ...args }: StepsStoryArgs) => (
  <StepsPreviewFrame mobileView={mobileView} mobileDevice={mobileDevice}>
    <Steps {...args} />
  </StepsPreviewFrame>
);

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

const STEPS_LONG: StepItem[] = Array.from({ length: 15 }, (_, index) => ({
  value: index + 1,
  status: index < 6 ? "done" : index === 6 ? "active" : "default",
  label: `Шаг ${index + 1}`,
  description: index === 6 ? "Текущий вопрос" : "Описание шага",
}));

const renderHorizontalExamples = ({ mobileView, mobileDevice }: StepsStoryArgs) => (
  <StepsPreviewFrame mobileView={mobileView} mobileDevice={mobileDevice}>
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
  </StepsPreviewFrame>
);

// ── Default ────────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default",
  render: renderSteps,
  args: {
    steps: STEPS_WITH_TEXT,
    orientation: "horizontal",
    size: "m",
    color: "primary",
    mobileView: false,
    mobileDevice: DEFAULT_MOBILE_DEVICE,
  },
};

export const Mobile: Story = {
  name: "Mobile",
  render: renderSteps,
  args: {
    steps: STEPS_WITH_TEXT,
    orientation: "horizontal",
    size: "m",
    color: "primary",
    mobileView: true,
    mobileDevice: DEFAULT_MOBILE_DEVICE,
  },
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "iphone14Pro" },
  },
};

export const MobileProMax: Story = {
  name: "Mobile / iPhone 14 Pro Max",
  render: renderSteps,
  args: {
    steps: STEPS_WITH_TEXT,
    orientation: "horizontal",
    size: "m",
    color: "primary",
    mobileView: true,
    mobileDevice: "iphone14ProMax",
  },
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "iphone14ProMax" },
  },
};

export const MobileMoreThanFive: Story = {
  name: "Mobile / More than 5",
  render: renderSteps,
  args: {
    steps: STEPS_LONG,
    orientation: "horizontal",
    size: "m",
    color: "primary",
    mobileView: true,
    mobileDevice: DEFAULT_MOBILE_DEVICE,
  },
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "iphone14Pro" },
    docs: {
      description: {
        story:
          "15 шагов в узком контейнере: полный горизонтальный Stepper заменяется на первый/последний шаг, текущий шаг, соседей и `...`.",
      },
    },
  },
};

export const ContainerAdaptive: Story = {
  name: "Container adaptive",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Один и тот же набор шагов в контейнерах разной ширины. Compact включается от ширины контейнера, а не от viewport.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {[
        { label: "Узкий контейнер", width: 260 },
        { label: "Широкий контейнер", width: 620 },
      ].map(({ label, width }) => (
        <div key={label} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Caption variant="C1-Medium-Comp" as="span">{label}</Caption>
          <div style={{ width, maxWidth: "100%", padding: 16, border: "1px solid #E6E9F0", borderRadius: 16 }}>
            <Steps steps={STEPS_LONG} orientation="horizontal" size="s" color="primary" />
          </div>
        </div>
      ))}
    </div>
  ),
};

// ── Горизонтальный ────────────────────────────────────────────────────────────

export const Horizontal: Story = {
  name: "Horizontal",
  args: {
    mobileView: false,
    mobileDevice: DEFAULT_MOBILE_DEVICE,
  },
  parameters: {
    controls: { include: ["mobileView", "mobileDevice"] },
    docs: { description: { story: "С текстом и без текста, размеры S и M." } },
  },
  render: renderHorizontalExamples,
};

export const HorizontalMobile: Story = {
  name: "Horizontal / Mobile",
  args: {
    mobileView: true,
    mobileDevice: DEFAULT_MOBILE_DEVICE,
  },
  parameters: {
    controls: { include: ["mobileView", "mobileDevice"] },
    layout: "fullscreen",
    viewport: { defaultViewport: "iphone14Pro" },
    docs: { description: { story: "Горизонтальные состояния в мобильной области просмотра." } },
  },
  render: renderHorizontalExamples,
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
