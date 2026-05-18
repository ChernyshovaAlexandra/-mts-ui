import React, { FC } from "react";
import { IconDoneS } from "../../icons/IconDoneS/IconDoneS";
import { IconFailedS } from "../../icons/IconFailedS/IconFailedS";
import { Divider } from "../Divider/Divider";
import {
  StepWrapper,
  StepWithDividerWrap,
  StepTopRow,
  StepBottomRow,
  StepCircleRoot,
  StepCircle,
  StepBadge,
  StepTextBlock,
  StepLabelText,
  StepDescText,
  COLOR_BG,
  DONE_BG,
  FAILED_BG,
  DISABLED_BG,
  BADGE_CIRCLE_BG,
  BADGE_CIRCLE_COLOR,
  ACTIVE_COLOR,
  DISABLED_COLOR,
  ICON_SIZE,
  BADGE_SIZE,
} from "./style";

// ─── Types ────────────────────────────────────────────────────────────────────

export type StepVariant = "icon" | "number" | "number-badge";

export type StepStatus =
  | "active" // colored circle (current step)
  | "success" // green — alias for "done"
  | "error" // red — alias for "failed"
  | "default" // gray — not yet reached (alias for "disabled")
  | "done" // green circle with checkmark
  | "failed" // red circle with X
  | "disabled" // gray circle
  | "disabled-done" // gray circle + green badge
  | "disabled-failed"; // gray circle + red badge

export type StepColor = "primary" | "secondary";
export type StepSize = "s" | "m";
export type StepOrientation = "horizontal" | "vertical";

export interface StepProps {
  variant: StepVariant;
  value?: number;
  status?: StepStatus;
  color?: StepColor;
  size?: StepSize;
  orientation?: StepOrientation;
  label?: string;
  description?: string;
  withDivider?: boolean;
  dividerLength?: number;
  className?: string;
  style?: React.CSSProperties;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function normalizeStatus(s?: StepStatus): StepStatus | undefined {
  if (s === "success") return "done";
  if (s === "error") return "failed";
  if (s === "default") return "disabled";
  if (s === "active") return undefined;
  return s;
}

const isDisabledStatus = (status?: StepStatus) =>
  status === "disabled" ||
  status === "disabled-done" ||
  status === "disabled-failed" ||
  status === "default";

function getCircleBg(
  variant: StepVariant,
  status?: StepStatus,
  color: StepColor = "primary"
): string {
  if (isDisabledStatus(status)) return DISABLED_BG;
  const s = normalizeStatus(status);
  if (variant === "icon") {
    if (s === "done") return DONE_BG;
    if (s === "failed") return FAILED_BG;
    return DISABLED_BG;
  }
  if (variant === "number-badge") {
    // Статус done/failed виден через бейдж, сам круг нейтральный
    if (s === "done" || s === "failed") return BADGE_CIRCLE_BG;
    return COLOR_BG[color];
  }
  if (s === "done") return DONE_BG;
  if (s === "failed") return FAILED_BG;
  return COLOR_BG[color];
}

function getCircleColor(variant: StepVariant, status?: StepStatus): string {
  if (isDisabledStatus(status)) return DISABLED_COLOR;
  const s = normalizeStatus(status);
  if (variant === "icon" && !s) return DISABLED_COLOR;
  if (variant === "number-badge" && (s === "done" || s === "failed"))
    return BADGE_CIRCLE_COLOR;
  return ACTIVE_COLOR;
}

function getBadgeBg(status?: StepStatus): string {
  const s = normalizeStatus(status);
  if (s === "done" || status === "disabled-done") return DONE_BG;
  if (s === "failed" || status === "disabled-failed") return FAILED_BG;
  return DISABLED_BG;
}

function showBadge(variant: StepVariant, status?: StepStatus): boolean {
  if (variant !== "number-badge") return false;
  const s = normalizeStatus(status);
  return (
    s === "done" ||
    s === "failed" ||
    status === "disabled-done" ||
    status === "disabled-failed"
  );
}

// ─── Circle sub-component ─────────────────────────────────────────────────────

const StepBubble: FC<{
  variant: StepVariant;
  status?: StepStatus;
  color: StepColor;
  size: StepSize;
  value?: number;
}> = ({ variant, status, color, size, value }) => {
  const iconSize = ICON_SIZE[size];
  const badgeSize = BADGE_SIZE[size];
  const s = normalizeStatus(status);

  return (
    <StepCircleRoot $size={size}>
      <StepCircle
        $bg={getCircleBg(variant, status, color)}
        $color={getCircleColor(variant, status)}
        $size={size}
      >
        {variant === "icon" && s === "done" && (
          <IconDoneS width={iconSize} height={iconSize} />
        )}
        {variant === "icon" && s === "failed" && (
          <IconFailedS width={iconSize} height={iconSize} />
        )}
        {(variant === "number" || variant === "number-badge") &&
          value !== undefined &&
          value}
      </StepCircle>

      {showBadge(variant, status) && (
        <StepBadge $bg={getBadgeBg(status)} $color={ACTIVE_COLOR} $size={size}>
          {s === "done" || status === "disabled-done" ? (
            <IconDoneS width={badgeSize} height={badgeSize} />
          ) : (
            <IconFailedS width={badgeSize} height={badgeSize} />
          )}
        </StepBadge>
      )}
    </StepCircleRoot>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────

export const Step: FC<StepProps> = ({
  variant,
  value,
  status,
  color: colorProp,
  size: sizeProp,
  orientation: orientationProp,
  label,
  description,
  withDivider = false,
  dividerLength = 100,
  className,
  style,
}) => {
  const orientation = orientationProp ?? "horizontal";
  const size        = sizeProp        ?? "m";
  const color       = colorProp       ?? "primary";

  const bubble = (
    <StepBubble variant={variant} status={status} color={color} size={size} value={value} />
  );

  // Горизонтальный с дивайдером
  if (orientation === "horizontal" && withDivider) {
    return (
      <StepWithDividerWrap className={className} style={style}>
        <StepTopRow>
          {bubble}
          <Divider
            orientation="horizontal"
            padding={12}
            style={{ width: dividerLength, flexShrink: 0 }}
          />
        </StepTopRow>
        {(label || description) && (
          <StepBottomRow>
            {label       && <StepLabelText>{label}</StepLabelText>}
            {description && <StepDescText>{description}</StepDescText>}
          </StepBottomRow>
        )}
      </StepWithDividerWrap>
    );
  }

  // Без текста
  if (!label && !description) {
    return React.cloneElement(bubble, { className, style } as React.HTMLAttributes<HTMLElement>);
  }

  // С текстом (horizontal с дивайдером — min-width 204px; vertical — текст справа)
  return (
    <StepWrapper $orientation={orientation} className={className} style={style}>
      {bubble}
      <StepTextBlock $orientation={orientation} $withDivider={withDivider}>
        {label       && <StepLabelText>{label}</StepLabelText>}
        {description && <StepDescText>{description}</StepDescText>}
      </StepTextBlock>
    </StepWrapper>
  );
};

export default Step;
