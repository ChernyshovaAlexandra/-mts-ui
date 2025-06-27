import React, { FC, memo, useEffect } from "react";
import { SnackbarWrapper } from "./style";
import { IconError, IconSuccess } from "../../icons";
import { Flex } from "antd";
import {
  mts_accent_light_positive,
  mts_brand_red_dark,
} from "../../consts";

export interface SnackBarProps {
  message: string | React.ReactNode;
  type?: "success" | "error";
  style?: React.CSSProperties;
  autoHideDuration?: number;
  onClose?: () => void;
}

export const Snackbar: FC<SnackBarProps> = memo(
  ({ message, type, style, autoHideDuration = 2000, onClose }) => {
    useEffect(() => {
      if (!message || !onClose) return;

      const timer = setTimeout(() => {
        onClose();
      }, autoHideDuration);

      return () => clearTimeout(timer);
    }, [message, autoHideDuration, onClose]);

    if (!message) return null;

    return (
      <div
        style={{ width: "100%", position: "relative", ...style }}
        role="status"
        aria-live={type === "error" ? "assertive" : "polite"}
        aria-atomic="true"
      >
        <SnackbarWrapper>
          <Flex align="center" gap="10px">
            {type === "success" ? (
              <IconSuccess
                width="32"
                height="32"
                style={{ color: mts_accent_light_positive }}
                aria-hidden="true"
              />
            ) : type === "error" ? (
              <IconError
                width="32"
                height="32"
                style={{ color: mts_brand_red_dark }}
                aria-hidden="true"
              />
            ) : null}
            <div style={{ flex: 1 }}>{message}</div>
          </Flex>
        </SnackbarWrapper>
      </div>
    );
  }
);

export default Snackbar;
