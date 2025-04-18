import React from "react";
import { css } from "styled-components";
import { StyledHeader } from "./style";
export type HeaderVariant = "H1-Wide" | "H2-Wide" | "H3-Wide" | "H4-Wide";

export interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "children"> {
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant?: HeaderVariant;
}

export const Header: React.FC<HeaderProps> = ({ children, style, variant }) => {
  return (
    <StyledHeader
      as={
        variant === "H2-Wide"
          ? "h2"
          : variant === "H3-Wide"
            ? "h3"
            : variant === "H4-Wide"
              ? "h4"
              : "h1"
      }
      variant={variant}
      style={style}
    >
      {children}
    </StyledHeader>
  );
};

export default Header;
