import styled from "styled-components";
import { TimePicker } from "antd";

export const StyledTimePicker = styled(TimePicker)`
  width: 100%;

  .ant-picker-input > input::placeholder {
    color: #8d96a1;
  }

  .ant-picker-suffix {
    display: flex;
    align-items: center;
  }
`;
