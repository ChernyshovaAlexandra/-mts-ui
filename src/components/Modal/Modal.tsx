import React, { FC, HTMLAttributes, memo, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import {
  Body,
  CloseButton,
  Footer,
  Header as HeaderWrapper,
  MobileIndicator,
  ModalContainer,
  Overlay,
} from "./style";
import IconX from "../../icons/IconX/IconX";
import { Button } from "../Button/Button";
import HeaderText, { type HeaderVariant } from "../Header/Header";
import Text, { type TextVariant } from "../Text/Text";
import { BottomSheet, type BottomSheetProps } from "../BottomSheet/BottomSheet";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { lockPageScroll } from "../../utils/lockPageScroll";
import { mts_text_primary, mts_text_secondary } from "../../consts";

export type ModalTitleVariant = HeaderVariant | TextVariant;

const MOBILE_MODAL_QUERY = "(max-width: 480px)";

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "title"> {
  mobilePresentation?: "modal" | "bottom-sheet";
  mobileBreakpoint?: number;
  bottomSheetProps?: Pick<BottomSheetProps, "contentPadding" | "fixedHeight" | "collapsable" | "bottomOffset">;
  isModalOpen: boolean;
  children?: React.ReactNode;
  handleClose: () => void;
  modalStyle?: React.CSSProperties;
  title?: string;
  titleVariant?: ModalTitleVariant;
  subtitle?: string;
  animateMobileSheet?: boolean;
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
    mobilePresentation = "modal",
    mobileBreakpoint = 768,
    bottomSheetProps,
    children,
    handleClose,
    modalStyle,
    title,
    titleVariant = "P3-Medium-Comp",
    subtitle,
    animateMobileSheet = false,
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
    const isSheetViewport = useMediaQuery(`(max-width: ${mobileBreakpoint}px)`);
    const useSheet = mobilePresentation === "bottom-sheet" && isSheetViewport;

    useEffect(() => {
      if (!isModalOpen || useSheet) return;
      return lockPageScroll();
    }, [isModalOpen, useSheet]);

    useEffect(() => {
      if (!isModalOpen || disableClosing) return;
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") handleClose();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [isModalOpen, disableClosing, handleClose]);

    const isMobile = useMediaQuery(MOBILE_MODAL_QUERY);
    const titleId = title ? "modal-title" : undefined;
    const subtitleId = subtitle ? "modal-subtitle" : undefined;
    const hasFooter = Boolean(cancelText || submitText);
    const isHeaderTitleVariant = titleVariant.startsWith("H");
    const shouldAnimateMobileSheet = animateMobileSheet && isMobile;
    const overlayMotionProps = shouldAnimateMobileSheet
      ? {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
        }
      : {};
    const modalMotionProps = shouldAnimateMobileSheet
      ? {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring" as const, damping: 30, stiffness: 300 },
        }
      : {};

    if (useSheet) {
      return (
        <BottomSheet
          {...bottomSheetProps}
          isOpen={isModalOpen}
          onClose={handleClose}
          title={title}
          id={rest.id}
          className={rest.className}
          style={modalStyle ?? rest.style}
          ariaLabel={rest["aria-label"]}
          ariaDescribedBy={subtitle ? subtitleId : rest["aria-describedby"]}
          showCloseButton={showCloseButton}
          disableClosing={disableClosing}
          contentPadding={bottomSheetProps?.contentPadding ?? true}
        >
          {subtitle && <Text id={subtitleId} variant="P4-Regular-Comp">{subtitle}</Text>}
          {children}
          {hasFooter && (
            <Footer>
              {cancelText && <Button variant="secondary" onClick={onCancel ?? handleClose}>{cancelText}</Button>}
              {submitText && <Button variant="primary" onClick={onSubmit} disabled={submitDisabled} loading={submitLoading}>{submitText}</Button>}
            </Footer>
          )}
        </BottomSheet>
      );
    }

    return createPortal(
      <AnimatePresence>
        {isModalOpen && (
          <Overlay
            onClick={
              disableClosing
                ? undefined
                : (e) => { if (e.target === e.currentTarget) handleClose(); }
            }
            {...overlayMotionProps}
          >
            <ModalContainer
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={subtitleId}
              style={modalStyle}
              {...modalMotionProps}
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
                <HeaderWrapper>
                  {title && isHeaderTitleVariant && (
                    <HeaderText
                      id={titleId}
                      variant={titleVariant as HeaderVariant}
                      as="h2"
                      style={{ color: mts_text_primary, textAlign: "center" }}
                    >
                      {title}
                    </HeaderText>
                  )}
                  {title && !isHeaderTitleVariant && (
                    <Text
                      id={titleId}
                      variant={titleVariant as TextVariant}
                      as="h2"
                      style={{ color: mts_text_primary, textAlign: "center" }}
                    >
                      {title}
                    </Text>
                  )}
                  {subtitle && (
                    <Text
                      id={subtitleId}
                      variant="P4-Regular-Comp"
                      style={{ color: mts_text_secondary, textAlign: "center" }}
                    >
                      {subtitle}
                    </Text>
                  )}
                </HeaderWrapper>
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
        )}
      </AnimatePresence>,
      document.body
    );
  }
);

export default Modal;
