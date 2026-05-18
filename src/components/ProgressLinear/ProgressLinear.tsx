import React, { FC } from "react";
import { Root, Track, Fill, InnerText, StatusRow, StatusText, Label } from "./style";

const CheckedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M4.68597 4.68597C3.3731 5.99884 3.27575 7.30684 3.08105 9.92282C3.03058 10.601 3 11.3005 3 12C3 12.6995 3.03058 13.399 3.08105 14.0772C3.27575 16.6932 3.3731 18.0012 4.68597 19.314C5.99884 20.6269 7.30684 20.7243 9.92282 20.9189C10.601 20.9694 11.3005 21 12 21C12.6995 21 13.399 20.9694 14.0772 20.9189C16.6932 20.7243 18.0012 20.6269 19.314 19.314C20.6269 18.0012 20.7243 16.6932 20.9189 14.0772C20.9694 13.399 21 12.6995 21 12C21 11.3005 20.9694 10.601 20.9189 9.92282C20.7243 7.30684 20.6269 5.99884 19.314 4.68597C18.0012 3.3731 16.6932 3.27575 14.0772 3.08105C13.399 3.03058 12.6995 3 12 3C11.3005 3 10.601 3.03058 9.92282 3.08105C7.30684 3.27575 5.99884 3.3731 4.68597 4.68597ZM16.207 10.2071C16.5975 9.81658 16.5975 9.18342 16.207 8.79289C15.8165 8.40237 15.1833 8.40237 14.7928 8.79289L10.9999 12.5858L9.707 11.2929C9.31648 10.9024 8.68331 10.9024 8.29279 11.2929C7.90226 11.6834 7.90226 12.3166 8.29279 12.7071L10.2928 14.7071C10.6833 15.0976 11.3165 15.0976 11.707 14.7071L16.207 10.2071Z" fill="#26CD58" />
  </svg>
);

const CancelledIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M4.68597 4.68743C3.3731 6.00031 3.27575 7.3083 3.08105 9.92429C3.03058 10.6024 3 11.3019 3 12.0015C3 12.701 3.03058 13.4005 3.08105 14.0786C3.27575 16.6946 3.3731 18.0026 4.68597 19.3155C5.99884 20.6284 7.30684 20.7257 9.92282 20.9204C10.601 20.9709 11.3005 21.0015 12 21.0015C12.6995 21.0015 13.399 20.9709 14.0772 20.9204C16.6932 20.7257 18.0012 20.6284 19.314 19.3155C20.6269 18.0026 20.7243 16.6946 20.9189 14.0786C20.9694 13.4005 21 12.701 21 12.0015C21 11.3019 20.9694 10.6024 20.9189 9.92429C20.7243 7.3083 20.6269 6.00031 19.314 4.68743C18.0012 3.37456 16.6932 3.27721 14.0772 3.08252C13.399 3.03205 12.6995 3.00146 12 3.00146C11.3005 3.00146 10.601 3.03205 9.92282 3.08252C7.30684 3.27721 5.99884 3.37456 4.68597 4.68743ZM15.2071 8.79241C15.5976 9.18293 15.5976 9.81609 15.2071 10.2066L13.414 11.9997L15.2071 13.7927C15.5976 14.1833 15.5976 14.8164 15.2071 15.207C14.8166 15.5975 14.1834 15.5975 13.7929 15.207L11.9998 13.4139L10.2071 15.2066C9.81658 15.5971 9.18342 15.5971 8.79289 15.2066C8.40237 14.8161 8.40237 14.1829 8.79289 13.7924L10.5856 11.9997L8.7929 10.207C8.40237 9.81643 8.40237 9.18327 8.7929 8.79274C9.18342 8.40222 9.81658 8.40222 10.2071 8.79274L11.9998 10.5855L13.7929 8.79241C14.1834 8.40188 14.8166 8.40188 15.2071 8.79241Z" fill="#F95721" />
  </svg>
);

export type ProgressLinearType = "progress" | "paused" | "indeterminate" | "success" | "error";
export type ProgressLinearSize = "s" | "m" | "l";

export interface ProgressLinearProps {
  type?: ProgressLinearType;
  size?: ProgressLinearSize;
  progress?: number;
  label?: string;
  pausedText?: string;
  successText?: string;
  errorText?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProgressLinear: FC<ProgressLinearProps> = ({
  type = "progress",
  size = "m",
  progress = 0,
  label,
  pausedText = "Загрузка приостановлена",
  successText = "Завершено",
  errorText = "Не удалось загрузить файл",
  className,
  style,
}) => {
  const isTerminal = type === "success" || type === "error";
  const isLarge = size === "l";
  const fillProgress = isTerminal ? 100 : type === "indeterminate" ? 100 : Math.min(100, Math.max(0, progress));
  const resolvedLabel = label ?? (type === "paused" ? pausedText : undefined);

  return (
    <Root className={className} style={style}>
      <Track $size={size}>
        <Fill $type={type} $progress={fillProgress} />
        {isLarge && type === "progress" && (
          <InnerText $align="left">{progress}%</InnerText>
        )}
        {isLarge && type === "success" && (
          <InnerText $align="right">{successText}</InnerText>
        )}
        {isLarge && type === "error" && (
          <InnerText $align="right">Ошибка</InnerText>
        )}
      </Track>
      {type === "success" && !isLarge && (
        <StatusRow $type="success">
          <StatusText>{successText}</StatusText>
          <CheckedIcon />
        </StatusRow>
      )}
      {type === "error" && (
        <StatusRow $type="error">
          <StatusText>{errorText}</StatusText>
          <CancelledIcon />
        </StatusRow>
      )}
      {!isTerminal && type !== "indeterminate" && resolvedLabel && <Label>{resolvedLabel}</Label>}
    </Root>
  );
};

export default ProgressLinear;
