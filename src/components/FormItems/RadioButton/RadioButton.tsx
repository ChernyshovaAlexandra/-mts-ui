import React, { memo, InputHTMLAttributes, useId, forwardRef } from "react";
import { Wrapper, InputWrapper, Label } from "./style";
import { ErrorMessage, StyledLabel } from "../Input/style";

export interface RadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode;
  errorMessage?: string;
  style?: React.CSSProperties;
}

export const RadioButton = memo(
  forwardRef<HTMLInputElement, RadioButtonProps>(
    (
      {
        style,
        checked,
        onChange,
        label,
        name,
        value,
        errorMessage,
        disabled,
        ...rest
      }: RadioButtonProps,
      ref
    ) => {
      const generatedId = useId();
      const id = `${name}-${value}-${generatedId}`;
      const errorId = `${id}-error`;

      return (
        <>
          <Wrapper
            as="label"
            htmlFor={id}
            aria-describedby={errorMessage ? errorId : undefined}
            data-disabled={disabled ? "" : undefined}
          >
            <InputWrapper style={style} $checked={!!checked}>
              <input
                /* eslint-disable-next-line jsx-a11y/aria-props */
                aria-invalid={Boolean(errorMessage)}
                aria-describedby={errorMessage ? errorId : undefined}
                checked={checked}
                disabled={disabled}
                id={id}
                name={name}
                onChange={onChange}
                ref={ref}
                type="radio"
                value={value}
                {...rest}
              />

              {/* радиокнопка — SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="8" cy="8" r="7.5" stroke="currentColor" />
                <circle cx="8" cy="8" r="3.2" fill="currentColor" />
              </svg>
            </InputWrapper>

            <Label as="span" variant="P3-Regular-Comp">
              {label}
            </Label>
          </Wrapper>

          {errorMessage && (
            <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>
          )}
        </>
      );
    }
  )
);

RadioButton.displayName = "RadioButton";

export default RadioButton;
