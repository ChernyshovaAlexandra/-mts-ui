import React from "react";
import { StyledTag } from "./style";
import Text from "../Text/Text";

export interface TagProps {
  title: string;
  /**
   * Вариант оформления:
   * - primary  – базовый, красный фон
   * - gray     – серая плашка
   * - pill     – белая «таблетка» с серым текстом (используется для номера вопроса)
   */
  variant?: "primary" | "gray" | "pill";
  ariaLabel?: string;
  role?: string;
}

export const Tag: React.FC<TagProps> = ({
  title,
  variant = "primary",
  role = "status",
  ariaLabel,
}) => {
  return (
    <StyledTag role={role} aria-label={ariaLabel ?? title} $variant={variant}>
      <span>{title}</span>
    </StyledTag>
  );
};

export default Tag;
