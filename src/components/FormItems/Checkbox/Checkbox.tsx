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
          <StyledLabel $invalidInput={false} htmlFor={name}>
            {label}
          </StyledLabel>
        </Wrapper>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    );
  }
);

export default Checkbox;
