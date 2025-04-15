import { memo, InputHTMLAttributes, useState } from "react";
import { StyledInput, ErrorMessage, Wrapper } from "./style";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
  validatePattern?: RegExp;
};

export const Input = memo(
  ({ errorMessage, validatePattern, onBlur, onChange, ...props }: InputProps) => {
    const [error, setError] = useState<string | null>(null);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (validatePattern && !validatePattern.test(value)) {
        setError(errorMessage || "Неверный формат");
      } else {
        setError(null);
      }

      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setError(null);
      onChange?.(e);
    };

    return (
      <Wrapper>
        <StyledInput
          {...props}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={!!error}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Wrapper>
    );
  }
);

export default Input;
