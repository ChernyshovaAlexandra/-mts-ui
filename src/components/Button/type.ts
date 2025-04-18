import React from "react";

export type ButtonVariant = "primary" | "secondary" | "gray" | "ghost" | "icon";

export interface BaseButtonProps {
  content?: string;
  variant: ButtonVariant;
  tooltip?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode; // слева от текста
  width?: "max" | "auto" | string;
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
