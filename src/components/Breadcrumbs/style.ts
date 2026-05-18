// style.ts
import styled from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import { mts_text_primary, mts_text_secondary } from "../../consts/index.js";
import "../../assets/fonts.css";
import { StyledLink } from "../Link/style.js";

export const Wrapper = styled.ol`
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  ${visuallyImpairedMixin};
`;

export const CrumbItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CrumbLink = styled(StyledLink)<{ $size?: "s" | "m" }>`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${mts_text_secondary};
  font-family: "MTS Compact", "Arial", sans-serif;
  font-size: ${({ $size }) => ($size === "s" ? "14px" : "17px")};
  line-height: ${({ $size }) => ($size === "s" ? "20px" : "24px")};
  font-weight: 400;
  &::after {
    display: none;
  }
  ${visuallyImpairedMixin};
`;

export const CrumbText = styled.span<{ $size?: "s" | "m" }>`
  color: ${mts_text_primary};
  cursor: default;
  font-family: "MTS Compact", "Arial", sans-serif;
  font-size: ${({ $size }) => ($size === "s" ? "14px" : "17px")};
  line-height: ${({ $size }) => ($size === "s" ? "20px" : "24px")};
  font-weight: 400;
  ${visuallyImpairedMixin};
`;

export const Separator = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${mts_text_secondary};
`;
