import{d as i}from"./styled-components.browser.esm-CzyguTxk.js";import{v as e}from"./fonts-C-rNwtaq.js";import{c as o,d as n,m as a}from"./index-DzNPuTIb.js";const l=i.a`
  color: ${({type:t})=>t==="menuItem"?o:n};
  font:
    16px / 1.2 "MTS Compact",
    "Arial",
    sans-serif;
  cursor: pointer;
  position: relative;
  display: block;
  width: fit-content;
  text-decoration: none !important;

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    background: ${a};
    left: 0;
    transition: all 0.3s ease-in;
    bottom: -6px;
    margin: auto;
    width: ${({underlined:t})=>t?"100%":"0"};
    display: ${({type:t})=>t==="menuItem"?"block":"none"};
  }
  &:hover {
    color: ${({type:t})=>t==="menuItem"?"inherit":o};

    &::after {
      width: ${({underlined:t})=>t?"0":"100%"};
      transition: all 0.3s ease-in;
      display: ${({type:t})=>t==="menuItem"?"block":"none"};
    }
  }
  ${e};
`;export{l as S};
