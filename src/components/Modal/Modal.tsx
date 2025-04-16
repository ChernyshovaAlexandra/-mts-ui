import React, { FC, memo } from "react";
import { CloseButton, ModalContainer, Overlay } from "./style";
import IconX from "../../icons/IconX/IconX";
import Text from "../Text/Text";
import { mts_text_primary } from "../../consts";

export interface ModalProps {
  isModalOpen: boolean;
  children: React.ReactNode;
  handleClose: any;
  modalStyle?: React.CSSProperties;
  title?: string;
}

export const Modal: FC<ModalProps> = memo(
  ({ isModalOpen, children, handleClose, modalStyle, title }) => {
    if (!isModalOpen) return null;

    return (
      <Overlay onClick={handleClose}>
        <ModalContainer style={modalStyle} onClick={(e) => e.stopPropagation()}>
          {title ? (
            <Text
              variant="wide"
              style={{
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "24px",
                color: mts_text_primary,
              }}
            >
              {title}
            </Text>
          ) : (
            <></>
          )}
          <CloseButton onClick={handleClose}>
            <IconX />
          </CloseButton>
          {children}
        </ModalContainer>
      </Overlay>
    );
  }
);

export default Modal;
