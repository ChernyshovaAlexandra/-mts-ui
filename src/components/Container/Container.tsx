// Container.tsx
import React, { FC, memo } from "react";
import { StyledContainer } from "./style";

export type ContainerProps = {
  children: React.ReactNode;
  wide?: boolean;
  style?: React.CSSProperties;
};

export const Container: FC<ContainerProps> = memo(
  ({ children, wide = false, style }) => (
    <StyledContainer wide={wide} style={style}>
      {children}
    </StyledContainer>
  )
);

export default Container;
