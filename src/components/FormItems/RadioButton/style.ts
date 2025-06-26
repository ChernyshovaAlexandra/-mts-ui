import styled from "styled-components";
import { visuallyImpairedMixin } from "../../../accessibility";
import Text from "../../Text/Text";
import { StyledText } from "../../Text/style";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
  ${visuallyImpairedMixin};

  input {
    display: none;
  }

  input:checked + svg {
    circle:first-child {
      stroke: #1d2023;
    }
    circle:last-child {
      fill: #1d2023;
    }
  }

  &:hover svg {
    circle:first-child {
      stroke-width: 1.7px;
    }
  }
`;

export const InputWrapper = styled.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;

    circle:first-child {
      fill: transparent;
      stroke: #1d2023;
      stroke-width: 1.5px;
    }

    circle:last-child {
      fill: transparent;
    }
  }
`;

export const Label = styled(StyledText)`
  cursor: pointer;
  text-align: left;
  ${visuallyImpairedMixin};
`;
