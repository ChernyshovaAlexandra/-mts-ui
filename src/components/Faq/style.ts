import styled from "styled-components";
import Text from "../Text/Text";
import { motion, AnimatePresence } from "framer-motion";

export const FaqStyledSection = styled.div<{ isOpened: boolean }>`
  position: relative;
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 14px;
  cursor: pointer;

  svg {
    position: absolute;
    right: 0;
    top: 10px;
    transform: ${({ isOpened }) =>
      isOpened ? `rotateX(180deg)` : `rotateX(0deg)`};
    transition: all 0.2s ease-in-out;
  }
`;

export const FaqQuestion = styled(Text)`
  padding-right: 25px;
`;

export const FaqAnswer = styled(Text)`
  display: block;
  transition: all 0.2s ease-in-out;
`;
