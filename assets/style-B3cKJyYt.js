import{y as n}from"./styled-components.browser.esm-BU5pfHrT.js";import{v as o}from"./mixins-CTkzXf3m.js";import{Q as r,R as i,P as a,T as s}from"./index-CWlbk4Hf.js";/* empty css              */function l(t){switch(t){case"secondary":return s;case"black":return r;case"white":return a;default:return i}}const x=n.span`
  ${({$variant:t,$underlined:e})=>t==="dotted-line"?`
        text-decoration: underline dotted;
        text-underline-offset: 3px;
      `:t==="straight-line"||e?`
        text-decoration: underline solid;
        text-underline-offset: 3px;
      `:""}

  ${({$variant:t,$underlined:e})=>e||t==="straight-line"||t==="dotted-line"?`
        a:hover & {
          text-decoration: none;
        }
      `:`
      a:hover & {
        text-decoration: underline solid;
        text-underline-offset: 3px;
      }
    `}
`,f=n.a`
  color: ${({$theme:t,$type:e})=>t?l(t):e==="menuItem"?r:i};
  font:
    16px / 1.2 "MTS Compact",
    "Arial",
    sans-serif;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  text-decoration: none !important;

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    background: currentColor;
    left: 0;
    transition: all 0.3s ease-in;
    bottom: -6px;
    margin: auto;
    width: ${({$underlined:t})=>t?"100%":"0"};
    display: ${({$type:t})=>t==="menuItem"?"block":"none"};
  }

  &:hover {
    opacity: 0.8;

    &::after {
      width: ${({$underlined:t})=>t?"0":"100%"};
      transition: all 0.3s ease-in;
      display: ${({$type:t})=>t==="menuItem"?"block":"none"};
    }
  }
  ${o};
`;export{x as L,f as S};
