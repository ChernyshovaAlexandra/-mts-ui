import styled from "styled-components";
import { Select as SelectComponent } from "antd";
import {
  mts_black,
  mts_gray,
  mts_gray_hover,
  mts_red,
  mts_red_hover,
} from "../../../consts";

export const StyledSelect = styled(SelectComponent)`
  width: 100%;
  max-width: 500px;
  min-width: 0px;
  font-family: "MTS Compact", Corpid, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.412rem;
  color: ${mts_black};

  .ant-select-selector {
    border: 2px solid ${mts_gray};
    border-radius: 8px !important;
    height: 44px !important;
    display: flex !important;
    align-items: center !important;
    padding: 0 12px !important;
    outline: none !important;
    box-shadow: inset 0 0 0 100px #ffffff !important;
    border-color: ${mts_gray}!important;

    &:hover {
      border: 2px solid ${mts_gray_hover};
      outline: none !important;
    }

    &:disabled {
      background-color: ${mts_gray};
    }
  }

  .ant-select-selection-search-input {
    height: 100% !important;
    font-family: "MTS Compact", Corpid, Arial, sans-serif;
  }

  .ant-select-arrow {
    top: 40%;
    bottom: 0;
    margin: auto;
    transform: none;
  }

  .ant-select-selection-placeholder {
    display: flex;
    align-items: center;
    color: ${mts_gray_hover};
  }

  /* Стили для фокуса */
  &.ant-select-focused .ant-select-selector {
    border-color: ${mts_gray_hover}!important;
  }

  /* Стили для ошибки */
  .ant-select-selector[aria-invalid="true"] {
    border-color: ${mts_red} !important;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 17px;
  color: ${mts_black};
  margin-bottom: 6px;
  font-family: "MTS Compact", sans-serif;
`;

export const ErrorText = styled.span`
  color: ${mts_red};
  font-size: 12px;
  margin-top: 10px;
  font-family: "MTS Compact", sans-serif;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
