import styled from "styled-components";
import { Select as SelectComponent } from "antd";
import {
  mts_text_primary,
  mts_background_secondary,
  mts_gray_hover,
  mts_red,
  mts_text_secondary,
} from "../../../consts";
import { formBase } from "../shared/formBaseTokens";

export const StyledSelect = styled(SelectComponent)`
  .ant-select-selector {
    background-color: ${mts_background_secondary} !important;
    border: 1px solid ${mts_gray_hover};
    border-radius: ${formBase.borderRadius} !important;
    height: 48px !important;
    padding: ${formBase.padding} !important;

    display: flex !important;
    align-items: center !important;

    font-family: "MTS Compact", Arial, sans-serif;
    font-size: ${formBase.fontSize};
    font-weight: ${formBase.fontWeight};
    line-height: ${formBase.lineHeight};
    color: ${mts_text_primary};

    box-shadow: none !important;
    transition: border-color 0.2s ease;
    cursor: pointer;

    &:hover {
      border-color: ${mts_text_secondary};
    }
  }

  .ant-select-selection-placeholder {
    color: ${mts_text_secondary};
    display: flex;
    align-items: center;
  }

  .ant-select-selection-search-input {
    height: 100%;
    font-family: "MTS Compact", Arial, sans-serif;
  }

  .ant-select-arrow {
    top: 40%;
    color: ${mts_text_secondary};
  }

  &.ant-select-focused .ant-select-selector {
    border-color: ${mts_text_secondary} !important;
  }

  .ant-select-selector[aria-invalid="true"] {
    border-color: ${mts_red} !important;
  }
  .ant-select-dropdown {
    /* background-color: ${mts_background_secondary} !important; */
  }
  .ant-select-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-right: 6px;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 17px;
  color: ${mts_text_primary};
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
