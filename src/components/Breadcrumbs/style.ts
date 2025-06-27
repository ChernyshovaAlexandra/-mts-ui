// style.ts
import styled from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import { mts_text_primary } from "../../consts/index.js";
import "../../assets/fonts.css";
import { StyledLink } from "../Link/style.js";

export const Wrapper = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  font-size: 14px;
  ${visuallyImpairedMixin};
`;

export const CrumbItem = styled.li`
  display: flex;
  align-items: center;
`;

export const CrumbLink = styled(StyledLink)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: ${mts_text_primary};
  font: 17px "MTS Compact", "Arial", sans-serif;
  font-weight: 500;
  ${visuallyImpairedMixin};
`;

export const CrumbText = styled.span`
  color: ${mts_text_primary};
  opacity: 0.4;
  cursor: default;
  font: 17px "MTS Compact", "Arial", sans-serif;
  font-weight: 500;
  ${visuallyImpairedMixin};
`;

export const Separator = styled.span`
  margin: 0 8px;
  color: ${mts_text_primary};
  display: inline-flex;
  align-items: center;
  font: 17px "MTS Compact", "Arial", sans-serif;
  font-weight: 500;
  ${visuallyImpairedMixin};
`;
