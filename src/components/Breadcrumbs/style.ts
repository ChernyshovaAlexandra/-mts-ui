import styled from "styled-components";
import { mts_text_primary } from "../../consts/index.js";
import "../../assets/fonts.css";
import { StyledLink } from "../Link/style.js";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 24px;
`;

export const CrumbLink = styled(StyledLink)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: ${mts_text_primary};
  font: 17px "MTS Compact", "Arial", sans-serif;
  font-weight: 500;
`;

export const CrumbText = styled.span`
  color: ${mts_text_primary};
  opacity: 0.4;
  cursor: default;
  font: 17px "MTS Compact", "Arial", sans-serif;
  font-weight: 500;
`;

export const Separator = styled.span`
  margin: 0 8px;
  color: ${mts_text_primary};
  display: inline-flex;
  align-items: center;
  font: 17px "MTS Compact", "Arial", sans-serif;
  font-weight: 500;
`;
