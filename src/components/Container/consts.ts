import { css } from "styled-components";

const MOBILE_WORKSPACE = 320;
const TABLET_WORKSPACE = 688;
const Desktop_XS_WORKSPACE = 880;
const Desktop_S_Normal_WORKSPACE = 1168;
const Desktop_S_Wide_WORKSPACE = 1216;
const Desktop_M_Normal_WORKSPACE = 1264;
const Desktop_M_Wide_WORKSPACE = 1216;
const Desktop_L_Normal_WORKSPACE = 1360;
const Desktop_L_Wide_WORKSPACE = 1600;
const Desktop_XL_Normal_WORKSPACE = 1552;
const Desktop_XL_Wide_WORKSPACE = 1840;

export const config = {
  Mobile: css`
    max-width: ${MOBILE_WORKSPACE}px;
    margin: 0 auto;
  `,
  Tablet: css`
    max-width: ${TABLET_WORKSPACE}px;
    margin: 0 auto;
  `,
  Desktop_XS: css`
    max-width: ${Desktop_XS_WORKSPACE}px;
    margin: 0 auto;
  `,
  Desktop_S_Normal: css`
    max-width: ${Desktop_S_Normal_WORKSPACE}px;
    margin: 0 auto;
  `,
  Desktop_S_Wide: css`
    max-width: ${Desktop_S_Wide_WORKSPACE}px;
    margin: 0 auto;
  `,
  Desktop_M_Normal: css`
    max-width: ${Desktop_M_Normal_WORKSPACE}px;
    margin: 0 auto;
  `,
  Desktop_M_Wide: css`
    max-width: ${Desktop_M_Wide_WORKSPACE}px;
    margin: 0 auto;
  `,
  Desktop_L_Normal: css`
    max-width: ${Desktop_L_Normal_WORKSPACE}px;
    margin: 0 auto;
  `,
  Desktop_L_Wide: css`
    max-width: ${Desktop_L_Wide_WORKSPACE}px;
    margin: 0 auto;
  `,
  Desktop_XL_Normal: css`
    max-width: ${Desktop_XL_Normal_WORKSPACE}px;
    margin: 0 auto;
  `,
  Desktop_XL_Wide: css`
    max-width: ${Desktop_XL_Wide_WORKSPACE}px;
    margin: 0 auto;
  `,
};
