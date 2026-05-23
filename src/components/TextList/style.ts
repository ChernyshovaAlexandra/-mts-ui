import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import {
  mts_bg_lower,
  mts_brand_red,
  mts_radius_pill,
  mts_text_inverted,
  mts_text_primary,
  mts_text_tertiary,
} from "../../consts";
import "../../assets/fonts.css";
import type {
  TextListBulletColor,
  TextListNumberColor,
  TextListType,
  TextListView,
} from "./TextList";

const indent: Record<TextListView, number> = {
  desktop: 40,
  mobile: 36,
};

export const Root = styled.div<{ $type: TextListType; $view: TextListView }>`
  display: flex;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  gap: ${({ $type }) => ($type === "subtitle" ? 0 : 12)}px;
  ${({ $type, $view }) =>
    $type !== "title" &&
    css`
      padding-left: ${indent[$view]}px;
    `}
  ${visuallyImpairedMixin};
`;

const numberCircleColors: Record<
  TextListNumberColor,
  ReturnType<typeof css>
> = {
  default: css`
    background: ${mts_bg_lower};
    color: ${mts_text_primary};
  `,
  red: css`
    background: ${mts_brand_red};
    color: ${mts_text_inverted};
  `,
  dark: css`
    background: ${mts_text_primary};
    color: ${mts_text_inverted};
  `,
};

export const NumberCircle = styled.div<{
  $view: TextListView;
  $color: TextListNumberColor;
}>`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border-radius: ${mts_radius_pill};
  font-family: "MTS Compact", sans-serif;
  font-weight: 700;
  ${({ $color }) => numberCircleColors[$color]};
  ${({ $view }) =>
    $view === "desktop"
      ? css`
          width: 28px;
          height: 28px;
          font-size: 17px;
          line-height: 24px;
        `
      : css`
          width: 24px;
          height: 24px;
          font-size: 14px;
          line-height: 20px;
        `}
`;

const bulletColors: Record<TextListBulletColor, string> = {
  default: mts_text_primary,
  red: mts_brand_red,
  tertiary: mts_text_tertiary,
};

export const TitleBulletWrap = styled.div<{ $view: TextListView }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${({ $view }) =>
    $view === "desktop"
      ? css`
          width: 28px;
          height: 28px;
        `
      : css`
          width: 24px;
          height: 24px;
        `}
`;

export const TitleBullet = styled.span<{
  $view: TextListView;
  $color: TextListBulletColor;
}>`
  display: block;
  border-radius: 50%;
  background: ${({ $color }) => bulletColors[$color]};
  ${({ $view }) =>
    $view === "desktop"
      ? css`
          width: 8px;
          height: 8px;
        `
      : css`
          width: 6px;
          height: 6px;
        `}
`;

export const ChildBulletWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4px;
  min-width: 4px;
  height: 20px;
  flex-shrink: 0;
`;

export const ChildBullet = styled.span<{ $color: TextListBulletColor }>`
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ $color }) => bulletColors[$color]};
`;

export const TitleTextBox = styled.div<{ $view: TextListView }>`
  display: flex;
  align-items: center;
  min-width: 0;
  flex: 1 0 0;
  ${({ $view }) =>
    $view === "desktop" &&
    css`
      padding: 2px 0;
    `}
`;
