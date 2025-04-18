/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Wrapper, StyledSelect } from "./style";
import IconDropdown from "../../../icons/IconDropdown/IconDropdown";
import { ErrorMessage, StyledLabel } from "../Input/style";
import IconLock from "../../../icons/IconLock/IconLock";

export interface SelectOption {
  label: string;
  value?: string;
  options?: SelectOption[];
}

export interface SelectProps {
  id?: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  label?: string;
  options: SelectOption[];
  error?: string;
  disabled?: boolean;
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  value,
  onChange,
  label,
  options,
  error,
  disabled,
  placeholder,
}) => {
  const [val, setVal] = React.useState(value);

  const handleSelectChange = (selectedValue: any) => {
    setVal(selectedValue);
    onChange(name, selectedValue);
  };

  React.useEffect(() => {
    if (value !== val) {
      setVal(value);
    }
  }, [val, value]);

  return (
    <Wrapper id={id}>
      {label && (
        <StyledLabel $invalidInput={!!error} htmlFor={id}>
          {label}
          {disabled ? (
            <IconLock
              width="18"
              height="18"
              style={{ position: "relative", top: "3px", marginLeft: "3px" }}
            />
          ) : (
            <></>
          )}
        </StyledLabel>
      )}
      <StyledSelect
        showSearch
        disabled={disabled}
        id={id}
        value={val}
        onChange={(value) => handleSelectChange(value)}
        getPopupContainer={(trigger) => trigger.parentElement as HTMLElement}
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={options}
        placeholder={placeholder}
        suffixIcon={<IconDropdown width={28} height={28} />}
        aria-invalid={!!error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};
