import React, { FC, memo } from "react";
import { Container } from "../Container/Container";
import { Flex } from "antd";
import { Logo } from "../Logo/Logo";
import { MenuItems, MenuItem, NavWrapper } from "./style";
import { Button } from "../Button/Button";
import { Link } from "../Link/Link";

export interface NavigationProps {
  links?: Array<{
    title: string;
    url: string;
  }>;
  withLogin?: boolean;
  onLogin?: () => void;
  style?: React.CSSProperties;
  menuStyle?: React.CSSProperties;
  customBtn?: React.ReactNode;
}

export const Navigation: FC<NavigationProps> = memo(
  ({ links, withLogin, onLogin, style, menuStyle, customBtn }) => {
    return (
      <NavWrapper role="navigation" aria-label="Главная навигация" style={style}>
        <Container>
          <Flex align="center" gap="1rem" justify="space-between">
            <a href="/" aria-label="Перейти на главную" title="Перейти на главную">
              <Logo />
            </a>

            {links?.length ? (
              <MenuItems as="ul" role="list" style={menuStyle}>
                {links.map((item, id) => (
                  <MenuItem as="li" role="listitem" key={id}>
                    <Link url={item.url}>{item.title}</Link>
                  </MenuItem>
                ))}
              </MenuItems>
            ) : null}

            {withLogin &&
              (customBtn ? (
                customBtn
              ) : (
                <Button
                  btn_type="button"
                  variant="primary"
                  width="auto"
                  aria-label="Войти в личный кабинет"
                  style={{
                    padding: "5px 10px",
                    height: "35px",
                    fontSize: "10px",
                  }}
                  onClick={onLogin}
                >
                  Войти
                </Button>
              ))}
          </Flex>
        </Container>
      </NavWrapper>
    );
  }
);

export default Navigation;
