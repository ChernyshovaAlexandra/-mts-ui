import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import "../../assets/fonts.css";
import { TextVariant } from "./Text";
import { mts_text_primary } from "../../consts";

export const textStyles = {
  "P1-Regular-Comp": css`
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    font-family: "MTS Compact", sans-serif;
  `,
  "P2-Regular-Comp": css`
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
    font-family: "MTS Compact", sans-serif;
  `,
  "P3-Bold-Comp": css`
    font-size: 17px;
    line-height: 24px;
    font-weight: 700;
    font-family: "MTS Compact", sans-serif;
  `,
  "P3-Medium-Comp": css`
    font-size: 17px;
    line-height: 24px;
    font-weight: 500;
    font-family: "MTS Compact", sans-serif;
  `,
  "P3-Regular-Comp": css`
    font-size: 17px;
    line-height: 24px;
    font-weight: 400;
    font-family: "MTS Compact", sans-serif;
  `,
  "P4-Bold-Upp-Wide": css`
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 0.05;
    text-transform: uppercase;
    font-family: "MTS Wide", sans-serif;
  `,
  "P4-Regular-Comp": css`
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    font-family: "MTS Compact", sans-serif;
  `,
  "P4-Medium-Comp": css`
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    font-family: "MTS Compact", sans-serif;
  `,
  "P4-Regular-Text": css`
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    font-family: "MTS Text", sans-serif;
  `,
  "P3-Regular-Text": css`
    font-size: 17px;
    line-height: 1.4;
    font-weight: 400;
    font-family: "MTS Text", sans-serif;
  `,
};

export const StyledText = styled.p<{ variant?: TextVariant }>`
  margin: 0;
  color: ${mts_text_primary};
  ${({ variant }) => variant && textStyles[variant]};
  ${visuallyImpairedMixin};
`;
