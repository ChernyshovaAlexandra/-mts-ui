import { css } from "styled-components";
import type { StyledBtnProps } from "./style";
import { visuallyImpairedMixin } from "../../accessibility";
import { mts_accent_light_active } from "../../consts";

const sizes = {
  xs: { height: 24, radius: 8, padding: 4, font: 10, line: 12, icon: 16, x: 4, y: 2 },
  s: { height: 32, radius: 12, padding: 8, font: 10, line: 12, icon: 16, x: 4, y: 2 },
  m: { height: 44, radius: 16, padding: 10, font: 12, line: 16, icon: 24, x: 8, y: 4 },
  l: { height: 52, radius: 16, padding: 14, font: 12, line: 16, icon: 24, x: 8, y: 4 },
  xl: { height: 72, radius: 20, padding: 24, font: 14, line: 20, icon: 24, x: 8, y: 2 },
} as const;

const colors = (variant: string | undefined, dark: boolean) => {
  const primary = dark ? "#fafafa" : "#1d2023";
  const hover = dark ? "rgba(242,243,247,0.2)" : "rgba(188,195,208,0.25)";
  const secondary = dark ? "rgba(127,140,153,0.35)" : "#f2f3f7";
  switch (variant) {
    case "alternative": return { background: dark ? "#ffffff" : "#1d2023", text: dark ? "#1d2023" : "#fafafa", hover: dark ? "rgba(188,195,208,0.4)" : "rgba(242,243,247,0.12)", pressed: dark ? "rgba(188,195,208,0.4)" : "rgba(242,243,247,0.12)", blend: "normal" };
    case "tetriary": return { background: "#ffffff", text: "#1d2023", hover: "rgba(188,195,208,0.4)", pressed: "rgba(188,195,208,0.4)", blend: "multiply" };
    case "secondary": return { background: secondary, text: primary, hover, pressed: "rgba(188,195,208,0.4)", blend: "normal" };
    case "negative":
    case "menu-item": return { background: secondary, text: dark ? "#ffa080" : "#d8400c", hover, pressed: "rgba(188,195,208,0.4)", blend: "normal" };
    case "ghost": return { background: "transparent", text: primary, hover, pressed: hover, blend: "normal" };
    case "gray": return { background: "rgba(255,255,255,0.08)", text: "#ffffff", hover, pressed: hover, blend: "normal" };
    default: return { background: "#ff0032", text: "#ffffff", hover: "rgba(188,195,208,0.4)", pressed: "rgba(188,195,208,0.4)", blend: "normal" };
  }
};

export const designButtonStyles = css<StyledBtnProps>`
  ${({ $size, $variant, $colorTheme }) => {
    const size = sizes[$size as keyof typeof sizes] ?? sizes.l;
    const palette = colors($variant, $colorTheme === "dark");
    return css`
      --button-background: ${palette.background};
      --button-text: ${palette.text};
      --button-hover: ${palette.hover};
      --button-pressed: ${palette.pressed};
      --button-disabled-background: ${$colorTheme === "dark" ? "rgba(127,140,153,0.35)" : "rgba(188,195,208,0.5)"};
      --button-disabled-text: ${$colorTheme === "dark" ? "#626c77" : "#969fa8"};
      min-height: ${size.height}px;
      min-width: ${size.height}px;
      padding: ${size.padding}px;
      border-radius: ${size.radius}px;
      font-size: ${size.font}px;
      line-height: ${size.line}px;
      .btn-label { padding: ${size.y}px ${size.x}px; }
      .btn-icon > svg { width: ${size.icon}px; height: ${size.icon}px; }
      &::before { mix-blend-mode: ${palette.blend}; }
    `;
  }}
  position: relative;
  isolation: isolate;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin: 0;
  border: 0;
  background: var(--button-background);
  color: var(--button-text);
  font-family: "MTS Wide", sans-serif;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
  width: ${({ $width }) => $width === "auto" ? "auto" : $width === "max" ? "100%" : $width || "100%"};
  max-width: ${({ $maxWidth }) => typeof $maxWidth === "number" ? `${$maxWidth}px` : $maxWidth || "none"};
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  ${({ $variant }) => $variant === "gray" && css`
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  `}
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: -1;
    background: transparent;
  }
  &:not(:disabled):not([aria-disabled="true"]):hover::before { background: var(--button-hover); }
  &:not(:disabled):not([aria-disabled="true"]):active {
    transform: scale(0.98);
    &::before { background: var(--button-pressed); }
  }
  &:not(:disabled):not([aria-disabled="true"]):focus-visible {
    outline: 1px solid ${mts_accent_light_active};
    outline-offset: 0;
  }
  &:disabled:not([aria-busy="true"]), &[aria-disabled="true"]:not([aria-busy="true"]) {
    background: var(--button-disabled-background);
    color: var(--button-disabled-text);
    opacity: 0.6;
    cursor: not-allowed;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  &[aria-busy="true"] {
    cursor: wait;
    > .btn-label, > .btn-icon { visibility: hidden; }
  }
  .btn-loading { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
  .btn-label {
    display: block;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .btn-icon { display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
  ${visuallyImpairedMixin};
  ${({ $wrap }) => $wrap && css`
    white-space: normal;
    .btn-label { white-space: normal; overflow-wrap: anywhere; text-overflow: clip; }
  `}
  ${({ $responsiveWidth }) => $responsiveWidth && css`
    @media (min-width: ${$responsiveWidth.breakpoint}px) {
      width: ${$responsiveWidth.width || "fit-content"};
      max-width: ${typeof $responsiveWidth.maxWidth === "number" ? `min(${$responsiveWidth.maxWidth}px, 100%)` : $responsiveWidth.maxWidth || "100%"};
      ${$responsiveWidth.wrap && css`
        white-space: normal;
        .btn-label { white-space: normal; overflow-wrap: anywhere; text-overflow: clip; }
      `}
    }
  `}
`;
