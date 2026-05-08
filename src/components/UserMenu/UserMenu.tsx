import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { Text } from "../Text/Text";
import { mts_text_secondary } from "../../consts";
import {
  StyledUserMenu,
  StyledHeader,
  StyledTextBlock,
  StyledActions,
} from "./style";

export interface UserMenuProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  name: string;
  role?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  avatar?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const UserMenu: React.FC<UserMenuProps> = ({
  name,
  role,
  avatarSrc,
  avatarAlt,
  avatar,
  children,
  className,
  style,
  ...rest
}) => {
  return (
    <StyledUserMenu className={className} style={style} {...rest}>
      <StyledHeader>
        {avatar ?? <Avatar src={avatarSrc} alt={avatarAlt ?? name} />}
        <StyledTextBlock>
          <Text variant="P3-Medium-Comp" as="span">
            {name}
          </Text>
          {role && (
            <Text
              variant="P4-Regular-Comp"
              as="span"
              style={{ color: mts_text_secondary }}
            >
              {role}
            </Text>
          )}
        </StyledTextBlock>
      </StyledHeader>
      {children && <StyledActions>{children}</StyledActions>}
    </StyledUserMenu>
  );
};

export default UserMenu;
