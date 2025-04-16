import styled from "styled-components";
import "../../assets/fonts.css";
import { TextProps } from "./Text";

export const StyledText = styled.p<TextProps>`
  font:
    400 0.875rem / 1.25rem "MTS Text",
    sans-serif;
  font-size: 1.0625rem;
  font-family: ${({ variant }) =>
    variant === "wide"
      ? "MTS Wide"
      : variant === "compact"
        ? "MTS Compact"
        : "MTS Text"};
  line-height: 1.5rem;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;
