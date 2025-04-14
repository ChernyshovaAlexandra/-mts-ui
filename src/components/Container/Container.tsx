import { FC, memo, ReactElement } from "react";
import { StyledContainer } from "./style";

export type ContainerProps = {
  children: ReactElement;
  style?: React.CSSProperties;
};

export const Container: FC<ContainerProps> = memo(({ children, style }) => {
  return <StyledContainer style={style}>{children}</StyledContainer>;
});
