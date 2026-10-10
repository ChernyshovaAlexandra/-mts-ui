import React, { FC, HTMLAttributes } from "react";
import { StyledCard, type CardVariant, type CardSize, type CardTheme, type CardRadius, type CardBackgroundContext } from "./style";

export type { CardVariant, CardSize, CardTheme, CardRadius, CardBackgroundContext };

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  size?: CardSize;
  theme?: CardTheme;
  radius?: CardRadius;
  padding?: number;
  backgroundContext?: CardBackgroundContext;
  blur?: boolean;
  children?: React.ReactNode;
}

export const Card: FC<CardProps> = ({
  variant = "default",
  size = "s",
  theme = "light",
  radius = 32,
  padding = 24,
  backgroundContext = "secondary",
  blur = true,
  children,
  onClick,
  ...rest
}) => {
  const interactive = Boolean(onClick);
  const mediumPadding = Number.isFinite(padding) ? Math.max(24, padding) : 24;

  return (
    <StyledCard
      $variant={variant}
      $size={size}
      $colorTheme={theme}
      $radius={radius}
      $padding={mediumPadding}
      $backgroundContext={backgroundContext}
      $blur={blur}
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
