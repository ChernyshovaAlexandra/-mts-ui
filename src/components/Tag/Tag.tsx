import React from "react";
import { StyledTag } from "./style";
import Text from "../Text/Text";

export interface TagProps {
  title: string;
  variant?: string;
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
    <StyledTag role={role} aria-label={ariaLabel ?? title}>
      <Text variant="P4-Bold-Upp-Wide">{title}</Text>
    </StyledTag>
  );
};

export default Tag;
