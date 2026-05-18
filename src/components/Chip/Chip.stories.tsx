import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Chip, ChipGroup, ChipProps } from "./Chip";
import { IconMusic } from "../../icons/IconMusic/IconMusic";

export default {
  title: "МТС/Chip",
  component: Chip,
  tags: ["autodocs"],
} as Meta<ChipProps>;

export const Default: StoryFn = () => {
  const options = ["Молоко", "Сыр", "Кефир", "Ряженка", "Сметана"];
  const [selected, setSelected] = useState<string | null>("Ряженка");

  return (
    <ChipGroup>
      {options.map((o) => (
        <Chip key={o} selected={selected === o} onClick={() => setSelected(o === selected ? null : o)}>
          {o}
        </Chip>
      ))}
    </ChipGroup>
  );
};

export const Multiselect: StoryFn = () => {
  const options = ["Минибон", "Синнабон", "Капкейк", "Шоколад", "Круассан"];
  const [selected, setSelected] = useState<Set<string>>(new Set(["Синнабон", "Шоколад"]));

  const toggle = (o: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(o) ? next.delete(o) : next.add(o);
      return next;
    });
  };

  return (
    <ChipGroup>
      {options.map((o) => (
        <Chip key={o} selected={selected.has(o)} onClick={() => toggle(o)}>
          {o}
        </Chip>
      ))}
    </ChipGroup>
  );
};

export const WithIcon: StoryFn = () => {
  const [selected, setSelected] = useState("Музыка");

  return (
    <ChipGroup>
      {["Музыка", "Путешествия", "Животные"].map((o) => (
        <Chip key={o} selected={selected === o} icon={<IconMusic size={16} />} onClick={() => setSelected(o)}>
          {o}
        </Chip>
      ))}
    </ChipGroup>
  );
};

export const MenuChip: StoryFn = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <ChipGroup>
      <Chip
        menu
        menuOpen={open}
        selected={selected}
        onClick={() => { if (!selected) setOpen((v) => !v); }}
        onClose={() => { setSelected(false); setOpen(false); }}
      >
        Chip
      </Chip>
    </ChipGroup>
  );
};

export const FormChip: StoryFn = () => {
  const [chips, setChips] = useState(["Option 1", "Option 2"]);

  return (
    <ChipGroup>
      {chips.map((c) => (
        <Chip key={c} selected onClose={() => setChips((prev) => prev.filter((x) => x !== c))}>
          {c}
        </Chip>
      ))}
    </ChipGroup>
  );
};

export const Sizes: StoryFn = () => (
  <ChipGroup>
    <Chip size="medium">Medium 44</Chip>
    <Chip size="small">Small 32</Chip>
    <Chip size="medium" selected>Medium Selected</Chip>
    <Chip size="small" selected>Small Selected</Chip>
  </ChipGroup>
);

export const States: StoryFn = () => (
  <ChipGroup>
    <Chip>Default</Chip>
    <Chip selected>Selected</Chip>
    <Chip selected selectedVariant="outline">Selected Alt</Chip>
    <Chip disabled>Disabled</Chip>
  </ChipGroup>
);
