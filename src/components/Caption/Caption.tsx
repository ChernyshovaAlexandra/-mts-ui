import React from "react";
import { StyledCaption } from "./style";

export type CaptionVariant =
  | "C1-Bold-Comp"
  | "C1-Medium-Upp-Comp"
  | "C1-Medium-Comp"
  | "C1-Regular-Comp";

export interface CaptionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  variant?: CaptionVariant;
  className?: string;
  role?: React.AriaRole;
  "aria-label"?: string;
  as?: keyof JSX.IntrinsicElements;
  ref?: React.Ref<HTMLElement>;
}

export const Caption: React.FC<CaptionProps> = ({
  children,
  variant,
  style,
  className,
  role,
  as = "span",
  ref,
  ...rest
}) => {
  return (
    <StyledCaption
      as={as}
      ref={ref}
      variant={variant}
      style={style}
      className={className}
      role={role}
      {...rest}
    >
      {children}
    </StyledCaption>
  );
};

export default Caption;
