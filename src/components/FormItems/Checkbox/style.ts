import styled from "styled-components";
import { visuallyImpairedMixin } from "../../../accessibility";
import {
  mts_bg_secondary,
  mts_brand_red,
  mts_bg_hover,
} from "../../../consts";
import "../../../assets/fonts.css";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  ${visuallyImpairedMixin};
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  ${visuallyImpairedMixin};

  input {
    appearance: none;
    -webkit-appearance: none;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid ${mts_bg_hover};
    background-color: ${mts_bg_secondary};
    border-radius: 6px;
    transition:
      background-color 0.2s,
      border-color 0.2s;

    &::after {
      content: "";
      position: absolute;
      top: 45%;
      left: 50%;
      width: 5px;
      height: 9px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: translate(-50%, -50%) rotate(45deg);
      opacity: 0;
      transition: opacity 0.2s;
    }

    &:checked {
      background-color: ${mts_brand_red};
      border-color: ${mts_brand_red};

      &::after {
        opacity: 1;
      }
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #f0f0f0;
      border-color: #ccc;
    }
    &:disabled:checked {
      background-color: #ccc;
      border-color: #ccc;
    }
  }
`;
