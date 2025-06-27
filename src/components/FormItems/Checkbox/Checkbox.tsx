import React, { memo, InputHTMLAttributes } from "react";
import { Wrapper, InputWrapper } from "./style";
import { ErrorMessage, StyledLabel } from "../Input/style";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode;
  errorMessage?: string;
  style?: React.CSSProperties;
}

export const Checkbox = memo(
  ({
    style,
    checked,
    onChange,
    label,
    name,
    errorMessage,
    disabled,
    ...rest
  }: CheckboxProps) => {
    const errorId = errorMessage ? `${name}-error` : undefined;

    return (
      <>
        <Wrapper>
          <InputWrapper style={style}>
            <input
              name={name}
              id={name}
              disabled={disabled}
              type="checkbox"
              checked={checked}
              onChange={onChange}
              aria-invalid={!!errorMessage}
              aria-describedby={errorId}
              {...rest}
            />
          </InputWrapper>
          <StyledLabel $invalidInput={!!errorMessage} htmlFor={name}>
            {label}
          </StyledLabel>
        </Wrapper>
        {errorMessage && (
          <ErrorMessage id={errorId} role="alert">
            {errorMessage}
          </ErrorMessage>
        )}
      </>
    );
  }
);

export default Checkbox;
