import { memo, InputHTMLAttributes, ReactElement } from "react";
import { Wrapper, Label, InputWrapper, ErrorMessage } from "./style";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | ReactElement;
  errorMessage: string;
}

export const Checkbox = memo(
  ({
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
          <InputWrapper>
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
