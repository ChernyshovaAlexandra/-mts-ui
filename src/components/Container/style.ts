import styled from "styled-components";
import { config } from "./consts";
import { visuallyImpairedMixin } from "../../accessibility";

export const StyledContainer = styled.div<{ wide?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  ${config.Mobile}

  @media (min-width: 768px) {
    ${config.Tablet}
  }

  @media (min-width: 960px) {
    ${config.Desktop_XS}
  }

  @media (min-width: 1280px) {
    ${({ wide }) => (wide ? config.Desktop_S_Wide : config.Desktop_S_Normal)}
  }

  /* Desktop M – Normal or Wide */
  @media (min-width: 1440px) {
    ${({ wide }) => (wide ? config.Desktop_M_Wide : config.Desktop_M_Normal)}
  }

  /* Desktop L – Normal or Wide */
  @media (min-width: 1680px) {
    ${({ wide }) => (wide ? config.Desktop_L_Wide : config.Desktop_L_Normal)}
  }

  /* Desktop XL – Normal or Wide */
  @media (min-width: 1920px) {
    ${({ wide }) => (wide ? config.Desktop_XL_Wide : config.Desktop_XL_Normal)}
  }
  max-width: calc(100% - 40px);
  ${visuallyImpairedMixin};
`;
