import React, { memo, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconDropdown } from "../../icons";
import Separator from "../Separator/Separator";
import {
  FaqItemWrapper,
  FaqStyledButton,
  FaqQuestion,
  FaqAnswer,
} from "./style";

export type FaqItem = {
  question: string;
  answer: string | React.ReactNode;
};

export interface FaqProps {
  items: FaqItem[];
  style?: React.CSSProperties;
}

export const Faq: React.FC<FaqProps> = memo(({ items, style }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = useCallback((index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  }, []);

  return (
    <section style={style}>
      {items.map((item, index) => {
        const isOpened = openItems.has(index);
        const answerId = `faq-answer-${index}`;
        const questionId = `faq-question-${index}`;

        return (
          <FaqItemWrapper key={index}>
            <FaqStyledButton
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpened}
              aria-controls={answerId}
              id={questionId}
              isOpened={isOpened}
            >
              <FaqQuestion as="span" variant="P4-Medium-Comp">
                {item.question}
              </FaqQuestion>
              <IconDropdown aria-hidden />
            </FaqStyledButton>

            <AnimatePresence initial={false}>
              {isOpened && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <FaqAnswer
                    id={answerId}
                    aria-labelledby={questionId}
                    role="region"
                    variant="P3-Regular-Comp"
                  >
                    {item.answer}
                  </FaqAnswer>
                </motion.div>
              )}
            </AnimatePresence>
          </FaqItemWrapper>
        );
      })}
    </section>
  );
});
