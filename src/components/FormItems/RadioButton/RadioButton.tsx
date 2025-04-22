import React, { memo, InputHTMLAttributes } from "react";
import { Wrapper, InputWrapper, Label } from "./style";
import { ErrorMessage, StyledLabel } from "../Input/style";

export interface RadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode;
  errorMessage?: string;
  style?: React.CSSProperties;
}

export const RadioButton = memo(
  ({
    style,
    checked,
    onChange,
    label,
    name,
    value,
    errorMessage,
    disabled,
  }: RadioButtonProps) => {
    const id = `${name}-${value}`;

    return (
      <>
        <Wrapper as="label" htmlFor={id}>
          <InputWrapper style={style}>
            <input
              name={name}
              id={id}
              disabled={disabled}
              type="radio"
              checked={checked}
              onChange={onChange}
              value={value}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="7.5" stroke="currentColor" />
              <circle
                cx="8.00055"
                cy="8.00006"
                r="3.19586"
                fill="currentColor"
              />
            </svg>
          </InputWrapper>
          <Label as="label" variant="P3-Regular-Comp" htmlFor={id}>
            {label}
          </Label>
        </Wrapper>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    );
  }
);

export default RadioButton;
