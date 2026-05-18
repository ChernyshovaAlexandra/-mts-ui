import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { Switch } from "./Switch";
import { mts_input_stroke, mts_text_primary, mts_text_secondary } from "../../consts";

const meta: Meta<typeof Switch> = {
  title: "МТС/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Switch** — переключатель бинарного состояния. Используется для мгновенного включения/выключения опций.

### Размеры

| Размер | Трек | Кнопка | Использование |
|---|---|---|---|
| \`s\` | 28×16px | 12px | Компактные интерфейсы, таблицы |
| \`m\` | 42×24px | 18px | Основной размер |
| \`l\` | 56×32px | 24px | Крупные карточки, настройки |

### Состояния

- **checked** — включён (зелёный)
- **disabled** — заблокирован. В размере \`l\` показывает иконку замка, в \`s\`/\`m\` — прозрачность 60%
- **loading** — ожидание ответа сервера. Спиннер заменяет кнопку, трек блокируется

### Обработка ошибок

При ошибке сервера — верните \`checked\` в исходное состояние и покажите Snackbar/Toast.
        `,
      },
    },
  },
  argTypes: {
    size: { control: "radio", options: ["s", "m", "l"] },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    onChange: { action: "changed" },
    style: { control: false },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

// ── Interactive default ────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default (интерактивный)",
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? true);
    return <Switch {...args} checked={checked} onChange={setChecked} />;
  },
  args: { size: "m", checked: true },
};

// ── Sizes ─────────────────────────────────────────────────────────────────────

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Label = styled.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  color: ${mts_text_secondary};
`;

export const Sizes: Story = {
  name: "Размеры",
  parameters: { controls: { disable: true } },
  render: () => {
    const [vals, setVals] = useState({ s: true, m: true, l: true });
    return (
      <Row>
        {(["s", "m", "l"] as const).map((size) => (
          <Col key={size}>
            <Switch size={size} checked={vals[size]} onChange={(v) => setVals((p) => ({ ...p, [size]: v }))} />
            <Label>{size} — {TRACK_LABELS[size]}</Label>
          </Col>
        ))}
      </Row>
    );
  },
};

const TRACK_LABELS = { s: "28×16", m: "42×24", l: "56×32" };

// ── All states ─────────────────────────────────────────────────────────────────

const Grid = styled.div`
  display: grid;
  grid-template-columns: 120px repeat(4, 80px);
  align-items: center;
  gap: 16px 0;
`;

const GridHeader = styled.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: ${mts_text_secondary};
  text-align: center;
`;

const GridLabel = styled.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 14px;
  color: ${mts_text_primary};
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const AllStates: Story = {
  name: "Все состояния",
  parameters: { controls: { disable: true } },
  render: () => (
    <Grid>
      <GridHeader />
      <GridHeader>On</GridHeader>
      <GridHeader>Off</GridHeader>
      <GridHeader>On + disabled</GridHeader>
      <GridHeader>Off + disabled</GridHeader>

      {(["s", "m", "l"] as const).map((size) => (
        <>
          <GridLabel key={`${size}-label`}>{size}</GridLabel>
          <Center key={`${size}-on`}><Switch size={size} checked={true} /></Center>
          <Center key={`${size}-off`}><Switch size={size} checked={false} /></Center>
          <Center key={`${size}-on-dis`}><Switch size={size} checked={true} disabled /></Center>
          <Center key={`${size}-off-dis`}><Switch size={size} checked={false} disabled /></Center>
        </>
      ))}
    </Grid>
  ),
};

// ── Loading ────────────────────────────────────────────────────────────────────

export const Loading: Story = {
  name: "Loading (async)",
  parameters: { controls: { disable: true },
    docs: { description: { story: "Имитация async-запроса: Switch блокируется на 1.5с, затем переключается (или возвращается при ошибке)." } } },
  render: () => {
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (next: boolean) => {
      setLoading(true);
      setTimeout(() => {
        setChecked(next);
        setLoading(false);
      }, 1500);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Row>
          <Switch size="m" checked={checked} loading={loading} onChange={handleChange} />
          <span style={{ fontFamily: "MTS Compact, sans-serif", fontSize: 14, color: "#626C77" }}>
            {loading ? "Загрузка…" : checked ? "Включено" : "Выключено"}
          </span>
        </Row>
        {(["s", "l"] as const).map((size) => (
          <Center key={size}>
            <Switch size={size} checked={true} loading={true} />
          </Center>
        ))}
      </div>
    );
  },
};

// ── In context ────────────────────────────────────────────────────────────────

const SettingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${mts_input_stroke};
  gap: 16px;
  width: 320px;
  &:last-child { border-bottom: none; }
`;

const SettingText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const SettingTitle = styled.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${mts_text_primary};
`;

const SettingDesc = styled.span`
  font-family: "MTS Compact", sans-serif;
  font-size: 12px;
  color: ${mts_text_secondary};
`;

export const InSettings: Story = {
  name: "В настройках",
  parameters: { controls: { disable: true } },
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
    });

    const toggle = (key: keyof typeof settings) =>
      setSettings((p) => ({ ...p, [key]: !p[key] }));

    return (
      <div style={{ background: "white", borderRadius: 16, border: `1px solid ${mts_input_stroke}` }}>
        <SettingRow>
          <SettingText>
            <SettingTitle>Уведомления</SettingTitle>
            <SettingDesc>Push-уведомления о новых событиях</SettingDesc>
          </SettingText>
          <Switch size="m" checked={settings.notifications} onChange={() => toggle("notifications")} />
        </SettingRow>
        <SettingRow>
          <SettingText>
            <SettingTitle>Тёмная тема</SettingTitle>
            <SettingDesc>Переключить оформление интерфейса</SettingDesc>
          </SettingText>
          <Switch size="m" checked={settings.darkMode} onChange={() => toggle("darkMode")} />
        </SettingRow>
        <SettingRow>
          <SettingText>
            <SettingTitle>Автосохранение</SettingTitle>
            <SettingDesc>Недоступно на текущем тарифе</SettingDesc>
          </SettingText>
          <Switch size="m" checked={settings.autoSave} disabled />
        </SettingRow>
      </div>
    );
  },
};
