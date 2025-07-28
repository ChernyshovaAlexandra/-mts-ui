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
        type, // HTML type — пароль или нет
        value, // строка значения
        ...otherProps
      }: InputProps,
      ref
    ) => {
      const [error, setError] = useState<string | null>(errorMessage);
      const [showPassword, setShowPassword] = useState(false);

      const generatedId = useId();
      const inputId = id || `input-${generatedId}`;
      const errorId = `${inputId}-error`;

      const inputRef = useRef<HTMLInputElement>(null);
      useImperativeHandle(ref, () => inputRef.current!);

      useEffect(() => {
        setError(errorMessage);
      }, [errorMessage]);

      const isPassword = type === "password";
      // если это пароль и пользователь нажал «глаз», переключаем в text
      const effectiveType =
        isPassword && showPassword ? "text" : type || "text";

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (error) setError(null);
        onChange?.(e);
      };

      const handleClear = () => {
        if (disabled) return;
        inputRef.current?.focus();
        const ev = {
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange?.(ev);
        if (validatePattern && error) setError(null);
      };

      // Показываем иконку только если есть какое-то value
      const hasValue = typeof value === "string" && value.length > 0;

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
                  width={18}
                  height={18}
                  style={{ position: "relative", top: 3, marginLeft: 3 }}
                />
              )}
            </StyledLabel>
          )}

          <InputWrapper>
            <StyledInput
              id={inputId}
              type={effectiveType}
              value={value}
              onChange={handleChange}
              onBlur={onBlur}
              aria-invalid={!!error}
              aria-describedby={error ? errorId : undefined}
              aria-label={label ? undefined : "Текстовое поле"}
              disabled={disabled}
              ref={inputRef}
              {...otherProps}
            />

            {/* иконка ошибки */}
            {error && (
              <IconSlot style={{ color: mts_accent_light_negative }}>
                <IconError width={24} height={24} />
              </IconSlot>
            )}

            {/* иконка Info, когда disabled и без ошибки */}
            {disabled && !error && (
              <IconSlot style={{ color: mts_text_secondary }}>
                <IconInfo width={24} height={24} />
              </IconSlot>
            )}

            {/* если есть value и мы не disabled и нет ошибки */}
            {hasValue &&
              !disabled &&
              !error &&
              // Если это пароль — показываем глаз, иначе — крестик
              (isPassword ? (
                <IconSlot
                  role="button"
                  aria-label={
                    showPassword ? "Скрыть пароль" : "Показать пароль"
                  }
                  onClick={() => setShowPassword((v) => !v)}
                  style={{ color: mts_text_secondary, cursor: "pointer" }}
                >
                  {showPassword ? (
                    <IconEyeOff width={24} height={24} />
                  ) : (
                    <IconEye width={24} height={24} />
                  )}
                </IconSlot>
              ) : (
                <IconSlot
                  role="button"
                  aria-label="Очистить поле"
                  onClick={handleClear}
                  style={{ color: mts_text_secondary, cursor: "pointer" }}
                >
                  <IconClear width={24} height={24} />
                </IconSlot>
              ))}
          </InputWrapper>

          {error && <ErrorMessage id={errorId}>{error}</ErrorMessage>}
        </Wrapper>
      );
    }
  )
);

export default Input;
