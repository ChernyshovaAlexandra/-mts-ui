import React, { createContext, useContext, useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";

interface AccessibilityContextProps {
  visuallyImpaired: boolean;
  toggleVisuallyImpaired: () => void;
  setVisuallyImpaired: (value: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(
  undefined
);

const A11yGlobalStyle = createGlobalStyle<{ enabled: boolean }>`
  ${({ enabled }) =>
    enabled &&
    `
    body[data-visually-impaired='true'] {
      font-size: 18px;
    }

    body[data-visually-impaired='true'] * {
      font-size: 1.125rem !important;
    }
  `}
`;

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [visuallyImpaired, setVisuallyImpaired] = useState(false);

  useEffect(() => {
    if (visuallyImpaired) {
      document.body.setAttribute("data-visually-impaired", "true");
    } else {
      document.body.removeAttribute("data-visually-impaired");
    }
  }, [visuallyImpaired]);

  const toggleVisuallyImpaired = () => setVisuallyImpaired((v) => !v);

  return (
    <AccessibilityContext.Provider
      value={{ visuallyImpaired, toggleVisuallyImpaired, setVisuallyImpaired }}
    >
      <A11yGlobalStyle enabled={visuallyImpaired} />
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within AccessibilityProvider"
    );
  }
  return context;
};

