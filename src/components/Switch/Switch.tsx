import React, { FC } from "react";
import { Spinner } from "../Spinner/Spinner";
import { IconLock } from "../../icons/IconLock/IconLock";
import { Track, Knob, LockWrap, SpinnerWrap } from "./style";

export type SwitchSize = "s" | "m" | "l";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  loading?: boolean;
  size?: SwitchSize;
  className?: string;
  style?: React.CSSProperties;
}

const SPINNER_SIZE: Record<SwitchSize, string> = {
  s: "0.75rem",
  m: "1rem",
  l: "1.25rem",
};

export const Switch: FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  loading = false,
  size = "m",
  className,
  style,
}) => {
  const handleClick = () => {
    if (disabled || loading) return;
    onChange?.(!checked);
  };

  const showLock = disabled && size === "l";
  const showSpinner = loading;

  return (
    <Track
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); handleClick(); } }}
      $checked={checked}
      $disabled={disabled}
      $loading={loading}
      $size={size}
      className={className}
      style={style}
    >
      {!showSpinner && (
        <Knob $checked={checked} $size={size}>
          {showLock && (
            <LockWrap>
              <IconLock width={16} height={16} />
            </LockWrap>
          )}
        </Knob>
      )}
      {showSpinner && (
        <SpinnerWrap $checked={checked} $size={size}>
          <Spinner size={SPINNER_SIZE[size]} color="#ffffff" />
        </SpinnerWrap>
      )}
    </Track>
  );
};

export default Switch;
