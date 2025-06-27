import { memo, useMemo, useId } from "react";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import customParseFormat from "dayjs/plugin/customParseFormat";
import locale from "antd/es/date-picker/locale/ru_RU";

import {
  Wrapper,
  StyledLabel,
  InputWrapper,
  ErrorMessage,
} from "../Input/style";
import { DatePickerPopupStyles, StyledDatePicker } from "./style";
import IconDate from "../../../icons/IconDate/IconDate";

dayjs.extend(customParseFormat);

export type DateInputProps = {
  label?: string;
  errorMessage?: string | null;
  disabled?: boolean;
  required?: boolean;
  value: string | null;
  onChange?: (value: string | null) => void;
};

export const DateInput = memo(
  ({
    label,
    errorMessage,
    disabled,
    value = null,
    onChange,
    required,
  }: DateInputProps) => {
    const dateValue = useMemo(
      () => (value ? dayjs(value, "DD.MM.YYYY") : null),
      [value]
    );

    const inputId = useId();
    const errorId = `${inputId}-error`;

    return (
      <Wrapper
        role="group"
        aria-labelledby={inputId}
        aria-describedby={errorMessage ? errorId : undefined}
      >
        <DatePickerPopupStyles />

        {label && (
          <StyledLabel $invalidInput={!!errorMessage} htmlFor={inputId}>
            {label}
            {required ? " *" : ""}
          </StyledLabel>
        )}

        <InputWrapper>
          <StyledDatePicker
            id={inputId}
            locale={locale}
            popupClassName="mts-datepicker-popup"
            value={dateValue}
            onChange={(val) => {
              const dayjsVal = val as Dayjs | null;
              onChange?.(dayjsVal ? dayjsVal.format("DD.MM.YYYY") : null);
            }}
            format="DD.MM.YYYY"
            placeholder="дд.мм.гггг"
            required={required}
            disabled={disabled}
            suffixIcon={<IconDate />}
            aria-required={required}
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
);
