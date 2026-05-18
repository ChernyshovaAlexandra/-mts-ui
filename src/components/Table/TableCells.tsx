import React, { FC } from "react";
import styled from "styled-components";
import { mts_text_primary, mts_text_secondary } from "../../consts";
import { Text } from "../Text/Text";
import { Caption } from "../Caption/Caption";
import { Link } from "../Link/Link";
import { InlineEdit } from "../InlineEdit/InlineEdit";
import "../../assets/fonts.css";

// ── Text ─────────────────────────────────────────────────────────────────────

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const PrimaryText = styled(Text).attrs({ as: "span" })`
  font-family: "MTS Compact", sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SecondaryText = styled(Caption).attrs({ variant: "C1-Regular-Comp" as const })`
  color: ${mts_text_secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export interface TableCellTextProps {
  children: React.ReactNode;
  subtext?: React.ReactNode;
}

export const TableCellText: FC<TableCellTextProps> = ({ children, subtext }) => (
  <TextWrap>
    <PrimaryText>{children}</PrimaryText>
    {subtext && <SecondaryText>{subtext}</SecondaryText>}
  </TextWrap>
);

// ── Status ────────────────────────────────────────────────────────────────────

const StatusWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`;

const StatusDot = styled.div<{ $color: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ $color }) => $color};
`;

export interface TableCellStatusProps {
  color: string;
  children: React.ReactNode;
}

export const TableCellStatus: FC<TableCellStatusProps> = ({ color, children }) => (
  <StatusWrap>
    <StatusDot $color={color} />
    <PrimaryText>{children}</PrimaryText>
  </StatusWrap>
);

// ── Link ──────────────────────────────────────────────────────────────────────

const LinkAnchor = styled(Link)`
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
`;

export interface TableCellLinkProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const TableCellLink: FC<TableCellLinkProps> = ({ href, onClick, icon, children }) => (
  <LinkAnchor
    href={href}
    onClick={onClick}
    variant={icon ? "icon-left" : "default"}
    icon={icon}
    target={href ? "_blank" : undefined}
    rel="noopener noreferrer"
  >
    {children}
  </LinkAnchor>
);

// ── Avatar + Text ──────────────────────────────────────────────────────────────

const AvatarWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
`;

export interface TableCellAvatarProps {
  avatar: React.ReactNode;
  children: React.ReactNode;
  subtext?: React.ReactNode;
}

export const TableCellAvatar: FC<TableCellAvatarProps> = ({ avatar, children, subtext }) => (
  <AvatarWrap>
    <div style={{ flexShrink: 0 }}>{avatar}</div>
    <TextWrap>
      <PrimaryText>{children}</PrimaryText>
      {subtext && <SecondaryText>{subtext}</SecondaryText>}
    </TextWrap>
  </AvatarWrap>
);

// ── Icon + Text ────────────────────────────────────────────────────────────────

const IconTextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export interface TableCellIconTextProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const TableCellIconText: FC<TableCellIconTextProps> = ({ icon, children }) => (
  <IconTextWrap>
    {icon}
    <PrimaryText>{children}</PrimaryText>
  </IconTextWrap>
);

// ── Inline Edit ───────────────────────────────────────────────────────────────

export interface TableCellInlineEditProps {
  value: string;
  onChange?: (value: string) => void;
  onSave?: (value: string) => void;
  onCancel?: () => void;
  placeholder?: string;
  disabled?: boolean;
}

export const TableCellInlineEdit: FC<TableCellInlineEditProps> = ({
  value,
  onChange,
  onSave,
  onCancel,
  placeholder,
  disabled,
}) => (
  <InlineEdit
    value={value}
    onChange={onChange}
    onSave={onSave}
    onCancel={onCancel}
    placeholder={placeholder}
    size="m"
    bg="primary"
    showIcon={false}
    disabled={disabled}
    style={{ width: "100%" }}
  />
);

// ── Actions ────────────────────────────────────────────────────────────────────

const ActionsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
`;

const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: none;
  cursor: pointer;
  color: ${mts_text_secondary};
  padding: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
    color: ${mts_text_primary};
  }
`;

export interface TableCellActionsProps {
  actions: Array<{
    key: string;
    icon: React.ReactNode;
    onClick: () => void;
    title?: string;
  }>;
}

export const TableCellActions: FC<TableCellActionsProps> = ({ actions }) => (
  <ActionsWrap>
    {actions.map((action) => (
      <ActionBtn
        key={action.key}
        onClick={(e) => { e.stopPropagation(); action.onClick(); }}
        title={action.title}
        aria-label={action.title}
      >
        {action.icon}
      </ActionBtn>
    ))}
  </ActionsWrap>
);
