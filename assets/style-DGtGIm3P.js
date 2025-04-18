import{d as e}from"./styled-components.browser.esm-Cp418-ky.js";import{c as o,d as i,m as n}from"./index-DItf0zJP.js";/* empty css              */const m=e.a`
  color: ${({type:t})=>t==="menuItem"?o:i};
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
    background: ${n};
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
`;export{m as S};
