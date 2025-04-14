import { FC, memo, ReactElement } from "react";
import { SnackbarWrapper } from "./style";

export interface SnackBarProps {
  message: string | ReactElement;
  type: "success" | "error";
}

export const Snackbar: FC<SnackBarProps> = memo(({ message, type }) => {
  if (!message) return null;

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <SnackbarWrapper $type={type}>{message}</SnackbarWrapper>
    </div>
  );
});
