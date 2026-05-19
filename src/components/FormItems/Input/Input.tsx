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
import IconError from "../../../icons/IconAttention/IconAttention";
import IconInfo from "../../../icons/IconInfo/IconInfo";
import IconClear from "../../../icons/IconClear/IconClear";
import IconLock from "../../../icons/IconLock/IconLock";
import IconEye from "../../../icons/IconEye";
import IconEyeOff from "../../../icons/IconEyeOff/IconEyeOff";
import { mts_accent_light_negative, mts_text_secondary } from "../../../consts";
import { isEmailAllowed, isValidEmail } from "../../../utils/emailValidation";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string | null;
  validatePattern?: RegExp;
  validate?: (value: string) => string | null;
  corporative?: boolean;
  label?: string;
};

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    (
      {
        errorMessage = null,
        validatePattern,
        validate,
        corporative,
        onBlur,
        onChange,
        label,
        id,
        disabled,
        type, // original type
        value, // current value
        ...rest
      },
      ref
    ) => {
      const [error, setError] = useState<string | null>(errorMessage);
      const [showPw, setShowPw] = useState(false);

      const genId = useId();
      const inputId = id || `input-${genId}`;
      const errorId = `${inputId}-error`;

      const inputRef = useRef<HTMLInputElement>(null);
      useImperativeHandle(ref, () => inputRef.current!);

      useEffect(() => setError(errorMessage), [errorMessage]);

      /* ――― helpers ――― */
      const isPwdField = (type ?? "").toLowerCase() === "password";
      const isEmailField = type === "email" || corporative;
      const effectiveType = isPwdField && showPw ? "text" : type || "text";
      const hasValue = typeof value === "string" && value.length > 0;

      const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

      useEffect(() => () => { if (debounceRef.current) clearTimeout(debounceRef.current); }, []);

      const validateEmail = (val: string) => {
        if (type === "email" && !isValidEmail(val)) return "Введите корректный email";
        if (corporative && !isEmailAllowed(val)) return "Введите корпоративный email";
        return null;
      };

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (error) setError(null);
        onChange?.(e);

        if (isEmailField) {
          if (debounceRef.current) clearTimeout(debounceRef.current);
          const val = e.target.value;
          if (val) {
            debounceRef.current = setTimeout(() => setError(validateEmail(val)), 1500);
          }
        }
      };

      const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        const val = e.target.value;
        if (val) {
          const emailError = validateEmail(val);
          if (emailError) {
            setError(emailError);
          } else if (validate) {
            setError(validate(val));
          }
        }
        onBlur?.(e);
      };

      const clear = () => {
        if (disabled) return;
        inputRef.current?.focus();
        onChange?.({
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>);
        if (validatePattern && error) setError(null);
      };

      /* ――― JSX ――― */
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
              onBlur={handleBlur}
              aria-invalid={!!error}
              aria-describedby={error ? errorId : undefined}
              aria-label={label ? undefined : "Текстовое поле"}
              disabled={disabled}
              ref={inputRef}
              {...rest}
            />

            {error && (
              <IconSlot style={{ color: mts_accent_light_negative }}>
                <IconError width={24} height={24} />
              </IconSlot>
            )}

            {disabled && !error && (
              <IconSlot style={{ color: mts_text_secondary }}>
                <IconInfo width={24} height={24} />
              </IconSlot>
            )}

            {/* единственный блок с иконкой справа */}
            {hasValue &&
              !disabled &&
              !error &&
              (isPwdField ? (
                <IconSlot
                  role="button"
                  aria-label={showPw ? "Скрыть пароль" : "Показать пароль"}
                  onClick={() => setShowPw((v) => !v)}
                  style={{ color: mts_text_secondary, cursor: "pointer" }}
                >
                  {showPw ? (
                    <IconEyeOff width={24} height={24} />
                  ) : (
                    <IconEye width={24} height={24} />
                  )}
                </IconSlot>
              ) : (
                <IconSlot
                  role="button"
                  aria-label="Очистить поле"
                  onClick={clear}
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
