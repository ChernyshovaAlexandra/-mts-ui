import React, { FC, HTMLAttributes, memo, useEffect } from "react";
import {
  Body,
  CloseButton,
  Footer,
  Header,
  MobileIndicator,
  ModalContainer,
  Overlay,
  Subtitle,
  Title,
} from "./style";
import IconX from "../../icons/IconX/IconX";
import { Button } from "../Button/Button";

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "title"> {
  isModalOpen: boolean;
  children?: React.ReactNode;
  handleClose: () => void;
  modalStyle?: React.CSSProperties;
  title?: string;
  subtitle?: string;
  showCloseButton?: boolean;
  disableClosing?: boolean;
  cancelText?: string;
  submitText?: string;
  onCancel?: () => void;
  onSubmit?: () => void;
  submitDisabled?: boolean;
  submitLoading?: boolean;
}

export const Modal: FC<ModalProps> = memo(
  ({
    isModalOpen,
    children,
    handleClose,
    modalStyle,
    title,
    subtitle,
    showCloseButton = false,
    disableClosing = false,
    cancelText,
    submitText,
    onCancel,
    onSubmit,
    submitDisabled = false,
    submitLoading = false,
    ...rest
  }) => {
    useEffect(() => {
      if (!isModalOpen) return;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }, [isModalOpen]);

    useEffect(() => {
      if (!isModalOpen || disableClosing) return;
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") handleClose();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [isModalOpen, disableClosing, handleClose]);

    if (!isModalOpen) return null;

    const titleId = title ? "modal-title" : undefined;
    const subtitleId = subtitle ? "modal-subtitle" : undefined;
    const hasFooter = Boolean(cancelText || submitText);

    return (
      <Overlay onClick={disableClosing ? undefined : handleClose}>
        <ModalContainer
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={subtitleId}
          onClick={(e) => e.stopPropagation()}
          style={modalStyle}
          {...rest}
        >
          <MobileIndicator aria-hidden="true" />

          {showCloseButton && !disableClosing && (
            <CloseButton
              onClick={handleClose}
              aria-label="Закрыть модальное окно"
              type="button"
            >
              <IconX />
            </CloseButton>
          )}

          {(title || subtitle) && (
            <Header>
              {title && (
                <Title id={titleId} variant="P3-Medium-Comp" as="h2">
                  {title}
                </Title>
              )}
              {subtitle && (
                <Subtitle id={subtitleId} variant="P4-Regular-Comp">
                  {subtitle}
                </Subtitle>
              )}
            </Header>
          )}

          {children && <Body>{children}</Body>}

          {hasFooter && (
            <Footer>
              {cancelText && (
                <Button
                  btn_type="button"
                  variant="secondary"
                  onClick={onCancel ?? handleClose}
                >
                  {cancelText}
                </Button>
              )}
              {submitText && (
                <Button
                  btn_type="button"
                  variant="primary"
                  onClick={onSubmit}
                  disabled={submitDisabled}
                  loading={submitLoading}
                >
                  {submitText}
                </Button>
              )}
            </Footer>
          )}
        </ModalContainer>
      </Overlay>
    );
  }
);

export default Modal;
