import React, { FC } from "react";
import { StyledLink, LinkText, LinkVariant, LinkTheme } from "./style";
import { Link as RouterLink } from "react-router-dom";
import { IconOut } from "../../icons/IconOut/IconOut";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url?: string;
  to?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  underlined?: boolean;
  variant?: LinkVariant;
  theme?: LinkTheme;
  icon?: React.ReactNode;
  type?: "menuItem" | "link";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const Link: FC<LinkProps> = ({
  url,
  to,
  children,
  style,
  underlined,
  variant = "default",
  theme,
  icon,
  type = "link",
  onClick,
  target,
  rel,
  ...rest
}) => {
  const resolvedTarget = variant === "external" ? "_blank" : target;
  const resolvedRel =
    resolvedTarget === "_blank" ? rel || "noopener noreferrer" : rel;

  const content = (
    <>
      {variant === "icon-left" && icon}
      <LinkText $variant={variant} $underlined={underlined}>
        {children}
      </LinkText>
      {variant === "icon-right" && icon}
      {variant === "external" && <IconOut width={16} height={16} />}
    </>
  );

  if (to) {
    return (
      <RouterLink to={to} style={style} onClick={onClick} {...rest}>
        {content}
      </RouterLink>
    );
  }

  return (
    <StyledLink
      $type={type}
      $theme={theme}
      $variant={variant}
      $underlined={underlined}
      href={url}
      style={style}
      onClick={onClick}
      target={resolvedTarget}
      rel={resolvedRel}
      {...rest}
    >
      {content}
    </StyledLink>
  );
};

export default Link;
