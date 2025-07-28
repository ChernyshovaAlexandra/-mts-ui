import {
  memo,
  InputHTMLAttributes,
  useState,
  useEffect,
  useRef,
  useId,
  forwardRef,
  useImperativeHandle,
} from "react";
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
import IconLock from "../../../icons/IconLock/IconLock";
import IconEye from "../../../icons/IconEye";
import IconEyeOff from "../../../icons/IconEyeOff/IconEyeOff";
import { mts_accent_light_negative, mts_text_secondary } from "../../../consts";


export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string | null;
  validatePattern?: RegExp;
  label?: string;
};

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    (
      {
        errorMessage = null,
        validatePattern,
        onBlur,
        onChange,
        label,
        id,
        disabled,
        type,
        ...props
      }: InputProps,
      ref
    ) => {
      const [error, setError] = useState<string | null>(errorMessage || null);
      const [showPassword, setShowPassword] = useState(false);

      const generatedId = useId();
      const inputId = id || `input-${generatedId}`;
      const errorId = `${inputId}-error`;

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (error) setError(null);
        onChange?.(e);
      };

      const inputRef = useRef<HTMLInputElement>(null);
      useImperativeHandle(ref, () => inputRef.current!, []);

      const handleClear = () => {
        if (disabled) return;
        inputRef.current?.focus();

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

      const isPassword = type === "password";
      const effectiveType =
        isPassword && showPassword ? "text" : (type ?? "text");

      return (
        <Wrapper
          role="group"
          aria-labelledby={label ? `${inputId}-label` : undefined}
          aria-describedby={error ? errorId : undefined}
        >
          {label && (
            <StyledLabel
              $invalidInput={!!error}
              htmlFor={inputId}
              id={`${inputId}-label`}
            >
              {label}
              {disabled && (
                <IconLock
                  width="18"
                  height="18"
                  style={{
                    position: "relative",
                    top: "3px",
                    marginLeft: "3px",
                  }}
                />
              )}
            </StyledLabel>
          )}

          <InputWrapper>
            <StyledInput
              {...props}
              id={inputId}
              type={effectiveType}
              onChange={handleChange}
              aria-invalid={!!error}
              aria-describedby={error ? errorId : undefined}
              aria-label={label ? undefined : "Текстовое поле"}
              disabled={disabled}
              ref={inputRef}
            />

            {/* Ошибка */}
            {error && (
              <IconSlot style={{ color: mts_accent_light_negative }}>
                <IconError width="24" height="24" />
              </IconSlot>
            )}

            {/* Инфо, если disabled */}
            {disabled && !error && (
              <IconSlot style={{ color: mts_text_secondary }}>
                <IconInfo width="24" height="24" />
              </IconSlot>
            )}

            {/* Очистка */}
            {props.value && !error && !disabled && !isPassword && (
              <IconSlot
                role="button"
                aria-label="Очистить поле"
                onClick={handleClear}
                style={{ color: mts_text_secondary, cursor: "pointer" }}
              >
                <IconClear width={24} height={24} />
              </IconSlot>
            )}

            {/* Переключатель видимости пароля */}
            {isPassword && !disabled && (
              <IconSlot
                role="button"
                aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
                onClick={() => setShowPassword((prev) => !prev)}
                style={{ color: mts_text_secondary, cursor: "pointer" }}
              >
                {showPassword ? (
                  <IconEyeOff width={24} height={24} />
                ) : (
                  <IconEye width={24} height={24} />
                )}
              </IconSlot>
            )}
          </InputWrapper>

          {error && <ErrorMessage id={errorId}>{error}</ErrorMessage>}
        </Wrapper>
      );
    }
  )
);

export default Input;
