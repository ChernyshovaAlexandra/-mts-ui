import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import "../../assets/fonts.css";
import { CaptionVariant } from "./Caption";
import { mts_text_primary } from "../../consts";

export const captionStyles = {
  "C1-Bold-Comp": css`
    font-family: "MTS Compact", sans-serif;
    font-size: 12px;
    line-height: 1.3;
    font-weight: 700;
    letter-spacing: 0;
  `,
  "C1-Medium-Upp-Comp": css`
    font-family: "MTS Compact", sans-serif;
    font-size: 12px;
    line-height: 1.3;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: uppercase;
  `,
  "C1-Medium-Comp": css`
    font-family: "MTS Compact", sans-serif;
    font-size: 12px;
    line-height: 1.3;
    font-weight: 500;
    letter-spacing: 0;
  `,
  "C1-Regular-Comp": css`
    font-family: "MTS Compact", sans-serif;
    font-size: 12px;
    line-height: 1.3;
    font-weight: 400;
    letter-spacing: 0;
  `,
};

export const StyledCaption = styled.span<{ $variant?: CaptionVariant }>`
  margin: 0;
  color: ${mts_text_primary};
  ${({ $variant }) => $variant && captionStyles[$variant]};
  ${visuallyImpairedMixin};
`;
