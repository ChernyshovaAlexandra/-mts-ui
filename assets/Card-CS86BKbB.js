import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{f as a,g as p}from"./styled-components.browser.esm-UUNjPRYl.js";import{u,v as m,w as o,k as c,m as b}from"./index-CA_YInif.js";import{v as x}from"./mixins-DAii6Zu4.js";const d="0px 0px 16px rgba(0,0,0,0.08), 0px 4px 16px rgba(0,0,0,0.08)",n="0px 8px 16px rgba(0,0,0,0.08), 0px 4px 24px rgba(0,0,0,0.12)",f="rgba(255, 255, 255, 0.08)",v={default:a`
    background: ${o};
    box-shadow: ${d};
  `,"default-no-shadow":a`
    background: ${o};
  `,grey:a`
    background: ${b};
  `,outline:a`
    background: ${o};
    border: 1px solid ${c};
  `,transparent:a`
    background: ${f};
    backdrop-filter: blur(20px);
  `},g=p.div`
  border-radius: ${u};
  padding: 16px;
  overflow: hidden;
  box-sizing: border-box;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  ${({$variant:e})=>v[e]}

  ${({$interactive:e,$variant:t})=>e&&a`
      cursor: pointer;

      &:hover {
        transform: translateY(-4px);
        box-shadow: ${n};
      }

      &:active {
        transform: translateY(0);
        box-shadow: ${t==="default"?d:"none"};
      }

      &:focus-visible {
        outline: none;
        transform: translateY(-4px);
        box-shadow: ${n};
        border: 1px solid ${m};
      }
    `}

  ${x}
`,$=({variant:e="default",children:t,onClick:s,...i})=>{const r=!!s;return l.jsx(g,{$variant:e,$interactive:r,onClick:s,role:r?"button":void 0,tabIndex:r?0:void 0,...i,children:t})};$.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "default-no-shadow" | "grey" | "outline" | "transparent"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"default-no-shadow"'},{name:"literal",value:'"grey"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"transparent"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["HTMLAttributes"]};export{$ as C};
