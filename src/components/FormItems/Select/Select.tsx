/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Wrapper, Label, ErrorText, StyledSelect } from "./style";
import IconDropdown from "../../../icons/IconDropdown/IconDropdown";

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
      {label && <Label htmlFor={id}>{label}</Label>}
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
        suffixIcon={<IconDropdown width={32} height={32} />}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
};
