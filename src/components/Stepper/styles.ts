import styled, { css } from "styled-components";
import type { StepStatus } from "./Stepper";

const COLORS = {
  active: "#1B1D20",
  disabled: "rgba(27, 29, 32, 0.12)",
  success: "#26CD58",
  error: "#F95721",
};

const mapStatusToColor = (status: StepStatus): string => {
  switch (status) {
    case "current":
    case "active":
      return COLORS.active;

    case "not_available":
    case "disabled":
      return COLORS.disabled;

    case "answered_true":
    case "success":
      return COLORS.success;

    case "answered_false":
    case "error":
      return COLORS.error;

    default:
      return COLORS.disabled;
  }
};

/* ---------- layout ---------- */

export const Container = styled.div`
  display: flex;
  align-items: center;
  --gap: clamp(8px, 2.4vw, 16px);
  --divider-w: clamp(16px, 6vw, 60px);
  --size: clamp(20px, 5vw, 32px);

  display: flex;
  align-items: center;
  gap: var(--gap);

  /* мобильный: скролл + снап по кружкам */
  overflow-x: auto;
  padding: 0 4px;
  scroll-snap-type: x mandatory;

  /* прячем скроллбар */
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    /* десктоп: растягиваем разделители, без скролла */
    overflow: visible;
    scroll-snap-type: none;
  }
`;

/* ---------- circle ---------- */

interface CircleProps {
  $status: StepStatus;
}

export const Circle = styled.div<CircleProps>`
  --size: 24px;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  flex-shrink: 0;
  font:
    700 20px / var(--size) "Inter",
    sans-serif;
  text-align: center;
  color: #fff;
  padding: 4px;

  svg {
    path {
      stroke-width: 4px;
    }
  }
  p {
    line-height: 1.4;
  }

  ${({ $status }) => css`
    background: ${mapStatusToColor($status)};
    ${["disabled", "not_available"].includes($status) &&
    css`
      color: rgba(0, 0, 0, 0.3);
    `}
    ${$status === "active" &&
    css`
      p {
        color: #fff;
      }
    `}
  `}
`;

/* ---------- divider ---------- */

export const Divider = styled.span`
  height: 2px;
  background: rgba(188, 195, 208, 0.5);

  flex: 0 0 var(--divider-w);

  margin: 0;

  @media (min-width: 768px) {
    flex: 1 1 auto;
    max-width: 120px; /* чтобы не были слишком длинными на очень широких экранах */
  }
`;
