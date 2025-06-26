import { memo, useMemo } from "react";
import { DatePicker } from "antd";
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
  IconSlot,
} from "../Input/style";
import { DatePickerPopupStyles, StyledDatePicker } from "./style";
import IconDate from "../../../icons/IconDate/IconDate";

dayjs.extend(customParseFormat);

export type DateInputProps = {
  label?: string;
  errorMessage?: string | null;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  onChange?: (value: string | null) => void;
};

export const DateInput = memo(
  ({ label, errorMessage, disabled, value, onChange, required }: DateInputProps) => {
    const dateValue = useMemo(
      () => (value ? dayjs(value, "DD.MM.YYYY") : null),
      [value]
    );

    return (
      <Wrapper>
        <DatePickerPopupStyles />
        {label && (
          <StyledLabel $invalidInput={!!errorMessage}>{label}</StyledLabel>
        )}

        <InputWrapper>
          <StyledDatePicker
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
            aria-invalid={!!errorMessage}
          />
        </InputWrapper>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Wrapper>
    );
  }
);
