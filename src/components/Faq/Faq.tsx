import React, { memo, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconDropdown } from "../../icons";
import Separator from "../Separator/Separator";
import { FaqStyledSection, FaqQuestion, FaqAnswer } from "./style";

export type FaqItem = {
  question: string;
  answer: string | React.ReactNode;
};

export interface FaqProps {
  items: FaqItem[];
  style?: React.CSSProperties;
}

export const Faq: React.FC<FaqProps> = memo(({ items, style }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set());

  const toggleItem = useCallback((index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, []);

  return (
    <section style={style}>
      {items.map((item, index) => {
        const isOpened = openItems.has(index);
        return (
          <React.Fragment key={index}>
            <FaqStyledSection
              isOpened={isOpened}
              onClick={() => toggleItem(index)}
            >
              <IconDropdown />
              <FaqQuestion variant="P3-Medium-Comp">
                {item.question}
              </FaqQuestion>
            </FaqStyledSection>

            <AnimatePresence initial={false}>
              {isOpened && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <FaqAnswer variant="P3-Regular-Comp">{item.answer}</FaqAnswer>
                </motion.div>
              )}
            </AnimatePresence>

            {index < items.length - 1 && <Separator />}
          </React.Fragment>
        );
      })}
    </section>
  );
});
