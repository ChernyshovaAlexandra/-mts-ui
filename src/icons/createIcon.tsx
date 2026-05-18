import React from "react";
import { IconProps, IconSize, IconVariant } from "./types";

type SizeVariantKey = `${IconSize}-${IconVariant}`;
type IconPaths = Partial<Record<SizeVariantKey, React.ReactNode>>;

export function createIcon(paths: IconPaths, displayName?: string) {
  const Icon = ({
    size = 24,
    variant = "outline",
    "aria-label": ariaLabel,
    role,
    ...props
  }: IconProps) => {
    const key = `${size}-${variant}` as SizeVariantKey;
    const content =
      paths[key] ??
      paths[`${size}-outline` as SizeVariantKey] ??
      paths[`${size}-fill` as SizeVariantKey] ??
      paths["24-outline"] ??
      paths["24-fill"] ??
      Object.values(paths)[0];

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        role={ariaLabel ? (role ?? "img") : (role ?? "presentation")}
        aria-label={ariaLabel}
        aria-hidden={ariaLabel ? undefined : true}
        focusable="false"
        {...props}
      >
        {content}
      </svg>
    );
  };

  if (displayName) Icon.displayName = displayName;

  return Icon;
}
