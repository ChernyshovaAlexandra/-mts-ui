import { FC, ReactElement } from "react";
import { StyledHeader } from "./style";

export interface HeaderProps {
  children?: string | ReactElement;
  style?: React.CSSProperties;
  color?: "red" | "white" | "black";
}

export const Header: FC<HeaderProps> = ({ children, style, color }) => {
  return (
    <StyledHeader color={color} style={style}>
      {children}
    </StyledHeader>
  );
};
