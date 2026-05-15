import React, { FC, HTMLAttributes, memo } from "react";
import {
  PrimaryWrapper,
  PrimaryContent,
  PrimaryFooter,
  CloseIconButton,
  SecondaryWrapper,
  SecondaryHeader,
  SecondaryIconSlot,
  SecondaryCloseButton,
  LinkText,
  TertiaryWrapper,
  TertiaryIconSlot,
  type SecondaryColor,
} from "./style";
import { Button } from "../Button/Button";
import Text from "../Text/Text";
import IconX from "../../icons/IconX/IconX";
import IconInfo from "../../icons/IconInfo/IconInfo";
import { mts_text_primary, mts_text_secondary, mts_greyscale_400 } from "../../consts";

export type BannerVariant = "primary" | "secondary" | "tertiary";

export interface BannerProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  variant?: BannerVariant;
  text: string;
  title?: string;
  onClose?: () => void;
  // primary
  actionText?: string;
  onAction?: () => void;
  cancelText?: string;
  onCancel?: () => void;
  // secondary
  color?: SecondaryColor;
  icon?: React.ReactNode;
  linkText?: string;
  onLinkClick?: () => void;
}

export const Banner: FC<BannerProps> = memo(
  ({
    variant = "primary",
    text,
    title,
    onClose,
    actionText,
    onAction,
    cancelText,
    onCancel,
    color = "grey",
    icon,
    linkText,
    onLinkClick,
    ...rest
  }) => {
    if (variant === "tertiary") {
      return (
        <TertiaryWrapper role="note" {...rest}>
          <TertiaryIconSlot aria-hidden="true">
            <IconInfo width={20} height={20} />
          </TertiaryIconSlot>
          <Text variant="P4-Regular-Comp" style={{ flex: 1, minWidth: 0, color: mts_text_primary }}>
            {text}
          </Text>
        </TertiaryWrapper>
      );
    }

    if (variant === "secondary") {
      const inverted = color === "inverted";
      const titleColor = inverted ? "#FAFAFA" : mts_text_primary;
      const bodyColor = inverted ? mts_greyscale_400 : mts_text_secondary;

      return (
        <SecondaryWrapper role="note" $color={color} {...rest}>
          {(icon || title || onClose) && (
            <SecondaryHeader>
              {icon && <SecondaryIconSlot aria-hidden="true">{icon}</SecondaryIconSlot>}
              {title && (
                <Text
                  variant="P3-Medium-Comp"
                  style={{ flex: 1, minWidth: 0, color: titleColor }}
                >
                  {title}
                </Text>
              )}
              {onClose && (
                <SecondaryCloseButton
                  onClick={onClose}
                  type="button"
                  aria-label="Закрыть"
                  $inverted={inverted}
                >
                  <IconX />
                </SecondaryCloseButton>
              )}
            </SecondaryHeader>
          )}
          <Text variant="P4-Regular-Comp" style={{ color: bodyColor }}>
            {text}
            {linkText && <LinkText onClick={onLinkClick}> {linkText}</LinkText>}
          </Text>
        </SecondaryWrapper>
      );
    }

    // primary
    const hasAction = Boolean(actionText);
    const hasCancel = Boolean(cancelText);
    const hasClose = Boolean(onClose);

    return (
      <PrimaryWrapper role="note" {...rest}>
        <PrimaryContent>
          {title && (
            <Text
              variant="P2-Regular-Comp"
              style={{ fontWeight: 500, color: mts_text_primary }}
            >
              {title}
            </Text>
          )}
          <Text variant="P3-Regular-Comp" style={{ color: mts_text_secondary }}>
            {text}
          </Text>
        </PrimaryContent>
        {hasAction && (
          <PrimaryFooter>
            {hasCancel && (
              <Button variant="secondary" onClick={onCancel} style={{ flex: 1 }}>
                {cancelText}
              </Button>
            )}
            <Button variant="primary" onClick={onAction} style={{ flex: 1 }}>
              {actionText}
            </Button>
            {!hasCancel && hasClose && (
              <CloseIconButton type="button" onClick={onClose} aria-label="Закрыть">
                <IconX />
              </CloseIconButton>
            )}
          </PrimaryFooter>
        )}
      </PrimaryWrapper>
    );
  }
);

export default Banner;
