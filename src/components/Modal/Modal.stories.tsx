import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Modal, ModalProps } from "./Modal";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";

export default {
  title: "МТС/Modal",
  component: Modal,
  tags: ["autodocs"],
} as Meta<ModalProps>;

const Template: StoryFn<ModalProps> = (args: any) => (
  <div
    style={{
      background: "linear-gradient(135deg, #8e2de2, #f27121)",
      width: "100%",
      height: "100vh",
      position: "relative",
    }}
  >
    <Modal {...args}>{args.children}</Modal>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  isModalOpen: true,
  title: "Восстановить пароль",
  children: (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Text>This is the content of the modal.</Text>
      <Button
        btn_type="button"
        variant="primary"
        style={{ marginTop: "10px" }}
        onClick={() => console.log("Button inside modal clicked")}
      >
        Confirm
      </Button>
    </div>
  ),
  handleClose: () => console.log("Modal closed"),
};
