import styled from "styled-components";
import { visuallyImpairedMixin } from "../../accessibility";
import { mts_text_primary, mts_bg_secondary, mts_brand_red } from "../../consts";
import "../../assets/fonts.css";

export const MenuItems = styled.ul`
  display: flex;
  gap: 20px;
  ${visuallyImpairedMixin};
`;

export const MenuItem = styled.li`
  list-style: none;
  ${visuallyImpairedMixin};

 
`;

export const NavWrapper = styled.nav`
  border-bottom: 1px solid ${mts_bg_secondary};
  padding-bottom: .5rem;
  ${visuallyImpairedMixin};
`;
