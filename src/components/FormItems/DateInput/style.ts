import styled, { createGlobalStyle } from "styled-components";

import { DatePicker } from "antd";
import "../../../assets/fonts.css";

import { inputBaseStyles } from "../Input/style";

import { mts_text_secondary } from "../../../consts";

export const StyledDatePicker = styled(DatePicker)`
  ${inputBaseStyles}
  height: auto;
  width: 100%;
  padding-right: 12px;
  
  &.ant-picker {
    cursor: pointer;
    background: #bcc3d050;

    &:hover {
      background: #bcc3d050;
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

export const DatePickerPopupStyles = createGlobalStyle` .mts-datepicker-popup {
    .ant-picker-date-panel .ant-picker-body {
        padding: 10px 0 0;
    }

    .ant-picker-header-view {
        justify-content: flex-start;
        display: flex;
        padding: 10px 0;
    }

    .ant-picker-header button {

        &.ant-picker-header-super-prev-btn,
        &.ant-picker-header-super-next-btn {
            display: none;
        }

        &.ant-picker-month-btn,
        &.ant-picker-year-btn, &.ant-picker-decade-btn {
            font-family: "MTS Compact";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
            font-feature-settings: 'liga' off, 'clig' off;
            background: #F2F3F7;
            border-radius: 12px;
            padding: 6px 12px;
            order: 1;
        }

        &.ant-picker-header-prev-btn {
            order: 2;
        }

        &.ant-picker-header-next-btn {
            order: 3;
        }
    }
    
    .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before{
      border-color: ${mts_text_secondary};
    }

    .ant-picker-panel {
        border-radius: 24px;
        font-family: "MTS Compact", sans-serif;
        font-size: 16px;
        display: block;
        padding: 8px 12px !important;
        border-radius: 32px !important;
        box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.12), 0px 12px 20px 0px rgba(0, 0, 0, 0.14);
    }

    .ant-picker-content th {
        color: ${mts_text_secondary};
        text-align: center;
        font-feature-settings: 'liga' off,
        'clig' off;
        font-family: "MTS Compact";
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        text-transform: uppercase;
    }

    .ant-picker-header {
        font-weight: 500;
        justify-content: space-between;
    }

    .ant-picker-cell-selected .ant-picker-cell-inner {
        background-color: #ff0032;
        color: white;
    }

    .ant-picker-cell-in-view {
        color: #000;
    }

    .ant-picker-footer {
        display: none;
    }
}

`;
