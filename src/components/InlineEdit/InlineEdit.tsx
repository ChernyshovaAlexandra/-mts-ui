import React, { FC, useRef, useState, useEffect } from "react";
import { IconEdit } from "../../icons/IconEdit/IconEdit";
import {
  Wrapper,
  IconWrapper,
  DisplayText,
  Placeholder,
  StyledInput,
  iconDisplaySizeBySize,
} from "./style";

export type InlineEditSize = "s" | "m" | "l";
export type InlineEditBg = "primary" | "secondary" | "ghost";

export interface InlineEditProps {
  value: string;
  onChange?: (value: string) => void;
  onSave?: (value: string) => void;
  onCancel?: () => void;
  placeholder?: string;
  size?: InlineEditSize;
  bg?: InlineEditBg;
  showIcon?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const InlineEdit: FC<InlineEditProps> = ({
  value,
  onChange,
  onSave,
  onCancel,
  placeholder = "Введите текст",
  size = "m",
  bg = "primary",
  showIcon = true,
  disabled = false,
  className,
  style,
}) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  const activate = () => {
    if (disabled) return;
    setDraft(value);
    setEditing(true);
  };

  const save = () => {
    setEditing(false);
    onChange?.(draft);
    onSave?.(draft);
  };

  const cancel = () => {
    setEditing(false);
    setDraft(value);
    onCancel?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") save();
    if (e.key === "Escape") cancel();
  };

  const iconDisplaySize = iconDisplaySizeBySize[size];

  return (
    <Wrapper
      $size={size}
      $bg={bg}
      $editing={editing}
      $showIcon={showIcon}
      className={className}
      style={style}
      onClick={!editing ? activate : undefined}
      role={!editing ? "button" : undefined}
      aria-label={!editing ? `Редактировать: ${value || placeholder}` : undefined}
    >
      {!disabled && (
        <IconWrapper $bg={bg} className="inline-edit-icon">
          <IconEdit size={16} variant="outline" width={iconDisplaySize} height={iconDisplaySize} />
        </IconWrapper>
      )}

      {editing ? (
        <StyledInput
          ref={inputRef}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={save}
          onKeyDown={handleKeyDown}
          aria-label="Редактирование текста"
        />
      ) : value ? (
        <DisplayText>{value}</DisplayText>
      ) : (
        <Placeholder>{placeholder}</Placeholder>
      )}
    </Wrapper>
  );
};

export default InlineEdit;
