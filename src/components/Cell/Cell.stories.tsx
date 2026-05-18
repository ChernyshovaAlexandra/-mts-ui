import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Cell } from "./Cell";
import { IconPicture } from "../../icons/IconPicture/IconPicture";
import { IconBackground } from "./style";

const meta: Meta<typeof Cell> = {
  title: "МТС/Cell",
  component: Cell,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Cell** — строка списка. Базовый элемент для построения списков настроек, меню, контактов и других перечислений.

### Структура

\`\`\`
Cell
├── EditButton     (опционально — кнопка add/remove слева)
├── Left slot      (иконка, аватар или произвольный контент)
├── TextBlock      (label + caption)
└── Right slot     (шеврон, drag-handle или произвольный контент)
\`\`\`

### Режим редактирования (\`edit\`)

| Значение | Описание |
|---|---|
| \`off\` | Обычный режим — шеврон справа |
| \`remove\` | Красная кнопка «−» слева + drag-handle справа |
| \`add\` | Зелёная кнопка «+» слева + drag-handle справа |

### Слоты

- \`leftContent\` — произвольный контент в левом слоте (аватар, иконка, изображение). Если не передан — отображается серый placeholder
- \`rightContent\` — произвольный контент в правом слоте. Если не передан — шеврон или drag-handle в зависимости от \`edit\`
- \`showSeparator\` — горизонтальный разделитель снизу (для списков)
        `,
      },
    },
  },
  argTypes: {
    label: { description: "Основной текст строки.", control: "text" },
    caption: { description: "Вспомогательный текст под label.", control: "text" },
    edit: {
      description: "Режим редактирования списка.",
      control: "radio",
      options: ["off", "remove", "add"],
    },
    showRight: {
      description: "Показывать правый слот (шеврон или drag-handle). `false` — только левая иконка и текст.",
      control: "boolean",
    },
    showSeparator: {
      description: "Разделитель снизу строки.",
      control: "boolean",
    },
    onEditAction: { description: "Коллбек кнопки add/remove.", action: "edit action" },
    onClick: { description: "Коллбек клика по строке.", action: "cell clicked" },
    leftContent: { control: false },
    rightContent: { control: false },
    style: { control: false },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Cell>;

const ListWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: 375, border: "1px solid #E6E9F0", borderRadius: 16, overflow: "hidden", background: "#fff" }}>
    {children}
  </div>
);

const WithIcon = ({ children }: { children?: React.ReactNode }) => (
  <IconBackground>
    <IconPicture width={24} height={24} color="#969FA8" />
    {children}
  </IconBackground>
);

export const Default: Story = {
  name: "Default",
  args: { label: "Label", caption: "Caption", edit: "off", showSeparator: false },
};

export const AllModes: Story = {
  name: "Все режимы",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Три режима: обычный (шеврон), удаление (красный «−»), добавление (зелёный «+»)." },
    },
  },
  render: () => (
    <ListWrapper>
      <Cell label="Label" caption="Caption" edit="off" leftContent={<WithIcon />} />
      <Cell label="Label" caption="Caption" edit="remove" leftContent={<WithIcon />} showSeparator />
      <Cell label="Label" caption="Caption" edit="add" leftContent={<WithIcon />} />
    </ListWrapper>
  ),
};

export const WithSeparators: Story = {
  name: "Список с разделителями",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "`showSeparator` добавляет линию между строками." },
    },
  },
  render: () => (
    <ListWrapper>
      {["Настройки профиля", "Уведомления", "Конфиденциальность", "Помощь"].map((label, i, arr) => (
        <Cell
          key={label}
          label={label}
          caption="Подробнее"
          leftContent={<WithIcon />}
          showSeparator={i < arr.length - 1}
        />
      ))}
    </ListWrapper>
  ),
};

export const EditableList: Story = {
  name: "Редактируемый список",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Пример управляемого списка с удалением и добавлением элементов." },
    },
  },
  render: () => {
    const [items, setItems] = useState(["Москва", "Санкт-Петербург", "Казань"]);
    const [mode, setMode] = useState<"off" | "remove">("off");

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <button
          onClick={() => setMode(m => m === "off" ? "remove" : "off")}
          style={{ alignSelf: "flex-start", padding: "6px 12px", borderRadius: 8, border: "1px solid #BCC3D0", cursor: "pointer", fontFamily: "sans-serif", fontSize: 13 }}
        >
          {mode === "off" ? "Редактировать" : "Готово"}
        </button>
        <ListWrapper>
          {items.map((item, i) => (
            <Cell
              key={item}
              label={item}
              caption="Город"
              edit={mode}
              leftContent={<WithIcon />}
              showSeparator={i < items.length - 1}
              onEditAction={() => setItems(prev => prev.filter((_, idx) => idx !== i))}
            />
          ))}
        </ListWrapper>
      </div>
    );
  },
};

export const NoRight: Story = {
  name: "Без правого слота",
  render: () => (
    <ListWrapper>
      {["Профиль", "Уведомления", "Безопасность"].map((label, i, arr) => (
        <Cell
          key={label}
          label={label}
          caption="Настройки"
          leftContent={<WithIcon />}
          showRight={false}
          showSeparator={i < arr.length - 1}
        />
      ))}
    </ListWrapper>
  ),
  parameters: {
    docs: {
      description: { story: "`showRight={false}` — только левая иконка и текст, без шеврона." },
    },
  },
};

export const CustomSlots: Story = {
  name: "Кастомные слоты",
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "Левый и правый слоты принимают произвольный ReactNode." },
    },
  },
  render: () => (
    <ListWrapper>
      <Cell
        label="Только текст"
        caption="Без иконки слева"
        leftContent={null}
        rightContent={null}
      />
      <Cell
        label="Кастомная иконка"
        caption="С иконкой камеры"
        leftContent={<WithIcon />}
      />
    </ListWrapper>
  ),
};
