import styled, { css } from "styled-components";
import "../../../assets/fonts.css";
import {
  mts_text_primary,
  mts_accent_light_active,
  mts_accent_light_negative,
  mts_text_secondary,
  mts_input_background,
  mts_input_stroke,
} from "../../../consts";
import { formBase } from "../shared/formBaseTokens";

export const inputBaseStyles = css`
  min-width: 0;
  width: 100%;
  padding: ${formBase.padding};
  border-radius: ${formBase.borderRadius};
  outline: none !important;
  background-color: ${mts_input_background};
  border: 1px solid ${mts_input_stroke};
  font-family: "MTS Compact", Arial, sans-serif;
  font-size: ${formBase.fontSize};
  line-height: ${formBase.lineHeight};
  font-weight: ${formBase.fontWeight};
  color: ${mts_text_primary};
  text-overflow: ellipsis;
  outline: none;
  box-shadow: none;
  transition: border-color 0.2s ease;
  padding-right: 38px;

  &::placeholder {
    font-family: "MTS Compact", Arial, sans-serif;
    color: ${mts_text_secondary};
    font-weight: ${formBase.fontWeight};
    font-size: ${formBase.fontSize};
  }

  &:focus {
    border-color: ${mts_accent_light_active};
  }

  &[aria-invalid="true"] {
    border-color: ${mts_accent_light_negative};
  }
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  ${inputBaseStyles}
`;

export const ErrorMessage = styled.div`
  color: ${mts_accent_light_negative};
  font:
    12px "MTS Compact",
    "Arial",
    sans-serif;
  font-weight: 300;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const StyledLabel = styled.label<{ $invalidInput: boolean }>`
  color: ${({ $invalidInput }) =>
    $invalidInput ? mts_accent_light_negative : mts_text_secondary};
  font:
    14px "MTS Compact",
    "Arial",
    sans-serif;
  line-height: 20px;
  font-weight: 400;

  a {
    font-size: inherit;
    font-weight: inherit;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 500px;
`;

export const IconSlot = styled.div`
  position: absolute;
  right: 14px;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
