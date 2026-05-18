import React, { FC, ButtonHTMLAttributes, HTMLAttributes } from "react";
import { StyledChip, ChipIconSlot, ChipCloseButton, type ChipSize, type ChipSelectedVariant } from "./style";
import { IconChevronDown } from "../../icons/IconChevronDown/IconChevronDown";
import { IconChevronUp } from "../../icons/IconChevronUp/IconChevronUp";
import { IconCross } from "../../icons/IconCross/IconCross";

export type { ChipSize, ChipSelectedVariant };

export interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  size?: ChipSize;
  selected?: boolean;
  selectedVariant?: ChipSelectedVariant;
  disabled?: boolean;
  /** Leading icon or graphic */
  icon?: React.ReactNode;
  /** Shows trailing chevron that flips when open; when selected shows × instead */
  menu?: boolean;
  /** Controls chevron direction when menu=true */
  menuOpen?: boolean;
  /** × handler — for form chip (always shows ×) or menu chip when selected */
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export const Chip: FC<ChipProps> = ({
  size = "medium",
  selected = false,
  selectedVariant = "filled",
  disabled = false,
  icon,
  menu = false,
  menuOpen = false,
  onClose,
  onClick,
  children,
  ...rest
}) => {
  const iconSize = 16 as const;
  const onDark = selected && selectedVariant === "filled";

  const renderTrailing = () => {
    // Form chip — always × when onClose provided (without menu)
    if (!menu && onClose) {
      return (
        <ChipCloseButton
          type="button"
          $onDark={onDark}
          onClick={(e) => { e.stopPropagation(); onClose(e); }}
          aria-label="Удалить"
        >
          <IconCross size={iconSize} />
        </ChipCloseButton>
      );
    }

    // Menu chip — × when selected, chevron otherwise
    if (menu) {
      if (selected && onClose) {
        return (
          <ChipCloseButton
            type="button"
            $onDark={onDark}
            onClick={(e) => { e.stopPropagation(); onClose(e); }}
            aria-label="Сбросить"
          >
            <IconCross size={iconSize} />
          </ChipCloseButton>
        );
      }
      return (
        <ChipIconSlot>
          {menuOpen
            ? <IconChevronUp size={iconSize} />
            : <IconChevronDown size={iconSize} />
          }
        </ChipIconSlot>
      );
    }

    return null;
  };

  return (
    <StyledChip
      type="button"
      $size={size}
      $selected={selected}
      $selectedVariant={selectedVariant}
      $disabled={disabled}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      aria-pressed={selected}
      {...rest}
    >
      {icon && <ChipIconSlot>{icon}</ChipIconSlot>}
      {children}
      {renderTrailing()}
    </StyledChip>
  );
};

export interface ChipGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ChipGroup: FC<ChipGroupProps> = ({ children, style, ...rest }) => (
  <div
    style={{ display: "flex", flexWrap: "wrap", gap: 8, ...style }}
    {...rest}
  >
    {children}
  </div>
);

export default Chip;
