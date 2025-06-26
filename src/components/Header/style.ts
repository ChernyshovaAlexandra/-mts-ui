import styled, { css } from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import { HeaderVariant } from "./Header";
import "../../assets/fonts.css";
import { mts_text_primary } from "../../consts";

const headerStyles = {
  "H1-Wide": css`
    font-family: "MTS Wide", sans-serif;
    font-size: 36px;
    line-height: 40px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 32px;
    }

    @supports (-webkit-touch-callout: none) {
      transform: translateY(-1.5px);
    }
  `,
  "H2-Wide": css`
    font-family: "MTS Wide", sans-serif;
    font-size: 32px;
    line-height: 36px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 28px;
    }

    @supports (-webkit-touch-callout: none) {
      transform: translateY(-0.5px);
    }
  `,
  "H3-Wide": css`
    font-family: "MTS Wide", sans-serif;
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  `,
  "H4-Wide": css`
    font-family: "MTS Wide", sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  `,
};

export const StyledHeader = styled.h1<{ variant?: HeaderVariant }>`
  margin: 0;
  color: ${mts_text_primary};
  ${({ variant }) => variant && headerStyles[variant]};
  ${visuallyImpairedMixin};
`;
