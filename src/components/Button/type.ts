import React from "react";

export type ButtonVariant =
  | "primary"
  | "alternative"
  | "secondary"
  | "tetriary"
  | "gray"
  | "ghost"
  | "icon"
  | "negative"
  | "menu-item";

export type ButtonSize = "xs" | "s" | "m" | "l" | "xl";

export interface BaseButtonProps {
  content?: React.ReactNode;
  variant: ButtonVariant;
  size?: ButtonSize;
  tooltip?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconRight?: React.ReactNode;
  width?: "max" | "auto" | string;
  loading?: boolean;
}

// Кнопка <button>
export interface ButtonElementProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "content">,
    BaseButtonProps {
  btn_type?: "button";
  buttonType?: "submit" | "button" | "reset";
}

// Ссылка <a>
export interface LinkElementProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "content">,
    BaseButtonProps {
  btn_type?: "link";
  link: string;
  "data-tip"?: string;
}

export type ButtonProps = ButtonElementProps | LinkElementProps;
