import styled from "styled-components";
import { mts_black, mts_gray, mts_red } from "../../../consts";
import "../../../assets/fonts.css";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;

  // Скрываем дефолтный вид чекбокса
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
      border: 2px solid ${mts_gray};
      border-radius: 6px;
      background-color: #fff;
      box-sizing: border-box;
      transition: background-color 0.2s, border-color 0.2s;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: 0;
      bottom: 3px;
      width: 3px;
      height: 8px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
      transition: opacity 0.2s;
    }
    &:checked {
      &::before {
        background-color: ${mts_red};
        border-color: ${mts_red};
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

export const Label = styled.label`
  cursor: pointer;
  font-size: 0.95rem;
  color: ${mts_black};
  user-select: none;
  font: 17px "MTS Compact", "Arial", sans-serif;
`;

export const ErrorMessage = styled.span`
  color: ${mts_red};
  font: 12px "MTS Compact", "Arial", sans-serif;
  margin-top: 2px;
`;
