import React, { FC } from "react";
import { StyledLink } from "./style";

export interface LinkProps {
  url?: string;
  children: React.ReactNode | string;
  style?: React.CSSProperties;
  underlined?: boolean;
}

export const Link: FC<LinkProps> = ({ url, children, style, underlined }) => {
  return (
    <StyledLink underlined={underlined} href={url} style={style}>
      {children}
    </StyledLink>
  );
};
