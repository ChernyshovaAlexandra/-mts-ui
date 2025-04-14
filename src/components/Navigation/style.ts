import styled from "styled-components";
import { mts_black, mts_gray, mts_red } from "../../consts";
import "../../assets/fonts.css";

export const MenuItems = styled.ul`
  display: flex;
  gap: 20px;
`;

export const MenuItem = styled.li`
  list-style: none;

 
`;

export const NavWrapper = styled.nav`
  border-bottom: 1px solid ${mts_gray};
  padding-bottom: .5rem;
`;
