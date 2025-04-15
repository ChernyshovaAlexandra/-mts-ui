import React, { FC, memo } from "react";
import { StyledContainer } from "./style";

export type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Container: FC<ContainerProps> = memo(({ children, style }) => {
  return <StyledContainer style={style}>{children}</StyledContainer>;
});

export default Container;