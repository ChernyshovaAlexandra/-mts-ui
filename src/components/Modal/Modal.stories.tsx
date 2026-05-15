import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Modal, ModalProps } from "./Modal";
import Input from "../FormItems/Input/Input";
import { Select } from "../FormItems/Select/Select";
import { Button } from "../Button/Button";

export default {
  title: "МТС/Feedback/Modal",
  component: Modal,
  tags: ["autodocs"],
} as Meta<ModalProps>;

const ModalDemo: React.FC<Omit<ModalProps, "isModalOpen" | "handleClose">> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ background: "#F2F3F7", padding: 24 }}>
      <Button btn_type="button" variant="primary" width="auto" onClick={() => setIsOpen(true)}>
        Открыть модальное окно
      </Button>
      <Modal {...props} isModalOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </div>
  );
};

const Template: StoryFn<ModalProps> = (args) => (
  <ModalDemo {...args} />
);

export const WithInput = Template.bind({});
WithInput.args = {
  title: "Заголовок",
  subtitle: "Сопутствующее сообщение",
  cancelText: "Отменить",
  submitText: "Выполнить",
  onSubmit: () => console.log("submit"),
  children: <Input id="modal-input" placeholder="Placeholder" />,
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  title: "Сменить язык",
  subtitle: "Выберите из списка",
  cancelText: "Отменить",
  submitText: "Сохранить",
  onSubmit: () => console.log("submit"),
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
};

export const WithoutSubtitle = Template.bind({});
WithoutSubtitle.args = {
  title: "Заголовок",
  cancelText: "Отменить",
  submitText: "Выполнить",
  onSubmit: () => console.log("submit"),
  children: <Input id="modal-input-2" placeholder="Placeholder" />,
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  title: "Заголовок",
  subtitle: "Сопутствующее сообщение",
  showCloseButton: true,
  cancelText: "Отменить",
  submitText: "Выполнить",
  onSubmit: () => console.log("submit"),
  children: <Input id="modal-input-3" placeholder="Placeholder" />,
};
