import styled from "styled-components";
import { visuallyImpairedMixin } from "../../../accessibility";
import { StyledText } from "../../Text/style";
import {
  mts_brand_red,
  mts_text_primary,
  mts_control_stroke,
  mts_bg_stroke_disabled,
  mts_control_inactive,
} from "../../../consts";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
  ${visuallyImpairedMixin};

  &[data-disabled] {
    cursor: not-allowed;
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;

    &:checked + svg {
      circle:first-child {
        stroke: ${mts_brand_red};
      }
      circle:last-child {
        fill: ${mts_brand_red};
      }
    }

    &:checked:hover + svg circle:first-child {
      stroke-width: 1.7px;
    }

    &:disabled + svg {
      circle:first-child {
        stroke: ${mts_bg_stroke_disabled};
      }
      circle:last-child {
        fill: ${mts_control_inactive};
      }
    }

    &:focus-visible + svg {
      outline: 2px solid ${mts_brand_red};
      outline-offset: 2px;
      border-radius: 50%;
    }
  }
`;

export const Label = styled(StyledText)`
  cursor: inherit;
  text-align: left;
  ${visuallyImpairedMixin};
`;

export const InputWrapper = styled.span<{ $checked: boolean }>`
  position: relative;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  display: inline-flex;

  & ~ ${Label} {
    color: ${({ $checked }) => ($checked ? mts_brand_red : mts_text_primary)};
  }

  svg {
    width: 16px;
    height: 16px;

    circle:first-child {
      fill: transparent;
      stroke: ${mts_control_stroke};
      stroke-width: 1.5px;
    }

    circle:last-child {
      fill: transparent;
    }
  }
`;
