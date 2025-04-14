import React from "react";

export interface BaseButtonProps {
  content?: string;
  variant: "primary" | "secondary";
  tooltip?: string;
  handleClick?: (arg?: any) => void;
  style?: React.CSSProperties;
  disabled?: boolean;
  children?: React.ReactNode;
  width?: "max" | "auto" | string;
}

export interface ButtonElementProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "content">,
    BaseButtonProps {
  btn_type: "button";
  buttonType?: "submit" | "button" | "reset";
}

// Пропсы для ссылки (<a>)
export interface LinkElementProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "content">,
    BaseButtonProps {
  btn_type: "link";
  link: string;
  "data-tip"?: string; // Добавляем data-tip как необязательное свойство
}

// Общий тип для Button
export type ButtonProps = ButtonElementProps | LinkElementProps;
