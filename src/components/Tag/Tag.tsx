import React from "react";
import { StyledTag } from "./style";
import Text from "../Text/Text";
import { mts_greyscale_300 } from "../../consts";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  variant?: "primary" | "gray" | "pill";
  bgColor?: string;
  color?: string;
}

export const Tag: React.FC<TagProps> = ({
  title,
  variant = "primary",
  bgColor = mts_greyscale_300,
  color = "#fff",
  ...divProps
}) => {
  return (
    <StyledTag
      $bgColor={bgColor}
      $color={color}
      {...divProps}
      $variant={variant}
    >
      <span>{title}</span>
    </StyledTag>
  );
};

export default Tag;
