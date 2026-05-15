import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Avatar, AvatarProps } from "./Avatar";

const PHOTO = "https://i.pravatar.cc/160?img=12";
const SIZES = [24, 32, 44, 52, 64, 80] as const;

const Row = ({ bg, children }: { bg?: string; children: React.ReactNode }) => (
  <div
    style={{
      background: bg ?? "#f2f3f7",
      padding: 24,
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      gap: 20,
      flexWrap: "wrap",
    }}
  >
    {children}
  </div>
);

const Col = ({ label, children }: { label: string | number; children: React.ReactNode }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
    {children}
    <span style={{ fontSize: 11, color: "#969fa8", fontFamily: "sans-serif" }}>
      {label}px
    </span>
  </div>
);

export default {
  title: "МТС/Content/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: [24, 32, 44, 52, 64, 80] },
    colored: { control: "boolean" },
    stroke: { control: "boolean" },
    src: { control: "text" },
    alt: { control: "text" },
    initials: { control: "text" },
    gender: { control: "select", options: ["neutral", "male", "female", "business"] },
    borderRadius: { control: { type: "number", min: 0, max: 40 } },
  },
} as Meta<AvatarProps>;

// ─── Playground ──────────────────────────────────────────────────────────────
export const Playground: StoryFn<AvatarProps> = (args) => (
  <Row>
    <Avatar {...args} />
  </Row>
);
Playground.args = { size: 44, colored: false };

// ─── Empty (placeholder) ─────────────────────────────────────────────────────
export const Empty: StoryFn<AvatarProps> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <Row>
      {SIZES.map((s) => (
        <Col key={s} label={s}>
          <Avatar size={s} />
        </Col>
      ))}
    </Row>
    <Row>
      {SIZES.map((s) => (
        <Col key={s} label={s}>
          <Avatar size={s} colored />
        </Col>
      ))}
    </Row>
  </div>
);

// ─── Photo ───────────────────────────────────────────────────────────────────
export const Photo: StoryFn<AvatarProps> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <Row>
      {SIZES.map((s) => (
        <Col key={s} label={s}>
          <Avatar size={s} src={PHOTO} alt="Фото" />
        </Col>
      ))}
    </Row>
    <Row>
      {SIZES.map((s) => (
        <Col key={s} label={s}>
          <Avatar size={s} src={PHOTO} alt="Фото" stroke />
        </Col>
      ))}
    </Row>
  </div>
);

// ─── Initials (Text) ─────────────────────────────────────────────────────────
export const Initials: StoryFn<AvatarProps> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <Row>
      {SIZES.map((s) => (
        <Col key={s} label={s}>
          <Avatar size={s} initials="АВ" />
        </Col>
      ))}
    </Row>
    <Row>
      {SIZES.map((s) => (
        <Col key={s} label={s}>
          <Avatar size={s} initials="АВ" colored />
        </Col>
      ))}
    </Row>
  </div>
);

// ─── Default vs Colored ──────────────────────────────────────────────────────
export const ColorSchemes: StoryFn<AvatarProps> = () => (
  <div style={{ display: "flex", gap: 32, padding: 24 }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
      <span style={{ fontSize: 12, color: "#626c77", fontFamily: "sans-serif" }}>Default</span>
      <Avatar size={64} />
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
      <span style={{ fontSize: 12, color: "#626c77", fontFamily: "sans-serif" }}>Colored</span>
      <Avatar size={64} colored />
    </div>
  </div>
);
