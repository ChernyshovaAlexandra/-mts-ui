import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import { Separator } from "../Separator/Separator";
import {
  AccordionItem,
  type AccordionItemData,
  type AccordionSize,
  type AccordionTitleType,
  type AccordionVariant,
} from "./AccordionItem";
import { ItemSpacer, Root } from "./style";

export type {
  AccordionItemData,
  AccordionSize,
  AccordionTitleType,
  AccordionVariant,
};

export interface AccordionProps {
  items: AccordionItemData[];
  openIds?: (string | number)[];
  defaultOpenIds?: (string | number)[];
  onOpenChange?: (ids: (string | number)[]) => void;
  multiple?: boolean;
  variant?: AccordionVariant;
  size?: AccordionSize;
  titleType?: AccordionTitleType;
  showDivider?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const toKey = (id: string | number) => String(id);

export const Accordion: FC<AccordionProps> = ({
  items,
  openIds,
  defaultOpenIds,
  onOpenChange,
  multiple = false,
  variant = "primary",
  size = "m",
  titleType = "primary",
  showDivider,
  className,
  style,
}) => {
  const isControlled = openIds !== undefined;

  const computeInitial = (): Set<string> => {
    if (defaultOpenIds && defaultOpenIds.length > 0) {
      return new Set(defaultOpenIds.map(toKey));
    }
    const fromItems = items
      .filter((it) => it.defaultOpen)
      .map((it) => toKey(it.id));
    return new Set(fromItems);
  };

  const [internalOpen, setInternalOpen] = useState<Set<string>>(computeInitial);

  const initRef = useRef(true);
  if (initRef.current) {
    initRef.current = false;
  }

  const openSet = useMemo<Set<string>>(() => {
    if (isControlled) return new Set(openIds!.map(toKey));
    return internalOpen;
  }, [isControlled, openIds, internalOpen]);

  const emit = useCallback(
    (next: Set<string>) => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(
        items
          .map((it) => it.id)
          .filter((id) => next.has(toKey(id))),
      );
    },
    [isControlled, onOpenChange, items],
  );

  const handleToggle = useCallback(
    (id: string | number) => {
      const key = toKey(id);
      const next = new Set(openSet);
      if (next.has(key)) {
        next.delete(key);
      } else {
        if (!multiple) next.clear();
        next.add(key);
      }
      emit(next);
    },
    [openSet, multiple, emit],
  );

  return (
    <Root className={className} style={style}>
      {items.map((item, index) => {
        const itemVariant = item.variant ?? variant;
        const isLast = index === items.length - 1;
        const dividerDefault = itemVariant === "primary";
        const wantsDivider = item.showDivider ?? showDivider ?? dividerDefault;
        const isOpen = openSet.has(toKey(item.id));

        return (
          <React.Fragment key={item.id}>
            <AccordionItem
              data={item}
              variant={variant}
              size={size}
              titleType={titleType}
              isOpen={isOpen}
              onToggle={handleToggle}
            />
            {!isLast && itemVariant === "secondary" && (
              <ItemSpacer $variant="secondary" />
            )}
            {!isLast && itemVariant === "primary" && wantsDivider && (
              <Separator margin="0" />
            )}
          </React.Fragment>
        );
      })}
    </Root>
  );
};

export default Accordion;
