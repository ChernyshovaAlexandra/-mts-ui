import styled from "styled-components";
import { TimePicker } from "antd";
import { inputBaseStyles } from "../Input/style";

export const StyledTimePicker = styled(TimePicker)`
  ${inputBaseStyles}
  height: auto;
  width: 100%;
  padding-right: 12px;

  .ant-picker-input > input:focus {
    outline: none;
    box-shadow: none;
  }

  &.ant-picker {
    cursor: pointer;
    background: #fff;

    &:hover {
      background: #fff;
    }
  }

  &.ant-picker-focused {
    box-shadow: none;
  }

  .ant-picker-input > input {
    font-family: "MTS Compact", Arial, sans-serif;
    font-size: 16px;
  }

  .ant-picker-suffix {
    color: #8d969f;
  }
`;
