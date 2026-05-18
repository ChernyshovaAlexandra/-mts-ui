import React, { FC, memo } from "react";
import { Text } from "../Text/Text";
import { mts_text_secondary } from "../../consts";
import { IconChevronRight } from "../../icons/IconChevronRight/IconChevronRight";
import { IconAddCircle } from "../../icons/IconAddCircle/IconAddCircle";
import { IconRemoveCircle } from "../../icons/IconRemoveCircle/IconRemoveCircle";
import { IconDraggable } from "../../icons/IconDraggable/IconDraggable";
import {
  CellWrapper,
  IconBackground,
  ContentArea,
  TextBlock,
  RightSlot,
  Separator,
} from "./style";

export type CellEdit = "off" | "remove" | "add";

export interface CellProps {
  label: string;
  caption?: string;
  edit?: CellEdit;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  showRight?: boolean;
  showSeparator?: boolean;
  onEditAction?: () => void;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Cell: FC<CellProps> = memo(({
  label,
  caption,
  edit = "off",
  leftContent,
  rightContent,
  showRight = true,
  showSeparator = false,
  onEditAction,
  onClick,
  className,
  style,
}) => {
  const isEditing = edit !== "off";

  return (
    <CellWrapper className={className} style={style}>
      {isEditing && (
        <button
          onClick={onEditAction}
          type="button"
          aria-label={edit === "add" ? "Добавить" : "Удалить"}
          style={{ display: "flex", background: "none", border: "none", padding: 0, cursor: "pointer", flexShrink: 0 }}
        >
          {edit === "add"
            ? <IconAddCircle width={24} height={24} aria-hidden />
            : <IconRemoveCircle width={24} height={24} aria-hidden />
          }
        </button>
      )}

      {leftContent !== undefined ? (
        leftContent
      ) : (
        <IconBackground />
      )}

      <ContentArea onClick={onClick} style={{ cursor: onClick ? "pointer" : undefined }}>
        <TextBlock>
          <Text variant="P3-Regular-Comp" style={{ margin: 0 }}>{label}</Text>
          {caption && <Text variant="P4-Regular-Comp" style={{ margin: 0, color: mts_text_secondary }}>{caption}</Text>}
        </TextBlock>

        {showRight && (
          <RightSlot>
            {rightContent !== undefined ? (
              rightContent
            ) : isEditing ? (
              <IconDraggable width={24} height={24} color="currentColor" />
            ) : (
              <IconChevronRight width={24} height={24} color="currentColor" />
            )}
          </RightSlot>
        )}

        {showSeparator && <Separator />}
      </ContentArea>
    </CellWrapper>
  );
});

export default Cell;
