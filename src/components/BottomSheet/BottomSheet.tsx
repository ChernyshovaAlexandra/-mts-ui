import React, { FC, memo, useEffect, useId } from "react";
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
import { lockPageScroll } from "../../utils/lockPageScroll";

export interface BottomSheetProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  showCloseButton?: boolean;
  contentPadding?: boolean | string;
  disableClosing?: boolean;
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
  bottomOffset?: number | string;
}

const toCssLength = (value: number | string | undefined): string => {
  if (value === undefined) return "0px";
  return typeof value === "number" ? `${value}px` : value;
};

export const BottomSheet: FC<BottomSheetProps> = memo(
  ({
    id,
    className,
    style,
    ariaLabel,
    ariaDescribedBy,
    showCloseButton = true,
    contentPadding = false,
    disableClosing = false,
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
    bottomOffset,
  }) => {
    const generatedId = useId();
    const titleId = `${generatedId}-title`;

    useEffect(() => {
      if (!isOpen) return;
      return lockPageScroll();
    }, [isOpen]);

    const hasFooter = Boolean(onReset || onApply);
    const bottomOffsetValue = toCssLength(bottomOffset);
    const hiddenY = bottomOffsetValue === "0px" ? "100%" : `calc(100% + ${bottomOffsetValue})`;

    const swipeProps = collapsable && !disableClosing
      ? {
          drag: "y" as const,
          dragConstraints: { top: 0, bottom: 0 },
          dragElastic: { top: 0, bottom: 0.4 },
          onDragEnd: (_: MouseEvent | TouchEvent | PointerEvent, info: { offset: { y: number }; velocity: { y: number } }) => {
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
              onClick={disableClosing ? undefined : onClose}
              $bottomOffset={bottomOffsetValue}
            />
            <Sheet
              id={id}
              className={className}
              style={style}
              role="dialog"
              aria-modal="true"
              aria-label={ariaLabel}
              aria-labelledby={title ? titleId : undefined}
              aria-describedby={ariaDescribedBy}
              initial={{ y: hiddenY }}
              animate={{ y: 0 }}
              exit={{ y: hiddenY }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              $fixedHeight={fixedHeight}
              $bottomOffset={bottomOffsetValue}
              {...swipeProps}
            >
              <DragIndicator aria-hidden="true" $collapsable={collapsable} />
              {title && (
                <Header>
                  <SheetTitle id={titleId}>{title}</SheetTitle>
                  {showCloseButton && !disableClosing && (
                    <CloseButton onClick={onClose} type="button" aria-label="Закрыть">
                      <IconX />
                    </CloseButton>
                  )}
                </Header>
              )}
              <OptionsContainer $contentPadding={contentPadding}>{children}</OptionsContainer>
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
