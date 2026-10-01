import React, { FC, memo } from "react";
import { createPortal } from "react-dom";
import { Wrapper } from "./style";
import { Button } from "../Button/Button";
import Text from "../Text/Text";
import { mts_text_primary } from "../../consts";

export interface CookieBannerProps {
  bottomOffset?: number | string;
  style?: React.CSSProperties;
  className?: string;
  text?: string;
  acceptText?: string;
  onAccept: () => void;
}

export const CookieBanner: FC<CookieBannerProps> = memo(
  ({
    text = "Мы используем куки, чтобы сайт был для тебя удобнее",
    acceptText = "Хорошо",
    onAccept,
    bottomOffset = 0,
    style,
    className,
  }) => {
    return createPortal(
      <Wrapper $bottomOffset={typeof bottomOffset === "number" ? `${bottomOffset}px` : bottomOffset} style={style} className={className} role="region" aria-label="Уведомление об использовании cookies">
        <Text
          variant="P4-Regular-Comp"
          style={{ flex: 1, color: mts_text_primary }}
        >
          {text}
        </Text>
        <Button
          btn_type="button"
          variant="primary"
          width="auto"
          onClick={onAccept}
        >
          {acceptText}
        </Button>
      </Wrapper>,
      document.body
    );
  }
);

export default CookieBanner;
