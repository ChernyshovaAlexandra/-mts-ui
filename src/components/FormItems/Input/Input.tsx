import { memo, InputHTMLAttributes, useState, useEffect, useRef } from "react";
import {
  StyledInput,
  ErrorMessage,
  Wrapper,
  StyledLabel,
  InputWrapper,
  IconSlot,
} from "./style";
import IconError from "../../../icons/IconError/IconError";
import IconInfo from "../../../icons/IconInfo/IconInfo";
import IconClear from "../../../icons/IconClear/IconClear";
import { mts_accent_light_negative, mts_text_secondary } from "../../../consts";
import IconLock from "../../../icons/IconLock/IconLock";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string | null;
  validatePattern?: RegExp;
  label?: string;
};

export const Input = memo(
  ({
    errorMessage = null,
    validatePattern,
    onBlur,
    onChange,
    label,
    id,
    disabled,
    ...props
  }: InputProps) => {
    const [error, setError] = useState<string | null>(errorMessage || null);
    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (error) setError(null); // чистим только если была ошибка
      onChange?.(e);
    };
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClear = () => {
      if (disabled) return;
      const nativeInput = inputRef.current;
      if (nativeInput) nativeInput.focus();

      const event = {
        target: { value: "" } as EventTarget & HTMLInputElement,
      } as React.ChangeEvent<HTMLInputElement>;

      onChange?.(event);
      if (validatePattern && error) setError(null);
    };

    useEffect(() => {
      if (errorMessage !== error) {
        setError(errorMessage || null);
      }
    }, [errorMessage, error]);

    return (
      <Wrapper>
        {label && (
          <StyledLabel $invalidInput={!!error} htmlFor={inputId}>
            {label}
            {disabled && (
              <IconLock
                width="18"
                height="18"
                style={{ position: "relative", top: "3px", marginLeft: "3px" }}
              />
            )}
          </StyledLabel>
        )}
        <InputWrapper>
          <StyledInput
            {...props}
            id={inputId}
            onChange={handleChange}
            aria-invalid={!!error}
            disabled={disabled}
            ref={inputRef}
          />
          {error && (
            <IconSlot style={{ color: mts_accent_light_negative }}>
              <IconError width="24" height="24" />
            </IconSlot>
          )}

          {disabled && !error && (
            <IconSlot style={{ color: mts_text_secondary }}>
              <IconInfo width="24" height="24" />
            </IconSlot>
          )}
          {props.value && !error && !disabled && (
            <IconSlot
              role="button"
              aria-label="Очистить поле"
              onClick={handleClear}
              style={{ color: mts_text_secondary, cursor: "pointer" }}
            >
              <IconClear width={24} height={24} />
            </IconSlot>
          )}
        </InputWrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Wrapper>
    );
  }
);

export default Input;
