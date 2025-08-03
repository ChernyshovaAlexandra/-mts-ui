import React, { memo, useId, type FC } from "react";
import { RadioButton, type RadioButtonProps } from "../RadioButton/RadioButton";
import { GroupWrapper, GroupLabel, RadiosWrapper } from "./style";
import { ErrorMessage as GroupError } from "../Input/style";

export interface RadioOption
  extends Pick<RadioButtonProps, "value" | "label" | "disabled"> {}

export interface RadioGroupProps {
  /** Имя для атрибута `name` всех радио‑кнопок */
  name: string;
  /** Подпись группы, будет связана через `aria-labelledby` */
  label?: string | React.ReactNode;
  /** Список вариантов */
  options: RadioOption[];
  /** Текущее выбранное значение */
  value?: string;
  /** Коллбек при выборе варианта */
  onChange: (value: string) => void;
  /** Сообщение об ошибке (например, валидация формы) */
  errorMessage?: string;
  /** Направление отображения */
  direction?: "horizontal" | "vertical";
}

const RadioGroupBase: FC<RadioGroupProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  errorMessage,
  direction = "vertical",
}) => {
  const groupId = useId();
  const labelId = `${name}-${groupId}-label`;
  const errorId = `${name}-${groupId}-error`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <GroupWrapper
      role="radiogroup"
      aria-labelledby={label ? labelId : undefined}
      aria-invalid={Boolean(errorMessage)}
      aria-describedby={errorMessage ? errorId : undefined}
      data-direction={direction}
    >
      {label && (
        <GroupLabel $invalidInput={!!errorMessage} id={labelId}>
          {label}
        </GroupLabel>
      )}

      <RadiosWrapper data-direction={direction}>
        {options.map(
          ({ value: optionValue, label: optionLabel, disabled }, index) => (
            <RadioButton
              key={`radio-button-${index}`}
              name={name}
              value={optionValue}
              label={optionLabel}
              checked={value === optionValue}
              disabled={disabled}
              onChange={handleChange}
            />
          )
        )}
      </RadiosWrapper>

      {errorMessage && <GroupError id={errorId}>{errorMessage}</GroupError>}
    </GroupWrapper>
  );
};

RadioGroupBase.displayName = "RadioGroup";

export const RadioGroup = memo(RadioGroupBase);
