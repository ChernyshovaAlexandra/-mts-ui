import React from "react";
import * as Icons from "./index";
import { Copy } from "lucide-react";
import { useState } from "react";
import Text from "../components/Text/Text";

export default {
  title: "МТС/Icons",
};

export const AllIcons = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (iconName: string) => {
    navigator.clipboard.writeText(`<${iconName} />`);
    setCopied(iconName);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
      {Object.entries(Icons).map(([name, IconComponent]) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 100,
            padding: 10,
            border: "1px solid #ddd",
            borderRadius: 8,
            position: "relative",
          }}
        >
          <IconComponent width={32} height={32} />
          <Text style={{ marginTop: 8, fontSize: 12 }}>{name}</Text>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              position: "absolute",
              top: 8,
              right: 8,
            }}
            onClick={() => handleCopy(name)}
            title="Скопировать"
          >
            <Copy size={14} />
          </button>
          {copied === name && (
            <Text style={{ color: "green", fontSize: 10, marginTop: 4 }}>
              Скопировано!
            </Text>
          )}
        </div>
      ))}
    </div>
  );
};
