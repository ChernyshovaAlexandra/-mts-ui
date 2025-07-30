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
  target,
  rel,
  ...rest
}) => {
  const isExternal = url?.startsWith("http");

  if (to) {
    return (
      <RouterLink
        to={to}
        style={style}
        onClick={onClick}
        className={underlined ? "underlined" : ""}
        aria-current="page"
        {...rest}
      >
        {children}
      </RouterLink>
    );
  }

  return (
    <StyledLink
      type={type}
      underlined={underlined}
      href={url}
      style={style}
      onClick={onClick}
      target={target}
      rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
      {...rest}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
