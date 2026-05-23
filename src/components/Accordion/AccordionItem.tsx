import React, { FC, memo, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconChevronDown } from "../../icons/IconChevronDown/IconChevronDown";
import { Header } from "../Header/Header";
import { Text } from "../Text/Text";
import type { TextVariant } from "../Text/Text";
import {
  ChevronWrap,
  ContentInner,
  DescriptionWrap,
  HeaderButton,
  ItemWrapper,
  LeftSlotBox,
  TitleColumn,
} from "./style";

export type AccordionVariant = "primary" | "secondary";
export type AccordionSize = "s" | "m" | "l";
export type AccordionTitleType = "primary" | "secondary" | "tertiary";

export interface AccordionItemData {
  id: string | number;
  title: React.ReactNode;
  description?: React.ReactNode;
  content: React.ReactNode;
  variant?: AccordionVariant;
  size?: AccordionSize;
  titleType?: AccordionTitleType;
  leftSlot?: React.ReactNode;
  disabled?: boolean;
  showDivider?: boolean;
  defaultOpen?: boolean;
}

interface InternalProps {
  data: AccordionItemData;
  variant: AccordionVariant;
  size: AccordionSize;
  titleType: AccordionTitleType;
  isOpen: boolean;
  onToggle: (id: string | number) => void;
}

const titleTextVariantMap: Record<
  AccordionTitleType,
  Record<AccordionSize, TextVariant>
> = {
  primary: {
    s: "P4-Medium-Comp",
    m: "P3-Medium-Comp",
    l: "P3-Medium-Comp",
  },
  secondary: {
    s: "P4-Regular-Comp",
    m: "P3-Regular-Comp",
    l: "P3-Regular-Comp",
  },
  tertiary: {
    s: "P4-Medium-Comp",
    m: "P4-Medium-Comp",
    l: "P4-Medium-Comp",
  },
};

const renderTitle = (
  node: React.ReactNode,
  titleType: AccordionTitleType,
  size: AccordionSize,
) => {
  if (titleType === "primary" && size === "l") {
    return (
      <Header variant="H4-Comp" as="p" style={{ margin: 0 }}>
        {node}
      </Header>
    );
  }

  return (
    <Text variant={titleTextVariantMap[titleType][size]} as="span">
      {node}
    </Text>
  );
};

export const AccordionItem: FC<InternalProps> = memo(
  ({ data, variant, size, titleType, isOpen, onToggle }) => {
    const {
      id,
      title,
      description,
      content,
      leftSlot,
      disabled = false,
    } = data;
    const effectiveVariant = data.variant ?? variant;
    const effectiveSize = data.size ?? size;
    const effectiveTitleType = data.titleType ?? titleType;

    const reactId = useId();
    const headerId = `accordion-header-${reactId}`;
    const panelId = `accordion-panel-${reactId}`;

    const handleClick = () => {
      if (disabled) return;
      onToggle(id);
    };

    return (
      <ItemWrapper $variant={effectiveVariant} $disabled={disabled}>
        <HeaderButton
          type="button"
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-disabled={disabled || undefined}
          disabled={disabled}
          $size={effectiveSize}
          $isOpen={isOpen}
          $disabled={disabled}
          onClick={handleClick}
        >
          {leftSlot !== undefined && (
            <LeftSlotBox $size={effectiveSize}>{leftSlot}</LeftSlotBox>
          )}
          <TitleColumn>
            {renderTitle(title, effectiveTitleType, effectiveSize)}
            {description !== undefined && description !== null && (
              <DescriptionWrap>
                <Text variant="P4-Regular-Comp" as="span">
                  {description}
                </Text>
              </DescriptionWrap>
            )}
          </TitleColumn>
          <ChevronWrap $size={effectiveSize} $isOpen={isOpen}>
            <IconChevronDown aria-hidden />
          </ChevronWrap>
        </HeaderButton>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <ContentInner
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                $size={effectiveSize}
              >
                {typeof content === "string" ? (
                  <Text variant="P3-Regular-Comp">{content}</Text>
                ) : (
                  content
                )}
              </ContentInner>
            </motion.div>
          )}
        </AnimatePresence>
      </ItemWrapper>
    );
  },
);

AccordionItem.displayName = "AccordionItem";
