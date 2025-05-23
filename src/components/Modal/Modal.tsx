import React, { FC, HTMLAttributes, memo, useEffect } from "react";
import { CloseButton, ModalContainer, Overlay, Title } from "./style";
import IconX from "../../icons/IconX/IconX";
import Text from "../Text/Text";
import { mts_text_primary } from "../../consts";

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  isModalOpen: boolean;
  children: React.ReactNode;
  handleClose: any;
  modalStyle?: React.CSSProperties;
  title?: string;
  disableClosing?: boolean;
}

export const Modal: FC<ModalProps> = memo(
  ({
    isModalOpen,
    children,
    handleClose,
    modalStyle,
    title,
    disableClosing = false,
    ...rest
  }) => {
    if (!isModalOpen) return null;

    return (
      <Overlay onClick={handleClose}>
        <ModalContainer
          style={modalStyle}
          onClick={(e) => e.stopPropagation()}
          {...rest}
        >
          {title ? <Title variant="P4-Bold-Upp-Wide">{title}</Title> : <></>}
          {!disableClosing && (
            <CloseButton onClick={handleClose}>
              <IconX />
            </CloseButton>
          )}
          {children}
        </ModalContainer>
      </Overlay>
    );
  }
);

export default Modal;
