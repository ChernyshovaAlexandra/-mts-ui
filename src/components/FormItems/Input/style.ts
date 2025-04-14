import styled from "styled-components";
import "../../../assets/fonts.css";
import { mts_black, mts_gray, mts_gray_hover } from "../../../consts";

export const StyledInput = styled.input`
  border: 2px solid ${mts_gray};
  border-radius: 8px;
  outline: none;
  color: ${mts_black};
  width: 100%;
  max-width: 500px;
  min-width: 0px;
  padding: 0.706rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.412rem;
  box-shadow: inset 0 0 0 100px #ffffff, inset 0 0 0 100px #ffffff,
    inset 0 0 0 100px #ffffff, inset 0 0 0 100px #ffffff,
    inset 0 0 0 100px #ffffff, inset 0 0 0 100px #ffffff,
    inset 0 0 0 100px #ffffff !important;
  font-family: "MTS Compact", Corpid, Arial, sans-serif;

  &:focus {
    border-color: ${mts_gray_hover};
  }
  &::placeholder {
    color: ${mts_gray_hover};
  }

  &[aria-invalid="true"] {
    border-color: #f44336;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 6px;
  color: #f44336;
  font-size: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
