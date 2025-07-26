import React from "react";
import { StyledText } from "./style";

export type TextVariant =
  | "P1-Regular-Comp"
  | "P2-Regular-Comp"
  | "P3-Bold-Comp"
  | "P3-Medium-Comp"
  | "P3-Regular-Comp"
  | "P4-Bold-Upp-Wide"
  | "P4-Regular-Comp"
  | "P4-Medium-Comp"
  | "P4-Regular-Text";

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "children"> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  variant?: TextVariant;
  className?: string;
  role?: React.AriaRole;
  "aria-label"?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant,
  style,
  className,
  role,
  as = "p",
  ...rest
}) => {
  return (
    <StyledText
      as={as}
      variant={variant}
      style={style}
      className={className}
      role={role}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export default Text;
