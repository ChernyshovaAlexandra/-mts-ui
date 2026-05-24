import React, { FC, memo, useEffect } from "react";
import {
  ToastRoot,
  ToastBody,
  ToastIconSlot,
  ToastAvatarSlot,
  ToastMessage,
  type ToastPosition,
  type ToastVariant,
} from "./style";
import Text from "../Text/Text";
import IconCheckCircle from "../../icons/IconCheckCircle/IconCheckCircle";
import IconInfoCircle from "../../icons/IconInfoCircle/IconInfoCircle";
import IconWarningCircle from "../../icons/IconWarningCircle/IconWarningCircle";
import IconCrossCircle from "../../icons/IconCrossCircle/IconCrossCircle";
import {
  mts_accent_light_positive,
  mts_accent_light_active,
  mts_accent_light_warning,
  mts_accent_light_negative,
  mts_text_inverted,
  mts_text_primary,
} from "../../consts";

export type ToastIcon = "success" | "info" | "warning" | "error";
export type { ToastPosition, ToastVariant };

export interface ToastProps {
  message: React.ReactNode;
  title?: string;
  icon?: ToastIcon;
  avatar?: React.ReactNode;
  position?: ToastPosition;
  variant?: ToastVariant;
  autoHideDuration?: number;
  onClose?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

const ICON_MAP = {
  success: { Component: IconCheckCircle, color: mts_accent_light_positive },
  info: { Component: IconInfoCircle, color: mts_accent_light_active },
  warning: { Component: IconWarningCircle, color: mts_accent_light_warning },
  error: { Component: IconCrossCircle, color: mts_accent_light_negative },
} as const;

export const Toast: FC<ToastProps> = memo(
  ({
    message,
    title,
    icon,
    avatar,
    position = "bottom-right",
    variant = "dark",
    autoHideDuration = 4000,
    onClose,
    style,
    className,
  }) => {
    const textColor = variant === "light" ? mts_text_primary : mts_text_inverted;
    useEffect(() => {
      if (!message || !onClose || !autoHideDuration) return;
      const timer = setTimeout(() => onClose(), autoHideDuration);
      return () => clearTimeout(timer);
    }, [message, autoHideDuration, onClose]);

    if (!message) return null;

    const hasAvatar = Boolean(avatar);
    const hasTitle = Boolean(title);
    const rounded = hasTitle || hasAvatar ? "lg" : "sm";

    const iconEntry = icon ? ICON_MAP[icon] : null;

    return (
      <ToastRoot
        $position={position}
        role="status"
        aria-live={icon === "error" ? "assertive" : "polite"}
        aria-atomic="true"
        style={style}
        className={className}
      >
        <ToastBody $rounded={rounded} $variant={variant}>
          {hasAvatar ? (
            <ToastAvatarSlot aria-hidden="true">{avatar}</ToastAvatarSlot>
          ) : iconEntry ? (
            <ToastIconSlot aria-hidden="true" style={{ color: iconEntry.color }}>
              <iconEntry.Component size={24} variant="fill" />
            </ToastIconSlot>
          ) : null}
          <ToastMessage>
            {hasTitle && (
              <Text variant="P3-Bold-Comp" style={{ color: textColor }}>
                {title}
              </Text>
            )}
            <Text variant="P3-Regular-Comp" style={{ color: textColor }}>
              {message}
            </Text>
          </ToastMessage>
        </ToastBody>
      </ToastRoot>
    );
  }
);

export default Toast;
