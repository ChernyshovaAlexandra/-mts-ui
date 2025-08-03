import styled from "styled-components";
import { visuallyImpairedMixin } from "../../../accessibility";
import Text from "../../Text/Text";
import { StyledText } from "../../Text/style";
import { inputBaseStyles } from "../Input/style";
import { formBase } from "../shared/formBaseTokens";
import { mts_brand_red, mts_text_primary } from "../../../consts";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
  ${visuallyImpairedMixin};

  input {
    box-sizing: border-box;
    ${inputBaseStyles}
    ${visuallyImpairedMixin};
    display: none;

    &:checked {
      & + svg {
        circle:first-child {
          stroke: ${mts_brand_red};
        }
        circle:last-child {
          fill: ${mts_brand_red};
        }
      }

      &:hover svg {
        circle:first-child {
          stroke-width: 1.7px;
        }
      }
    }
  }
`;

export const Label = styled(StyledText)`
  cursor: pointer;
  text-align: left;
  ${visuallyImpairedMixin};
`;

export const InputWrapper = styled.span<{ $checked: boolean }>`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  font-family: "MTS Compact", Arial, sans-serif;
  font-size: ${formBase.fontSize};
  line-height: ${formBase.lineHeight};
  font-weight: ${formBase.fontWeight};
  text-overflow: ellipsis;
  & ~ ${Label} {
    color: ${({ $checked }) => ($checked ? mts_brand_red : mts_text_primary)};
  }
  svg {
    width: 16px;
    height: 16px;

    circle:first-child {
      fill: transparent;
      stroke: ${mts_text_primary};
      stroke-width: 1.5px;
    }

    circle:last-child {
      fill: transparent;
    }
  }
`;
