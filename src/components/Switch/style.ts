import styled, { css } from "styled-components";
import { mts_accent_light_positive } from "../../consts";
import { visuallyImpairedMixin } from "../../accessibility";
import type { SwitchSize } from "./Switch";

// ─── Size tokens ─────────────────────────────────────────────────────────────

const TRACK_W: Record<SwitchSize, number> = { s: 28, m: 42, l: 56 };
const TRACK_H: Record<SwitchSize, number> = { s: 16, m: 24, l: 32 };
const KNOB_S:  Record<SwitchSize, number> = { s: 12, m: 18, l: 24 };
const KNOB_PRESSED_W: Record<SwitchSize, number> = { s: 16, m: 24, l: 32 };
const GAP:     Record<SwitchSize, number> = { s: 2,  m: 3,  l: 4  };

const INACTIVE = "rgba(188, 195, 208, 0.5)";
const KNOB_SHADOW_SM = "0 0 16px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.08)";
const KNOB_SHADOW_L  = "0 0 8px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.08)";
const FOCUS_COLOR = "#007CFF";

// ─── Track ───────────────────────────────────────────────────────────────────

export const Track = styled.div<{
  $checked: boolean;
  $disabled: boolean;
  $loading: boolean;
  $size: SwitchSize;
}>`
  position: relative;
  width: ${({ $size }) => TRACK_W[$size]}px;
  height: ${({ $size }) => TRACK_H[$size]}px;
  border-radius: 100px;
  background: ${({ $checked }) => ($checked ? mts_accent_light_positive : INACTIVE)};
  transition: background 0.2s ease;
  cursor: ${({ $disabled, $loading }) => ($disabled || $loading ? "not-allowed" : "pointer")};
  box-sizing: border-box;
  flex-shrink: 0;

  /* Disabled for s/m: opacity */
  ${({ $disabled, $size }) =>
    $disabled && $size !== "l" &&
    css`opacity: 0.6;`}

  /* Loading overlay */
  ${({ $loading }) =>
    $loading &&
    css`
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 100px;
        background: rgba(188, 195, 208, 0.4);
      }
    `}

  /* Focus ring */
  &:focus-visible {
    outline: 2px solid ${FOCUS_COLOR};
    outline-offset: 2px;
  }

  /* Press: stretch knob */
  &:active:not([aria-disabled="true"]) {
    > div:first-child {
      width: ${({ $size, $checked }) => {
        const pw = KNOB_PRESSED_W[$size];
        const g = GAP[$size];
        const tw = TRACK_W[$size];
        const ks = KNOB_S[$size];
        // when checked (right side), anchor right, so left shifts left
        if ($checked) {
          return `${tw - pw - g}px; left: ${tw - pw - g}px`;
        }
        return `${pw}px`;
      }};
    }
  }

  ${visuallyImpairedMixin};
`;

// ─── Knob ─────────────────────────────────────────────────────────────────────

export const Knob = styled.div<{ $checked: boolean; $size: SwitchSize }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${({ $size }) => KNOB_S[$size]}px;
  height: ${({ $size }) => KNOB_S[$size]}px;
  border-radius: 100px;
  background: white;
  box-shadow: ${({ $size }) => ($size === "l" ? KNOB_SHADOW_L : KNOB_SHADOW_SM)};
  transition: left 0.2s ease, width 0.15s ease;
  z-index: 1;

  left: ${({ $checked, $size }) => {
    const g = GAP[$size];
    const tw = TRACK_W[$size];
    const ks = KNOB_S[$size];
    return $checked ? `${tw - ks - g}px` : `${g}px`;
  }};

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

// ─── Lock icon wrapper ─────────────────────────────────────────────────────────

export const LockWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9EA3A9;
`;

// ─── Spinner wrapper (loading state) ─────────────────────────────────────────

export const SpinnerWrap = styled.div<{ $checked: boolean; $size: SwitchSize }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${({ $size }) => KNOB_S[$size]}px;
  height: ${({ $size }) => KNOB_S[$size]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  left: ${({ $checked, $size }) => {
    const g = GAP[$size];
    const tw = TRACK_W[$size];
    const ks = KNOB_S[$size];
    return $checked ? `${tw - ks - g}px` : `${g}px`;
  }};
`;
