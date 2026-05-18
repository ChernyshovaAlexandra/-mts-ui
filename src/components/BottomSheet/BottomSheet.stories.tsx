import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "./BottomSheet";
import { Button } from "../Button/Button";
import { OptionRow, OptionLabel, GroupLabel } from "./style";

const meta: Meta<typeof BottomSheet> = {
  title: "МТС/BottomSheet",
  component: BottomSheet,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**BottomSheet** — панель, выезжающая снизу экрана. Используется для выбора из списка, применения фильтров и других действий на мобильных устройствах. Рендерится через портал в \`document.body\`.

### Анимация

Появляется и скрывается с пружинной анимацией (framer-motion). Фон блокируется оверлеем — клик по нему закрывает панель.

### Структура

\`\`\`
BottomSheet
├── DragIndicator     (ручка для свайпа, всегда видна)
├── Header            (опционально — title + кнопка ×)
├── OptionsContainer  (children — прокручиваемая область)
└── Footer            (опционально — кнопки сброса и применения)
\`\`\`

### Вспомогательные компоненты

Экспортируются из \`./style\` для построения содержимого:

| Компонент | Назначение |
|---|---|
| \`OptionRow\` | Строка-кнопка с hover-эффектом. Проп \`$selected\` — активное состояние |
| \`OptionLabel\` | Текст опции |
| \`GroupLabel\` | Подпись-разделитель группы опций |

### Высота

- По умолчанию — \`max-height: 85vh\`, панель растягивается по контенту
- \`fixedHeight\` — фиксированная высота \`85vh\` независимо от контента

### Свайп для закрытия

\`collapsable\` — включает жест перетаскивания вниз для закрытия. Срабатывает при сдвиге > 80px или скорости > 400px/с.
        `,
      },
    },
  },
  argTypes: {
    isOpen: {
      description: "Управляет видимостью панели.",
      control: "boolean",
    },
    onClose: {
      description: "Коллбек закрытия — вызывается по клику на оверлей или кнопку ×.",
    },
    title: {
      description: "Заголовок панели. При наличии отображается шапка с кнопкой закрытия ×.",
      control: "text",
    },
    onReset: {
      description: "Коллбек кнопки сброса. Если не передан — кнопка не отображается.",
    },
    onApply: {
      description: "Коллбек кнопки применения. Если не передан — кнопка не отображается.",
    },
    resetText: {
      description: "Текст кнопки сброса. По умолчанию: «Сбросить».",
      control: "text",
    },
    applyText: {
      description: "Текст кнопки применения. По умолчанию: «Применить».",
      control: "text",
    },
    fixedHeight: {
      description: "Фиксирует высоту панели на 85vh. По умолчанию панель растягивается по контенту (до 85vh).",
      control: "boolean",
    },
    collapsable: {
      description: "Включает жест свайпа вниз для закрытия. Рекомендуется включать на мобильных устройствах.",
      control: "boolean",
    },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

const cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань"];

const DefaultDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div style={{ padding: 24 }}>
      <Button btn_type="button" variant="primary" width="auto" onClick={() => setIsOpen(true)}>
        {selected || "Выберите город"}
      </Button>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {cities.map((o) => (
          <OptionRow key={o} type="button" $selected={o === selected} onClick={() => { setSelected(o); setIsOpen(false); }}>
            <OptionLabel>{o}</OptionLabel>
          </OptionRow>
        ))}
      </BottomSheet>
    </div>
  );
};

const WithTitleDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div style={{ padding: 24 }}>
      <Button btn_type="button" variant="primary" width="auto" onClick={() => setIsOpen(true)}>
        Открыть
      </Button>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Выберите город">
        {cities.map((o) => (
          <OptionRow key={o} type="button" $selected={o === selected} onClick={() => { setSelected(o); setIsOpen(false); }}>
            <OptionLabel>{o}</OptionLabel>
          </OptionRow>
        ))}
      </BottomSheet>
    </div>
  );
};

const WithFooterDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (o: string) =>
    setSelected((prev) => prev.includes(o) ? prev.filter((x) => x !== o) : [...prev, o]);
  return (
    <div style={{ padding: 24 }}>
      <Button btn_type="button" variant="primary" width="auto" onClick={() => setIsOpen(true)}>
        Фильтры {selected.length > 0 && `(${selected.length})`}
      </Button>
      <BottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Город"
        onReset={() => { setSelected([]); setIsOpen(false); }}
        onApply={() => setIsOpen(false)}
      >
        {cities.map((o) => (
          <OptionRow key={o} type="button" $selected={selected.includes(o)} onClick={() => toggle(o)}>
            <OptionLabel>{o}</OptionLabel>
          </OptionRow>
        ))}
      </BottomSheet>
    </div>
  );
};

const WithGroupsDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div style={{ padding: 24 }}>
      <Button btn_type="button" variant="primary" width="auto" onClick={() => setIsOpen(true)}>
        Открыть
      </Button>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Выберите город">
        <GroupLabel>Популярные</GroupLabel>
        {["Москва", "Санкт-Петербург"].map((o) => (
          <OptionRow key={o} type="button" $selected={o === selected} onClick={() => { setSelected(o); setIsOpen(false); }}>
            <OptionLabel>{o}</OptionLabel>
          </OptionRow>
        ))}
        <GroupLabel>Остальные</GroupLabel>
        {["Новосибирск", "Екатеринбург", "Казань", "Нижний Новгород"].map((o) => (
          <OptionRow key={o} type="button" $selected={o === selected} onClick={() => { setSelected(o); setIsOpen(false); }}>
            <OptionLabel>{o}</OptionLabel>
          </OptionRow>
        ))}
      </BottomSheet>
    </div>
  );
};

const CollapsableDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ padding: 24 }}>
      <Button btn_type="button" variant="primary" width="auto" onClick={() => setIsOpen(true)}>
        Открыть
      </Button>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Потяните вниз" collapsable>
        {cities.map((o) => (
          <OptionRow key={o} type="button" $selected={false} onClick={() => setIsOpen(false)}>
            <OptionLabel>{o}</OptionLabel>
          </OptionRow>
        ))}
      </BottomSheet>
    </div>
  );
};

export const Default: Story = {
  name: "Базовый список",
  render: () => <DefaultDemo />,
  parameters: {
    docs: {
      description: { story: "Простой список опций без заголовка и футера. Выбранный элемент подсвечивается." },
    },
  },
};

export const WithTitle: Story = {
  name: "С заголовком",
  render: () => <WithTitleDemo />,
  parameters: {
    docs: {
      description: { story: "Шапка с заголовком и кнопкой × появляется автоматически при передаче `title`." },
    },
  },
};

export const WithFooter: Story = {
  name: "С футером (фильтры)",
  render: () => <WithFooterDemo />,
  parameters: {
    docs: {
      description: { story: "Футер с кнопками «Сбросить» и «Применить» — типичный паттерн для фильтров. Панель не закрывается при выборе опции." },
    },
  },
};

export const WithGroups: Story = {
  name: "С группами опций",
  render: () => <WithGroupsDemo />,
  parameters: {
    docs: {
      description: { story: "`GroupLabel` используется как подпись-разделитель между группами внутри списка." },
    },
  },
};

export const Collapsable: Story = {
  name: "Со свайпом",
  render: () => <CollapsableDemo />,
  parameters: {
    docs: {
      description: { story: "`collapsable` включает закрытие свайпом вниз. Потяните панель вниз чтобы закрыть." },
    },
  },
};
