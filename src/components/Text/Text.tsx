import React from "react";
import { StyledText } from "./style";

export interface TextProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Text: React.FC<TextProps> = ({ children, style }) => {
  return <StyledText style={style}>{children}</StyledText>;
};
