import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{l as r,d as s}from"./styled-components.browser.esm-CzyguTxk.js";import{t}from"./style-S1LL3O2C.js";import{j as p}from"./index-DzNPuTIb.js";const d=s.div`
  display: grid;
  place-items: center;
  background: ${({$bgColor:e})=>e};
  color: ${({$color:e})=>e};
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
  text-transform: uppercase;
  font-family: inherit;
  width: fit-content;

  ${({$variant:e})=>{switch(e){case"pill":return r`
          padding: 5px 20px;
          border-radius: 30px;
          background-color: #fff;

          span {
            margin: 0;
            padding: 0;
            ${t["P4-Regular-Text"]};
            text-transform: none;
            color: #1d2023;
            text-align: center;
            font-feature-settings:
              "liga" off,
              "clig" off;
          }
        `;case"gray":return r`
          padding: 4px 8px;
          border-radius: 6px;
          background-color: rgb(242, 243, 247);

          span {
            ${t["P4-Bold-Upp-Wide"]};
            text-transform: uppercase;
            color: rgb(29, 32, 35);
          }
        `;default:return r``}}}
`,f=({title:e,variant:i="primary",bgColor:o=p,color:l="#fff",...n})=>a.jsx(d,{$bgColor:o,$color:l,...n,$variant:i,children:a.jsx("span",{children:e})});f.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{title:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "gray" | "pill"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"pill"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#BBC1C7"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#fff"',computed:!1}}}};export{f as T};
