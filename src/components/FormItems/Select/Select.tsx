import React, { useId, forwardRef, useState, useEffect } from "react";
import ReactSelect, { StylesConfig, type SelectInstance } from "react-select";
import { Wrapper } from "./style";
import IconLock from "../../../icons/IconLock/IconLock";
import {
  mts_accent_light_negative,
  mts_input_background,
  mts_input_stroke,
  mts_text_primary,
  mts_text_secondary,
} from "../../../consts";
import { ErrorMessage, StyledLabel } from "../Input/style";
import { formBase } from "../shared/formBaseTokens";
import { IconDropdown, IconCheck } from "../../../icons";
import { regions, filterRegions } from "../../../utils/regionData";
import { BottomSheet } from "../../BottomSheet/BottomSheet";
import {
  MobileField,
  MobileFieldText,
  OptionRow,
  OptionLabel,
  GroupLabel,
} from "../../BottomSheet/style";

export interface SelectLeaf {
  label: string;
  value: string;
}
export interface SelectGroup {
  label: string;
  options: SelectLeaf[];
}
export type SelectOption = SelectLeaf | SelectGroup;

export interface SelectProps {
  name: string;
  id?: string;
  errorMessage?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  options?: SelectOption[];
  placeholder?: string;
  required?: boolean;
  label?: string;
  error?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  rsProps?: Record<string, unknown>;
  withRegions?: boolean;
}

export const Select = forwardRef<SelectInstance, SelectProps>(
  (
    {
      name,
      value,
      onChange,
      options = [],
      placeholder,
      label,
      errorMessage: error,
      disabled,
      style,
      rsProps,
      id,
      required,
      withRegions,
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = id || `select-${generatedId}`;
    const errorId = `${selectId}-error`;

    const [filteredRegions, setFilteredRegions] = useState(regions);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth <= 768);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, []);

    const activeOptions = withRegions ? filteredRegions : options;

    // flat list for finding selected label
    const flatOptions: SelectLeaf[] = (activeOptions as any[]).flatMap((o) =>
      "options" in o ? o.options : [o]
    );
    const selectedOption = flatOptions.find((o) => o.value === value) || null;

    const handleMobileSelect = (optValue: string) => {
      onChange(name, optValue);
      setIsSheetOpen(false);
    };

    const handleReset = () => {
      onChange(name, "");
      setIsSheetOpen(false);
    };

    // ─── Mobile: custom trigger + BottomSheet ───────────────────────────
    if (isMobile) {
      return (
        <Wrapper style={style}>
          {label && (
            <StyledLabel htmlFor={selectId} $invalidInput={!!error}>
              {label}
              {disabled && (
                <IconLock
                  width={18}
                  height={18}
                  style={{ position: "relative", top: 3, marginLeft: 3 }}
                />
              )}
            </StyledLabel>
          )}

          <MobileField
            id={selectId}
            role="button"
            aria-haspopup="listbox"
            aria-expanded={isSheetOpen}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            $hasValue={Boolean(selectedOption)}
            $isError={!!error}
            $disabled={disabled}
            onClick={() => !disabled && setIsSheetOpen(true)}
          >
            <MobileFieldText>
              {selectedOption ? selectedOption.label : (placeholder || "— выберите —")}
            </MobileFieldText>
            <IconDropdown
              width={18}
              height={18}
              style={{ color: "#626C77", flexShrink: 0 }}
            />
          </MobileField>

          {error && <ErrorMessage id={errorId}>{error}</ErrorMessage>}

          <BottomSheet
            isOpen={isSheetOpen}
            onClose={() => setIsSheetOpen(false)}
            title={label || placeholder || "Выберите"}
            onReset={value ? handleReset : undefined}
          >
            {(activeOptions as any[]).map((o, i) =>
              "options" in o ? (
                <div key={i} role="group" aria-label={o.label}>
                  <GroupLabel>{o.label}</GroupLabel>
                  {o.options.map((opt: SelectLeaf) => (
                    <OptionRow
                      key={opt.value}
                      type="button"
                      $selected={opt.value === value}
                      onClick={() => handleMobileSelect(opt.value)}
                      role="option"
                      aria-selected={opt.value === value}
                    >
                      <OptionLabel>{opt.label}</OptionLabel>
                      {opt.value === value && (
                        <IconCheck
                          width={24}
                          height={24}
                          style={{ color: mts_text_primary, flexShrink: 0 }}
                        />
                      )}
                    </OptionRow>
                  ))}
                </div>
              ) : (
                <OptionRow
                  key={(o as SelectLeaf).value}
                  type="button"
                  $selected={(o as SelectLeaf).value === value}
                  onClick={() => handleMobileSelect((o as SelectLeaf).value)}
                  role="option"
                  aria-selected={(o as SelectLeaf).value === value}
                >
                  <OptionLabel>{(o as SelectLeaf).label}</OptionLabel>
                  {(o as SelectLeaf).value === value && (
                    <IconCheck
                      width={24}
                      height={24}
                      style={{ color: mts_text_primary, flexShrink: 0 }}
                    />
                  )}
                </OptionRow>
              )
            )}
          </BottomSheet>
        </Wrapper>
      );
    }

    // ─── Desktop: ReactSelect ────────────────────────────────────────────
    const rsOptions = activeOptions.map((o) =>
      "options" in o
        ? { label: o.label, options: o.options }
        : { label: o.label, value: o.value }
    );
    const rsSelected = (rsOptions as any[])
      .flatMap((o: any) => ("options" in o ? o.options : [o]))
      .find((o: any) => o.value === value) || null;

    const colourStyles: StylesConfig = {
      control: (styles, state) => ({
        ...styles,
        height: 48,
        minHeight: 48,
        backgroundColor: mts_input_background,
        border: `1px solid ${
          error
            ? mts_accent_light_negative
            : state.isFocused
              ? "#626C77"
              : mts_input_stroke
        }`,
        outline: "none",
        boxShadow: "none",
        ":focus": { outline: "none" },
        ":hover": {
          borderColor: error ? mts_accent_light_negative : "#626C77",
        },
        borderRadius: formBase.borderRadius,
        fontFamily: `"MTS Compact", Arial, sans-serif`,
        textOverflow: "ellipsis",
        lineHeight: formBase.lineHeight,
        fontWeight: formBase.fontWeight,
        color: mts_text_primary,
        transition: `border-color 0.2s ease`,
        padding: 0,
      }),
      valueContainer: (base) => ({
        ...base,
        padding: "10px 16px",
        fontFamily: `"MTS Compact", Arial, sans-serif`,
      }),
      placeholder: (styles) => ({
        ...styles,
        fontFamily: `"MTS Compact", Arial, sans-serif`,
        color: mts_text_secondary,
        lineHeight: formBase.lineHeight,
        fontWeight: formBase.fontWeight,
        fontSize: formBase.fontSize,
      }),
      option: (styles, { isFocused, isSelected }) => ({
        ...styles,
        fontFamily: `"MTS Compact", Arial, sans-serif`,
        backgroundColor: isSelected ? "#F0F0F0" : isFocused ? "#F5F7F9" : "transparent",
        ":hover": { cursor: "pointer" },
      }),
      input: (styles) => ({ ...styles, margin: 0 }),
    };

    return (
      <Wrapper style={style}>
        {label && (
          <StyledLabel htmlFor={selectId} $invalidInput={!!error}>
            {label}
            {disabled && (
              <IconLock
                width={18}
                height={18}
                style={{ position: "relative", top: 3, marginLeft: 3 }}
              />
            )}
          </StyledLabel>
        )}

        <ReactSelect
          menuPortalTarget={document.body}
          menuPosition="absolute"
          ref={ref}
          inputId={selectId}
          instanceId={name}
          isDisabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          placeholder={placeholder || "— выберите —"}
          options={rsOptions as any}
          value={rsSelected as any}
          styles={{
            ...colourStyles,
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
          required={required}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: (props) => {
              const { menuIsOpen } = props.selectProps;
              return (
                <IconDropdown
                  width={18}
                  height={18}
                  style={{
                    color: "#626C77",
                    transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform .2s ease",
                    right: "10px",
                    position: "relative",
                  }}
                />
              );
            },
          }}
          onChange={(opt: any) => onChange(name, opt?.value ?? "")}
          isSearchable={withRegions || undefined}
          onInputChange={
            withRegions
              ? (input) => setFilteredRegions(filterRegions(input))
              : undefined
          }
          {...rsProps}
        />

        {error && <ErrorMessage id={errorId}>{error}</ErrorMessage>}
      </Wrapper>
    );
  }
);

export default Select;
