import styled from "styled-components";
import { visuallyImpairedMixin } from "../../../accessibility";
import {
  mts_text_primary,
  mts_bg_secondary,
  mts_brand_red,
  mts_bg_hover,
} from "../../../consts";
import "../../../assets/fonts.css";
import { formBase } from "../shared/formBaseTokens";

export const Wrapper = styled.div`
  display: flex;
  gap: 0.7rem;
  ${visuallyImpairedMixin};
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  ${visuallyImpairedMixin};

  input {
    appearance: none;
    position: absolute;
    width: 90%;
    height: 90%;
    margin: 0;
    padding: 0;
    cursor: pointer;
    z-index: 2;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border: 2px solid ${mts_bg_secondary};
      border-radius: 6px;
      background-color: ${mts_bg_secondary};
      border: 1px solid ${mts_bg_hover};
      width: 24px;
      height: 24px;
      box-sizing: border-box;
      transition:
        background-color 0.2s,
        border-color 0.2s;
    }

    &::after {
      content: "";
      content: "";
      position: absolute;
      width: 5px;
      height: 8px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
      transition: opacity 0.2s;
      left: 0;
      top: 0;
      right: -2px;
      margin: auto;
      bottom: 0;
    }
    &:checked {
      &::before {
        background-color: ${mts_brand_red};
        border-color: ${mts_brand_red};
      }
      &::after {
        opacity: 1;
      }
    }
  }

  input:disabled ~ &::before {
    background-color: #f0f0f0;
    border-color: #ccc;
    cursor: not-allowed;
  }
  input:disabled:checked ~ &::before {
    background-color: #ccc;
    border-color: #ccc;
  }
`;
