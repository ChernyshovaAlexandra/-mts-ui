import React, { FC, memo } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import {
  Overlay,
  Sheet,
  DragIndicator,
  Header,
  SheetTitle,
  CloseButton,
  OptionsContainer,
  SheetFooter,
} from "./style";
import IconX from "../../icons/IconX/IconX";
import { Button } from "../Button/Button";

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  onReset?: () => void;
  onApply?: () => void;
  resetText?: string;
  applyText?: string;
  fixedHeight?: boolean;
  collapsable?: boolean;
}

export const BottomSheet: FC<BottomSheetProps> = memo(
  ({
    isOpen,
    onClose,
    title,
    children,
    onReset,
    onApply,
    resetText = "Сбросить",
    applyText = "Применить",
    fixedHeight,
    collapsable,
  }) => {
    const hasFooter = Boolean(onReset || onApply);

    const swipeProps = collapsable
      ? {
          drag: "y" as const,
          dragConstraints: { top: 0, bottom: 0 },
          dragElastic: { top: 0, bottom: 0.4 },
          onDragEnd: (_: never, info: { offset: { y: number }; velocity: { y: number } }) => {
            if (info.offset.y > 80 || info.velocity.y > 400) {
              onClose();
            }
          },
        }
      : {};

    return createPortal(
      <AnimatePresence>
        {isOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
            />
            <Sheet
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              $fixedHeight={fixedHeight}
              {...swipeProps}
            >
              <DragIndicator aria-hidden="true" $collapsable={collapsable} />
              {title && (
                <Header>
                  <SheetTitle>{title}</SheetTitle>
                  <CloseButton onClick={onClose} type="button" aria-label="Закрыть">
                    <IconX />
                  </CloseButton>
                </Header>
              )}
              <OptionsContainer>{children}</OptionsContainer>
              {hasFooter && (
                <SheetFooter>
                  {onReset && (
                    <Button btn_type="button" variant="secondary" onClick={onReset}>
                      {resetText}
                    </Button>
                  )}
                  {onApply && (
                    <Button btn_type="button" variant="primary" onClick={onApply}>
                      {applyText}
                    </Button>
                  )}
                </SheetFooter>
              )}
            </Sheet>
          </>
        )}
      </AnimatePresence>,
      document.body
    );
  }
);

export default BottomSheet;
