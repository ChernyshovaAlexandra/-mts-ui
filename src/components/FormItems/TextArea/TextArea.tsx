import { forwardRef, memo, useId, type TextareaHTMLAttributes } from "react";
import { ErrorMessage, StyledLabel, Wrapper } from "../Input/style";
import { StyledTextarea } from "./style";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string | null;
}

export const Textarea = memo(forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, label, errorMessage, rows = 7, "aria-describedby": describedBy, ...props }, ref) => {
    const generatedId = useId();
    const fieldId = id || `textarea-${generatedId}`;
    const errorId = `${fieldId}-error`;
    const description = [describedBy, errorMessage ? errorId : undefined].filter(Boolean).join(" ") || undefined;

    return (
      <Wrapper>
        {label && <StyledLabel htmlFor={fieldId} $invalidInput={!!errorMessage}>{label}</StyledLabel>}
        <StyledTextarea
          {...props}
          id={fieldId}
          rows={rows}
          ref={ref}
          aria-invalid={errorMessage ? true : props["aria-invalid"]}
          aria-describedby={description}
        />
        {errorMessage && <ErrorMessage id={errorId} role="alert">{errorMessage}</ErrorMessage>}
      </Wrapper>
    );
  }
));

export default Textarea;
