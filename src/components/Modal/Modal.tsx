import React, { FC, HTMLAttributes, memo } from "react";
import { CloseButton, ModalContainer, Overlay2, Title } from "./style";
import IconX from "../../icons/IconX/IconX";

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  isModalOpen: boolean;
  children: React.ReactNode;
  handleClose: () => void;
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

    const titleId = title ? "modal-title" : undefined;

    return (
      <Overlay2 onClick={handleClose}>
        <ModalContainer
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={(e) => e.stopPropagation()}
          style={modalStyle}
          {...rest}
        >
          {title && (
            <Title id={titleId} variant="P4-Bold-Upp-Wide">
              {title}
            </Title>
          )}

          {!disableClosing && (
            <CloseButton
              onClick={handleClose}
              aria-label="Закрыть модальное окно"
            >
              <IconX />
            </CloseButton>
          )}

          {children}
        </ModalContainer>
      </Overlay2>
    );
  }
);

export default Modal;
