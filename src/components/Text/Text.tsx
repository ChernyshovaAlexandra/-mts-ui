import React from "react";
import { StyledText } from "./style";

export interface TextProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant?: "compact" | "wide" | "text";
}

export const Text: React.FC<TextProps> = ({ children, style, variant }) => {
  return (
    <StyledText variant={variant} style={style}>
      {children}
    </StyledText>
  );
};

export default Text;
