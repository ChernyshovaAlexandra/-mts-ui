import React, { memo, InputHTMLAttributes } from "react";
import { Wrapper, Label, InputWrapper, ErrorMessage } from "./style";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode;
  errorMessage: string;
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
  }: CheckboxProps) => {
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
            />
          </InputWrapper>
          <Label htmlFor={name}>{label}</Label>
        </Wrapper>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    );
  }
);

export default Checkbox;
