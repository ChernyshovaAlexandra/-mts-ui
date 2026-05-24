import React from "react";
import { IconProps, IconSize, IconVariant } from "./types";

type SizeVariantKey = `${IconSize}-${IconVariant}`;
type IconPaths = Partial<Record<SizeVariantKey, React.ReactNode>>;

function naturalSizeOf(key: string): number {
  const match = /^(\d+)-/.exec(key);
  return match ? parseInt(match[1], 10) : 24;
}

export function createIcon(paths: IconPaths, displayName?: string) {
  const Icon = ({
    size = 24,
    variant = "outline",
    "aria-label": ariaLabel,
    role,
    ...props
  }: IconProps) => {
    const candidates: SizeVariantKey[] = [
      `${size}-${variant}` as SizeVariantKey,
      `${size}-outline` as SizeVariantKey,
      `${size}-fill` as SizeVariantKey,
      "24-outline",
      "24-fill",
    ];

    let resolvedKey: string | null = null;
    for (const candidate of candidates) {
      if (paths[candidate] !== undefined) {
        resolvedKey = candidate;
        break;
      }
    }
    if (!resolvedKey) {
      const fallbackKey = Object.keys(paths)[0];
      if (fallbackKey) resolvedKey = fallbackKey;
    }

    const content = resolvedKey
      ? paths[resolvedKey as SizeVariantKey]
      : undefined;
    const naturalSize = resolvedKey ? naturalSizeOf(resolvedKey) : size;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={`0 0 ${naturalSize} ${naturalSize}`}
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
