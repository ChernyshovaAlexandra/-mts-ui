import styled, { css } from "styled-components";
import { textStyles } from "../Text/style";

export const StyledTag = styled.div<{ $variant: string }>`
  display: grid;
  place-items: center;
  background: rgb(242, 243, 247);
  color: rgb(29, 32, 35);
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

/* display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 5px 20px;
  gap: 10px;
  border-radius: 30px;

  font-family: "MTS Text";
  font-weight: 700;
  text-transform: uppercase;
  user-select: none;

  ${({ $variant }) => {
    switch ($variant) {
      case "pill":
        return css`
          background: #ffffff;
          color: var(--text-primary);
          border: 1px solid rgba(0, 0, 0, 0.06);
        `;
      case "gray":
        return css`
          background: #f1f3f5;
          color: var(--text-secondary);
        `;
      default: /* primary
      return css`
      background: #fff;
      color: #ffffff;
    `; */
