import React, { FC, memo } from "react";
import { TabBarWrapper, TabsContainer, TabButton, TabLabel, TopDivider } from "./style";

export interface TabBarItem {
  icon: React.ReactNode;
  label: string;
}

export interface TabBarProps {
  items: TabBarItem[];
  activeIndex?: number;
  onChange?: (index: number) => void;
  divider?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const TabBar: FC<TabBarProps> = memo(
  ({ items, activeIndex = 0, onChange, divider = true, style, className }) => {
    const visibleItems = items.slice(0, 5);
    const count = visibleItems.length;

    return (
      <TabBarWrapper style={style} className={className} role="tablist">
        {divider && <TopDivider />}
        <TabsContainer $count={count}>
          {visibleItems.map((item, i) => (
            <TabButton
              key={i}
              $active={i === activeIndex}
              onClick={() => onChange?.(i)}
              type="button"
              role="tab"
              aria-label={item.label}
              aria-selected={i === activeIndex}
            >
              {item.icon}
              <TabLabel $active={i === activeIndex}>{item.label}</TabLabel>
            </TabButton>
          ))}
        </TabsContainer>
      </TabBarWrapper>
    );
  }
);

export default TabBar;
