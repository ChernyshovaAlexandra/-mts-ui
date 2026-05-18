import React, { FC } from "react";
import { StyledBadge } from "./style";

const ICON_SIZES: Record<BadgeSize, number> = {
  xs: 12,
  s: 16,
  m: 16,
  l: 24,
};

export type BadgeSize = "xs" | "s" | "m" | "l";
export type BadgeVariant = "default" | "custom";

export interface BadgeProps {
  children: React.ReactNode;
  size?: BadgeSize;
  variant?: BadgeVariant;
  color?: string;
  textColor?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  style?: React.CSSProperties;
}

export const Badge: FC<BadgeProps> = ({
  children,
  size = "s",
  variant = "default",
  color,
  textColor,
  icon,
  iconPosition = "left",
  className,
  style,
}) => {
  const iconSize = ICON_SIZES[size];
  const sizedIcon =
    icon && React.isValidElement(icon)
      ? React.cloneElement(icon as React.ReactElement<{ width?: number; height?: number }>, {
          width: iconSize,
          height: iconSize,
        })
      : icon;

  return (
    <StyledBadge
      $size={size}
      $variant={variant}
      $color={color}
      $textColor={color ? (textColor ?? "#ffffff") : textColor}
      className={className}
      style={style}
    >
      {sizedIcon && iconPosition === "left" && sizedIcon}
      {children}
      {sizedIcon && iconPosition === "right" && sizedIcon}
    </StyledBadge>
  );
};

export default Badge;
