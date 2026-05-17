import React, { FC, HTMLAttributes } from "react";
import { StyledCard, type CardVariant } from "./style";

export type { CardVariant };

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children?: React.ReactNode;
}

export const Card: FC<CardProps> = ({
  variant = "default",
  children,
  onClick,
  ...rest
}) => {
  const interactive = Boolean(onClick);

  return (
    <StyledCard
      $variant={variant}
      $interactive={interactive}
      onClick={onClick}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      {...rest}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
