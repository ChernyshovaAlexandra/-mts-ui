import { memo, useMemo, forwardRef } from "react";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import "dayjs/locale/ru";

import {
  Wrapper,
  StyledLabel,
  InputWrapper,
  ErrorMessage,
} from "../Input/style";
import { StyledTimePicker } from "./style";
import IconTime from "../../../icons/IconTime/IconTime";

export type TimeInputProps = {
  inputId?: string;
  label?: string;
  errorMessage?: string | null;
  disabled?: boolean;
  required?: boolean;
  value: string | null;
  onChange?: (value: string | null) => void;
};

export const TimeInput = memo(
  forwardRef<any, TimeInputProps>(
    (
      {
        inputId,
        label,
        errorMessage,
        disabled,
        value = null,
        onChange,
        required,
      }: TimeInputProps,
      ref
    ) => {
      const timeValue = useMemo(
        () => (value ? dayjs(value, "HH:mm") : null),
        [value]
      );

      const errorId = inputId ? `${inputId}-error` : undefined;

      return (
        <Wrapper>
          {label && (
            <StyledLabel htmlFor={inputId} $invalidInput={!!errorMessage}>
              {label}
            </StyledLabel>
          )}
          <InputWrapper>
            <StyledTimePicker
              ref={ref}
              id={inputId}
              placeholder="чч:мм"
              value={timeValue}
              onChange={(val) => {
                const dayjsVal = val as Dayjs | null;
                onChange?.(dayjsVal ? dayjsVal.format("HH:mm") : null);
              }}
              suffixIcon={<IconTime />}
              format="HH:mm"
              disabled={disabled}
              required={required}
              aria-invalid={!!errorMessage}
              aria-describedby={errorMessage ? errorId : undefined}
            />
          </InputWrapper>
          {errorMessage && (
            <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>
          )}
        </Wrapper>
      );
    }
  )
);
