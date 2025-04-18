import { memo, InputHTMLAttributes, useState } from "react";
import {
  StyledInput,
  ErrorMessage,
  Wrapper,
  StyledLabel,
  InputWrapper,
  IconSlot,
} from "./style";
import IconError from "../../../icons/IconError/IconError";
import IconSuccess from "../../../icons/IconSuccess/IconSuccess";
import IconInfo from "../../../icons/IconInfo/IconInfo";
import IconClear from "../../../icons/IconClear/IconClear";
import {
  mts_accent_light_negative,
  mts_text_primary,
  mts_text_secondary,
} from "../../../consts";
import IconLock from "../../../icons/IconLock/IconLock";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
  validatePattern?: RegExp;
  label?: string;
};

export const Input = memo(
  ({
    errorMessage,
    validatePattern,
    onBlur,
    onChange,
    label,
    id,
    disabled,
    ...props
  }: InputProps) => {
    const [error, setError] = useState<string | null>(null);
    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`;

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (validatePattern && !validatePattern.test(value)) {
        setError(errorMessage || "Неверный формат");
      } else {
        setError(null);
      }

      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setError(null);
      onChange?.(e);
    };

    return (
      <Wrapper>
        {label && (
          <StyledLabel $invalidInput={!!error} htmlFor={inputId}>
            {label}
            {disabled ? (
              <IconLock
                width="18"
                height="18"
                style={{ position: "relative", top: "3px", marginLeft: "3px" }}
              />
            ) : (
              <></>
            )}
          </StyledLabel>
        )}
        <InputWrapper>
          <StyledInput
            {...props}
            id={inputId}
            onBlur={handleBlur}
            onChange={handleChange}
            aria-invalid={!!error}
            disabled={disabled}
          />
          {error && (
            <IconSlot style={{ color: mts_accent_light_negative }}>
              <IconError width="24" height="24" />
            </IconSlot>
          )}
          {/* {success && !error && (
            <IconSlot>
              <IconSuccess />
            </IconSlot>
          )} */}
          {disabled && !error && (
            <IconSlot style={{ color: mts_text_secondary }}>
              <IconInfo width="32" height="32" />
            </IconSlot>
          )}
          {props.value && !error && !disabled && (
            <IconSlot style={{ color: mts_text_secondary }}>
              <IconClear width="32" height="32" />
            </IconSlot>
          )}
        </InputWrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Wrapper>
    );
  }
);

export default Input;
