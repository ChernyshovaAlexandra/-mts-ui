import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import Input from "../FormItems/Input/Input";
import { Select } from "../FormItems/Select/Select";
import { Button } from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "МТС/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Modal** — диалоговое окно для подтверждения действий, ввода данных или отображения важной информации. Рендерится через портал в \`document.body\`.

### Поведение

- Открытие/закрытие управляется снаружи через \`isModalOpen\` и \`handleClose\`
- При открытии блокирует скролл страницы
- Закрывается по клику на оверлей или клавише \`Escape\`
- \`disableClosing={true}\` — полностью отключает оба способа закрытия
- На мобильных устройствах (< 480px) прижимается к нижнему краю экрана как Bottom Sheet
- \`animateMobileSheet={true}\` — включает мобильную анимацию выезда снизу

### Структура

\`\`\`
Modal
├── MobileIndicator  (drag-handle на мобилке)
├── CloseButton      (опционально, showCloseButton)
├── Header           (title + subtitle)
├── Body             (children)
└── Footer           (cancelText + submitText)
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    isModalOpen: {
      description: "Управляет видимостью модального окна.",
      control: "boolean",
    },
    handleClose: {
      description: "Коллбек закрытия — вызывается по клику на оверлей или Escape.",
    },
    title: {
      description: "Заголовок модального окна.",
      control: "text",
    },
    titleVariant: {
      description: "Типографика заголовка. Поддерживает варианты Text и Header, например `H3-Wide`.",
      control: "select",
      options: [
        "P3-Medium-Comp",
        "P3-Bold-Comp",
        "P3-Regular-Comp",
        "P4-Bold-Comp",
        "P4-Medium-Comp",
        "P4-Regular-Comp",
        "H1-Wide",
        "H2-Wide",
        "H3-Wide",
        "H4-Wide",
        "H4-Comp",
      ],
    },
    subtitle: {
      description: "Подзаголовок или описание под заголовком.",
      control: "text",
    },
    animateMobileSheet: {
      description: "Включает анимацию выезда модалки снизу на мобильных экранах.",
      control: "boolean",
    },
    showCloseButton: {
      description: "Показывает кнопку закрытия (×) в правом верхнем углу.",
      control: "boolean",
    },
    disableClosing: {
      description: "Запрещает закрытие по оверлею и Escape. Пользователь может закрыть только через кнопки действий.",
      control: "boolean",
    },
    cancelText: {
      description: "Текст кнопки отмены. Если не передан — кнопка не отображается.",
      control: "text",
    },
    submitText: {
      description: "Текст кнопки подтверждения. Если не передан — кнопка не отображается.",
      control: "text",
    },
    submitDisabled: {
      description: "Блокирует кнопку подтверждения.",
      control: "boolean",
    },
    submitLoading: {
      description: "Показывает лоадер на кнопке подтверждения во время выполнения действия.",
      control: "boolean",
    },
    onSubmit: {
      description: "Коллбек нажатия на кнопку подтверждения.",
    },
    onCancel: {
      description: "Коллбек нажатия на кнопку отмены. Если не передан — при нажатии вызывается `handleClose`.",
    },
    modalStyle: {
      description: "Дополнительные стили для контейнера модального окна.",
      control: false,
    },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDemo = (props: Omit<React.ComponentProps<typeof Modal>, "isModalOpen" | "handleClose">) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ padding: 24 }}>
      <Button btn_type="button" variant="primary" width="auto" onClick={() => setIsOpen(true)}>
        Открыть модальное окно
      </Button>
      <Modal {...props} isModalOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Default: Story = {
  name: "С полем ввода",
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "Заголовок",
    subtitle: "Сопутствующее сообщение",
    cancelText: "Отменить",
    submitText: "Выполнить",
    children: <Input id="modal-input" placeholder="Placeholder" />,
  },
  parameters: {
    docs: {
      description: { story: "Базовый вариант с заголовком, описанием, полем ввода и двумя кнопками действий." },
    },
  },
};

export const WithDropdown: Story = {
  name: "С выпадающим списком",
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "Сменить язык",
    subtitle: "Выберите из списка",
    cancelText: "Отменить",
    submitText: "Сохранить",
    children: (
      <Select
        name="lang"
        value=""
        onChange={() => {}}
        options={[
          { value: "ru", label: "Русский" },
          { value: "en", label: "Английский" },
          { value: "it", label: "Итальянский" },
        ]}
      />
    ),
  },
  parameters: {
    docs: {
      description: { story: "Модальное окно с выбором из списка." },
    },
  },
};

export const WithCloseButton: Story = {
  name: "С кнопкой закрытия",
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "Заголовок",
    subtitle: "Сопутствующее сообщение",
    showCloseButton: true,
    cancelText: "Отменить",
    submitText: "Выполнить",
    children: <Input id="modal-input-close" placeholder="Placeholder" />,
  },
  parameters: {
    docs: {
      description: { story: "Кнопка × в правом верхнем углу — альтернативный способ закрытия помимо оверлея и Escape." },
    },
  },
};

export const WideTitle: Story = {
  name: "С заголовком H3-Wide",
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "Заголовок по центру",
    titleVariant: "H3-Wide",
    subtitle: "Сопутствующее сообщение",
    cancelText: "Отменить",
    submitText: "Выполнить",
    children: <Input id="modal-input-wide-title" placeholder="Placeholder" />,
  },
  parameters: {
    docs: {
      description: { story: "Заголовок модального окна можно отрисовать в заголовочной типографике, например `H3-Wide`." },
    },
  },
};

export const AnimatedMobileSheet: Story = {
  name: "С мобильной sheet-анимацией",
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "Заголовок по центру",
    titleVariant: "H3-Wide",
    subtitle: "На мобильном экране модалка выезжает снизу",
    animateMobileSheet: true,
    cancelText: "Отменить",
    submitText: "Выполнить",
    children: <Input id="modal-input-animated-mobile" placeholder="Placeholder" />,
  },
  parameters: {
    docs: {
      description: { story: "Opt-in анимация для мобильного представления модалки. На desktop поведение остаётся обычным." },
    },
  },
};

export const DisabledClosing: Story = {
  name: "Без закрытия по оверлею",
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "Подтвердите действие",
    subtitle: "Это действие нельзя отменить",
    disableClosing: true,
    cancelText: "Отмена",
    submitText: "Удалить",
    children: <Input id="modal-input-disabled" placeholder="Введите подтверждение" />,
  },
  parameters: {
    docs: {
      description: { story: "Окно нельзя закрыть кликом по оверлею или Escape — только через кнопки. Используется для критических действий." },
    },
  },
};

export const LoadingSubmit: Story = {
  name: "Загрузка при сабмите",
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "Сохранить изменения",
    submitText: "Сохранить",
    cancelText: "Отменить",
    submitLoading: true,
    children: <Input id="modal-input-loading" placeholder="Placeholder" />,
  },
  parameters: {
    docs: {
      description: { story: "Кнопка подтверждения показывает лоадер во время выполнения асинхронного действия." },
    },
  },
};
