import React, { FC, memo } from "react";
import { SnackbarWrapper } from "./style";

export interface SnackBarProps {
  message: string | React.ReactNode;
  type: "success" | "error";
  style?: React.CSSProperties;
}

export const Snackbar: FC<SnackBarProps> = memo(({ message, type, style }) => {
  if (!message) return null;

  return (
    <div style={{ width: "100%", position: "relative", ...style }}>
      <SnackbarWrapper $type={type}>{message}</SnackbarWrapper>
    </div>
  );
});
