import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Modal, ModalProps } from "./Modal";
import Input from "../FormItems/Input/Input";
import { Select } from "../FormItems/Select/Select";

export default {
  title: "МТС/Feedback/Modal",
  component: Modal,
  tags: ["autodocs"],
} as Meta<ModalProps>;

const Stage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      background: "#F2F3F7",
      width: "100%",
      height: "100vh",
      position: "relative",
    }}
  >
    {children}
  </div>
);

const Template: StoryFn<ModalProps> = (args) => (
  <Stage>
    <Modal {...args} />
  </Stage>
);

export const WithInput = Template.bind({});
WithInput.args = {
  isModalOpen: true,
  title: "Заголовок",
  subtitle: "Сопутствующее сообщение",
  cancelText: "Отменить",
  submitText: "Выполнить",
  handleClose: () => console.log("close"),
  onSubmit: () => console.log("submit"),
  children: <Input id="modal-input" placeholder="Placeholder" />,
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  isModalOpen: true,
  title: "Сменить язык",
  subtitle: "Выберите из списка",
  cancelText: "Отменить",
  submitText: "Сохранить",
  handleClose: () => console.log("close"),
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
  isModalOpen: true,
  title: "Заголовок",
  cancelText: "Отменить",
  submitText: "Выполнить",
  handleClose: () => console.log("close"),
  onSubmit: () => console.log("submit"),
  children: <Input id="modal-input-2" placeholder="Placeholder" />,
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  isModalOpen: true,
  title: "Заголовок",
  subtitle: "Сопутствующее сообщение",
  showCloseButton: true,
  cancelText: "Отменить",
  submitText: "Выполнить",
  handleClose: () => console.log("close"),
  onSubmit: () => console.log("submit"),
  children: <Input id="modal-input-3" placeholder="Placeholder" />,
};
