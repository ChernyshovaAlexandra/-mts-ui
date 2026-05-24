import React, { FC } from "react";
import { Header } from "../Header/Header";
import { Text } from "../Text/Text";
import {
  Root,
  NumberCircle,
  TitleBulletWrap,
  TitleBullet,
  ChildBulletWrap,
  ChildBullet,
  TitleTextBox,
} from "./style";

export type TextListType = "title" | "subtitle" | "child" | "paragraph";
export type TextListView = "desktop" | "mobile";
export type TextListMarker = "number" | "bullet";
export type TextListNumberColor = "default" | "red" | "dark";
export type TextListBulletColor = "default" | "red" | "tertiary";

export interface TextListProps {
  type?: TextListType;
  view?: TextListView;
  text?: React.ReactNode;
  number?: React.ReactNode;
  marker?: TextListMarker;
  numberColor?: TextListNumberColor;
  bulletColor?: TextListBulletColor;
  leftSlot?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const bodyStyle: React.CSSProperties = {
  flex: "1 0 0",
  minWidth: 0,
  wordBreak: "break-word",
};

export const TextList: FC<TextListProps> = ({
  type = "title",
  view = "desktop",
  text = "Text",
  number = 1,
  marker = "number",
  numberColor = "default",
  bulletColor = "default",
  leftSlot,
  className,
  style,
}) => {
  if (type === "title" || type === "paragraph") {
    const defaultMarker =
      marker === "bullet" ? (
        <TitleBulletWrap $view={view}>
          <TitleBullet $view={view} $color={bulletColor} />
        </TitleBulletWrap>
      ) : (
        <NumberCircle $view={view} $color={numberColor}>
          {number}
        </NumberCircle>
      );

    return (
      <Root $type={type} $view={view} className={className} style={style}>
        {leftSlot ?? defaultMarker}
        <TitleTextBox $view={view}>
          {type === "title" ? (
            view === "desktop" ? (
              <Header variant="H4-Comp" as="p" style={bodyStyle}>
                {text}
              </Header>
            ) : (
              <Text variant="P3-Medium-Comp" style={bodyStyle}>
                {text}
              </Text>
            )
          ) : (
            <Text
              variant={view === "desktop" ? "P3-Regular-Comp" : "P4-Regular-Comp"}
              style={bodyStyle}
            >
              {text}
            </Text>
          )}
        </TitleTextBox>
      </Root>
    );
  }

  if (type === "child") {
    return (
      <Root $type={type} $view={view} className={className} style={style}>
        <ChildBulletWrap>
          <ChildBullet $color={bulletColor} />
        </ChildBulletWrap>
        <Text
          variant={view === "desktop" ? "P3-Regular-Comp" : "P4-Regular-Comp"}
          style={bodyStyle}
        >
          {text}
        </Text>
      </Root>
    );
  }

  return (
    <Root $type={type} $view={view} className={className} style={style}>
      <Text
        variant={view === "desktop" ? "P3-Regular-Comp" : "P4-Regular-Comp"}
        style={bodyStyle}
      >
        {text}
      </Text>
    </Root>
  );
};

export default TextList;
