import { memo, useMemo } from "react";
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
  label?: string;
  errorMessage?: string | null;
  disabled?: boolean;
  required?: boolean;
  value: string | null;
  onChange?: (value: string | null) => void;
};

export const TimeInput = memo(
  ({
    label,
    errorMessage,
    disabled,
    value = null,
    onChange,
    required,
  }: TimeInputProps) => {
    const timeValue = useMemo(
      () => (value ? dayjs(value, "HH:mm") : null),
      [value]
    );

    return (
      <Wrapper>
        {label && (
          <StyledLabel $invalidInput={!!errorMessage}>{label}</StyledLabel>
        )}
        <InputWrapper>
          <StyledTimePicker
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
          />
        </InputWrapper>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Wrapper>
    );
  }
);
