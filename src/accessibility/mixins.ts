import { css } from "styled-components";

export const visuallyImpairedMixin = css`
  body[data-visually-impaired='true'] & {
    font-size: 1.25em !important;
  }
`;
