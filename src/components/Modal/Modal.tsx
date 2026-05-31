import React, { FC, HTMLAttributes, memo, useEffect, useState } from "react";
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
import { mts_text_primary, mts_text_secondary } from "../../consts";

export type ModalTitleVariant = HeaderVariant | TextVariant;

const MOBILE_MODAL_QUERY = "(max-width: 480px)";

interface ScrollLockSnapshot {
  scrollX: number;
  scrollY: number;
  htmlOverflow: string;
  bodyOverflow: string;
  bodyPosition: string;
  bodyTop: string;
  bodyLeft: string;
  bodyRight: string;
  bodyWidth: string;
}

let scrollLockCount = 0;
let scrollLockSnapshot: ScrollLockSnapshot | null = null;

const lockPageScroll = (): (() => void) => {
  scrollLockCount += 1;
  if (scrollLockCount > 1) {
    return () => {
      scrollLockCount -= 1;
    };
  }

  const html = document.documentElement;
  const { body } = document;
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  scrollLockSnapshot = {
    scrollX,
    scrollY,
    htmlOverflow: html.style.overflow,
    bodyOverflow: body.style.overflow,
    bodyPosition: body.style.position,
    bodyTop: body.style.top,
    bodyLeft: body.style.left,
    bodyRight: body.style.right,
    bodyWidth: body.style.width,
  };

  html.style.overflow = "hidden";
  body.style.overflow = "hidden";
  body.style.position = "fixed";
  body.style.top = `-${scrollY}px`;
  body.style.left = `-${scrollX}px`;
  body.style.right = "0";
  body.style.width = "100%";

  return () => {
    scrollLockCount -= 1;
    if (scrollLockCount > 0 || scrollLockSnapshot === null) return;

    const snapshot = scrollLockSnapshot;
    scrollLockSnapshot = null;

    html.style.overflow = snapshot.htmlOverflow;
    body.style.overflow = snapshot.bodyOverflow;
    body.style.position = snapshot.bodyPosition;
    body.style.top = snapshot.bodyTop;
    body.style.left = snapshot.bodyLeft;
    body.style.right = snapshot.bodyRight;
    body.style.width = snapshot.bodyWidth;

    window.scrollTo(snapshot.scrollX, snapshot.scrollY);
  };
};

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "title"> {
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
    useEffect(() => {
      if (!isModalOpen) return;
      return lockPageScroll();
    }, [isModalOpen]);

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
