import styled, { css } from "styled-components";
import { textStyles } from "../Text/style";

export const StyledTag = styled.div<{
  $variant: string;
  $bgColor: string;
  $color: string;
}>`
  display: grid;
  place-items: center;
  background: ${({ $bgColor }) => $bgColor};
  color: ${({ $color }) => $color};
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
  text-transform: uppercase;
  font-family: inherit;
  width: fit-content;

  ${({ $variant }) => {
    switch ($variant) {
      case "pill":
        return css`
          padding: 5px 20px;
          border-radius: 30px;
          background-color: #fff;

          span {
            margin: 0;
            padding: 0;
            ${textStyles["P4-Regular-Text"]};
            text-transform: none;
            color: #1d2023;
            text-align: center;
            font-feature-settings:
              "liga" off,
              "clig" off;
          }
        `;
      case "gray":
        return css`
          padding: 4px 8px;
          border-radius: 6px;
          background-color: rgb(242, 243, 247);

          span {
            ${textStyles["P4-Bold-Upp-Wide"]};
            text-transform: uppercase;
            color: rgb(29, 32, 35);
          }
        `;
      default:
        return css``;
    }
  }}
`;
