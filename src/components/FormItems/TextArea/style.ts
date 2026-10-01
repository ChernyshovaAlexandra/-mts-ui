import styled from "styled-components";
import { visuallyImpairedMixin } from "../../../accessibility";
import { mts_text_secondary } from "../../../consts";
import { inputBaseStyles } from "../Input/style";

export const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  ${inputBaseStyles}
  padding-right: 16px;
  resize: vertical;
  white-space: pre-wrap;
  overflow-wrap: anywhere;

  &:focus {
    border-color: ${mts_text_secondary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${visuallyImpairedMixin};
`;
