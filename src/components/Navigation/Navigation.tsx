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
  onLogin?: any;
  style?: React.CSSProperties;
  menuStyle?: React.CSSProperties;
  customBtn?: React.ReactNode;
}

export const Navigation: FC<NavigationProps> = memo(
  ({ links, withLogin, onLogin, style, menuStyle, customBtn }) => {
    return (
      <NavWrapper style={style}>
        <Container>
          <Flex align="center" gap="1rem" justify="space-between">
            <a href="/">
              <Logo />
            </a>

            {links ? (
              <MenuItems style={menuStyle}>
                {links.map((item, id) => (
                  <MenuItem key={id}>
                    <Link url={item.url}>{item.title}</Link>
                  </MenuItem>
                ))}
              </MenuItems>
            ) : (
              <></>
            )}
            {withLogin ? (
              <>
                {customBtn ? (
                  customBtn
                ) : (
                  <Button
                    btn_type="button"
                    variant="primary"
                    width="auto"
                    style={{
                      padding: "5px 10px",
                      height: "35px",
                      fontSize: "10px",
                    }}
                    onClick={onLogin}
                  >
                    Войти
                  </Button>
                )}
              </>
            ) : (
              <></>
            )}
          </Flex>
        </Container>
      </NavWrapper>
    );
  }
);

export default Navigation;
