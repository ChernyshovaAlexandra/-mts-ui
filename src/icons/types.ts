import React from "react";

export type IconSize = 16 | 24 | 25 | 28 | 32 | 44;
export type IconVariant = "outline" | "fill";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: IconSize;
  variant?: IconVariant;
}
