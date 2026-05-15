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
  }) => {
    const hasFooter = Boolean(onReset || onApply);

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
            >
              <DragIndicator aria-hidden="true" />
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
