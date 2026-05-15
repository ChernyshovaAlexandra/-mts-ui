import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BottomSheet, BottomSheetProps } from "./BottomSheet";
import { Button } from "../Button/Button";
import { OptionRow, OptionLabel } from "./style";

export default {
  title: "МТС/Overlays/BottomSheet",
  component: BottomSheet,
  tags: ["autodocs"],
} as Meta<BottomSheetProps>;

const options = ["Опция 1", "Опция 2", "Опция 3", "Опция 4", "Опция 5"];

export const Default: StoryFn<BottomSheetProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div style={{ padding: 24, background: "#F2F3F7" }}>
      <Button btn_type="button" variant="primary" width="auto" onClick={() => setIsOpen(true)}>
        Открыть
      </Button>
      <BottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Выберите опцию"
        onReset={selected ? () => { setSelected(""); setIsOpen(false); } : undefined}
      >
        {options.map((o) => (
          <OptionRow
            key={o}
            type="button"
            $selected={o === selected}
            onClick={() => { setSelected(o); setIsOpen(false); }}
          >
            <OptionLabel>{o}</OptionLabel>
          </OptionRow>
        ))}
      </BottomSheet>
    </div>
  );
};
