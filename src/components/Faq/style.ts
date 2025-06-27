import styled from "styled-components";
import Text, { TextVariant } from "../Text/Text";
import { visuallyImpairedMixin } from "../../accessibility";
import { mts_bg_secondary_elevated, mts_text_primary } from "../../consts";
import { textStyles } from "../Text/style";

export const FaqItemWrapper = styled.div`
  background-color: ${mts_bg_secondary_elevated};
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const FaqStyledButton = styled.button<{ isOpened: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  svg {
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpened }) =>
      isOpened ? "rotate(180deg)" : "rotate(0deg)"};
  }

  ${visuallyImpairedMixin};
`;

export const FaqQuestion = styled(Text)<{ variant: TextVariant }>`
  color: ${mts_text_primary};
  ${({ variant }) => variant && textStyles[variant]};
  flex: 1;
  font-size: 20px;
`;

export const FaqAnswer = styled(Text)<{ variant: TextVariant }>`
  padding: 16px 24px;
  color: ${mts_text_primary};
  ${({ variant }) => variant && textStyles[variant]};
`;
