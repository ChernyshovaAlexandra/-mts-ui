import React, { FC } from "react";
import { StyledLink } from "./style";
import { Link as RouterLink } from "react-router-dom";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url?: string;
  to?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  underlined?: boolean;
  type?: "menuItem" | "link";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const Link: FC<LinkProps> = ({
  url,
  to,
  children,
  style,
  underlined,
  type = "link",
  onClick,
}) => {
  // Если задано свойство "to", используем react-router-dom для навигации
  if (to) {
    return (
      <RouterLink
        to={to}
        style={style}
        onClick={onClick}
        // Передаём класс или пропсы для стилизации, если требуется
        className={underlined ? "underlined" : ""}
      >
        {children}
      </RouterLink>
    );
  }

  // Иначе используем обычный якорный элемент
  return (
    <StyledLink
      type={type}
      underlined={underlined}
      href={url}
      style={style}
      onClick={onClick}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
