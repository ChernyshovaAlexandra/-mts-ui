import React, { useState } from "react";
import { Copy } from "lucide-react";
import { Meta } from "@storybook/react";
import Text from "../components/Text/Text";
import * as colors from "./index";
import * as colors2 from "./fruitColors";
import {
  ColorGroup,
  ColorGroupHeader,
  ColorName,
  Color,
  ColorBox,
  ColorValue,
  CopyBtn,
  ColorDescription,
} from "./style";
import Separator from "../components/Separator/Separator";

export default {
  title: "МТС/Colors",
} as Meta;

const groupNames: Record<string, string> = {
  text: "Text",
  accent: "Accent",
  bg: "Background",
  icon: "Icon",
  control: "Controls",
  negative: "Negative",
  input: "Inputs",
  brand: "Brand",
};

export const AllColorsGrouped = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const grouped = Object.entries(colors).reduce<
    Record<string, [string, string][]>
  >((acc, [name, value]) => {
    const key = name.split("_")[1];
    if (!acc[key]) acc[key] = [];
    acc[key].push([name, value]);
    return acc;
  }, {});

  const grouped2 = Object.entries(colors2).reduce<
    Record<string, [string, string][]>
  >((acc, [name, value]) => {
    const key = name.split("_")[2];
    if (!acc[key]) acc[key] = [];
    acc[key].push([name, value]);
    return acc;
  }, {});

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div>
      {Object.entries(grouped).map(([groupKey, items]) => (
        <ColorGroup key={groupKey}>
          <ColorGroupHeader variant="P2-Regular-Comp">
            {groupNames[groupKey] || groupKey}
          </ColorGroupHeader>

          <ColorDescription>
            {items.map(([name, value]) => (
              <ColorBox key={name}>
                <Color value={value} />
                <div>
                  <ColorName variant="P3-Regular-Comp">{name}</ColorName>
                  <Separator color="#BCC3D080" />
                  <ColorValue variant="P3-Regular-Comp">{value}</ColorValue>
                </div>
                <CopyBtn onClick={() => handleCopy(name)} title="Скопировать">
                  <Copy size={14} />
                </CopyBtn>
                {copied === name && (
                  <Text style={{ color: "green", fontSize: 10, marginTop: 4 }}>
                    Скопировано!
                  </Text>
                )}
              </ColorBox>
            ))}
          </ColorDescription>
        </ColorGroup>
      ))}
      {Object.entries(grouped2).map(([groupKey, items]) => (
        <ColorGroup key={groupKey}>
          <ColorGroupHeader variant="P2-Regular-Comp">
            {groupNames[groupKey] || groupKey}
          </ColorGroupHeader>

          <ColorDescription>
            {items.map(([name, value]) => (
              <ColorBox key={name}>
                <Color value={value} />
                <div>
                  <ColorName variant="P3-Regular-Comp">{name}</ColorName>
                  <Separator color="#BCC3D080" />
                  <ColorValue variant="P3-Regular-Comp">{value}</ColorValue>
                </div>
                <CopyBtn onClick={() => handleCopy(name)} title="Скопировать">
                  <Copy size={14} />
                </CopyBtn>
                {copied === name && (
                  <Text style={{ color: "green", fontSize: 10, marginTop: 4 }}>
                    Скопировано!
                  </Text>
                )}
              </ColorBox>
            ))}
          </ColorDescription>
        </ColorGroup>
      ))}
    </div>
  );
};
