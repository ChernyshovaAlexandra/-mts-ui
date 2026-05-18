import React from "react";
import * as Icons from "./index";
import { Copy } from "lucide-react";
import { useState } from "react";
import Text from "../components/Text/Text";

export default {
  title: "МТС/Icons and Colors/Icons",
};

export const AllIcons = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const handleCopy = (iconName: string) => {
    navigator.clipboard.writeText(`<${iconName} />`);
    setCopied(iconName);
    setTimeout(() => setCopied(null), 1500);
  };

  const filtered = Object.entries(Icons).filter(([name]) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <input
        type="search"
        placeholder="Поиск иконки..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: 280,
          height: 36,
          padding: "0 12px",
          border: "1px solid #BCC3D0",
          borderRadius: 8,
          fontFamily: "MTS Compact, Arial, sans-serif",
          fontSize: 14,
          outline: "none",
          boxSizing: "border-box",
        }}
      />
      {filtered.length === 0 && (
        <span style={{ color: "#969FA8", fontFamily: "sans-serif", fontSize: 14 }}>
          Иконки не найдены
        </span>
      )}
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
      {filtered.map(([name, IconComponent]) => (
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
          <Text
            style={{
              marginTop: 8,
              fontSize: 12,
              width: "100%",
              textAlign: "center",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            title={name}
          >
            {name}
          </Text>
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
    </div>
  );
};
