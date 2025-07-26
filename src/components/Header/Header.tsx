import React from "react";
import { StyledHeader } from "./style";

export type HeaderVariant = "H1-Wide" | "H2-Wide" | "H3-Wide" | "H4-Wide";

export interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "children"> {
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant?: HeaderVariant;
  as?: keyof JSX.IntrinsicElements;
  "aria-label"?: string;
}

export const Header: React.FC<HeaderProps> = ({
  children,
  style,
  variant,
  as,
  ...rest
}) => {
  const defaultTag =
    variant === "H2-Wide"
      ? "h2"
      : variant === "H3-Wide"
        ? "h3"
        : variant === "H4-Wide"
          ? "h4"
          : "h1";

  const HeadingTag = as || defaultTag;

  return (
    <StyledHeader as={HeadingTag} variant={variant} style={style} {...rest}>
      {children}
    </StyledHeader>
  );
};

export default Header;
