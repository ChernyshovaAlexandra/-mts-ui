import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Modal, ModalProps } from "./Modal";
import { Button } from "../Button";
import { Text } from "../Text";
import { Header } from "../Header/Header";

export default {
  title: "МТС/Modal",
  component: Modal,
  tags: ["autodocs"],
} as Meta<ModalProps>;

const Template: StoryFn<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isModalOpen: true,
  modalContent: (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Header>Внимание!</Header>
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
