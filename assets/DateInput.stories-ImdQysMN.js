import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-CgfFrydU.js";import{D as C,d as j,c as V}from"./ru-BCVzI4WJ.js";import{_ as h}from"./genStyleUtils-DC7KZOMn.js";import{c as _}from"./omit-BiApCgfr.js";import{i as F,W as q,S as E,I as W,E as $}from"./style-Ca_MdG4J.js";import{f as z,d as L}from"./styled-components.browser.esm-CzyguTxk.js";import"./fonts-C-rNwtaq.js";import{b as x}from"./index-DzNPuTIb.js";import{I as O}from"./IconDate-7erjMhfW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useIcons-W8KT2URs.js";import"./index-FwlZ0Bdg.js";import"./index-B2KKL2uI.js";import"./ResizeObserver.es-B1PUzC5B.js";var R=h(h({},_),{},{locale:"ru_RU",today:"Сегодня",now:"Сейчас",backToToday:"Текущая дата",ok:"ОК",clear:"Очистить",week:"Неделя",month:"Месяц",year:"Год",timeSelect:"Выбрать время",dateSelect:"Выбрать дату",monthSelect:"Выбрать месяц",yearSelect:"Выбрать год",decadeSelect:"Выбрать десятилетие",dateFormat:"D-M-YYYY",dateTimeFormat:"D-M-YYYY HH:mm:ss",previousMonth:"Предыдущий месяц (PageUp)",nextMonth:"Следующий месяц (PageDown)",previousYear:"Предыдущий год (Control + left)",nextYear:"Следующий год (Control + right)",previousDecade:"Предыдущее десятилетие",nextDecade:"Следущее десятилетие",previousCentury:"Предыдущий век",nextCentury:"Следующий век"});const H={placeholder:"Выберите время",rangePlaceholder:["Время начала","Время окончания"]},N={lang:Object.assign({placeholder:"Выберите дату",yearPlaceholder:"Выберите год",quarterPlaceholder:"Выберите квартал",monthPlaceholder:"Выберите месяц",weekPlaceholder:"Выберите неделю",rangePlaceholder:["Начальная дата","Конечная дата"],rangeYearPlaceholder:["Начальный год","Год окончания"],rangeMonthPlaceholder:["Начальный месяц","Конечный месяц"],rangeWeekPlaceholder:["Начальная неделя","Конечная неделя"],shortWeekDays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],shortMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]},R),timePickerLocale:Object.assign({},H)},U=L(C)`
  ${F}
  height: auto;
  width: 100%;
  padding-right: 12px;

  &.ant-picker {
    cursor: pointer;
    background: #fff;

    &:hover {
      background: #fff;
    }
  }

  &.ant-picker-focused {
    box-shadow: none;
  }

  .ant-picker-input > input {
    font-family: "MTS Compact", Arial, sans-serif;
    font-size: 16px;
  }

  .ant-picker-suffix {
    color: #8d969f;
  }
`,A=z` .mts-datepicker-popup {
    .ant-picker-date-panel .ant-picker-body {
        padding: 10px 0 0;
    }

    .ant-picker-header-view {
        justify-content: flex-start;
        display: flex;
        padding: 10px 0;
    }

    .ant-picker-header button {

        &.ant-picker-header-super-prev-btn,
        &.ant-picker-header-super-next-btn {
            display: none;
        }

        &.ant-picker-month-btn,
        &.ant-picker-year-btn, &.ant-picker-decade-btn {
            font-family: "MTS Compact";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
            font-feature-settings: 'liga' off, 'clig' off;
            background: #F2F3F7;
            border-radius: 12px;
            padding: 6px 12px;
            order: 1;
        }

        &.ant-picker-header-prev-btn {
            order: 2;
        }

        &.ant-picker-header-next-btn {
            order: 3;
        }
    }
    
    .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before{
      border-color: ${x};
    }

    .ant-picker-panel {
        border-radius: 24px;
        font-family: "MTS Compact", sans-serif;
        font-size: 16px;
        display: block;
        padding: 8px 12px !important;
        border-radius: 32px !important;
        box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.12), 0px 12px 20px 0px rgba(0, 0, 0, 0.14);
    }

    .ant-picker-content th {
        color: ${x};
        text-align: center;
        font-feature-settings: 'liga' off,
        'clig' off;
        font-family: "MTS Compact";
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        text-transform: uppercase;
    }

    .ant-picker-header {
        font-weight: 500;
        justify-content: space-between;
    }

    .ant-picker-cell-selected .ant-picker-cell-inner {
        background-color: #ff0032;
        color: white;
    }

    .ant-picker-cell-in-view {
        color: #000;
    }

    .ant-picker-footer {
        display: none;
    }
}

`;j.extend(V);const m=r.memo(r.forwardRef(({label:l,errorMessage:e,disabled:c,value:t=null,onChange:p,required:d},M)=>{const P=r.useMemo(()=>t?j(t,"DD.MM.YYYY"):null,[t]),i=r.useId(),u=`${i}-error`;return a.jsxs(q,{role:"group","aria-labelledby":i,"aria-describedby":e?u:void 0,children:[a.jsx(A,{}),l&&a.jsxs(E,{$invalidInput:!!e,htmlFor:i,children:[l,d?" *":""]}),a.jsx(W,{children:a.jsx(U,{ref:M,id:i,locale:N,popupClassName:"mts-datepicker-popup",value:P,onChange:T=>{const g=T;p==null||p(g?g.format("DD.MM.YYYY"):null)},format:"DD.MM.YYYY",placeholder:"дд.мм.гггг",required:d,disabled:c,suffixIcon:a.jsx(O,{}),"aria-required":d,"aria-invalid":!!e,"aria-describedby":e?u:void 0})}),e&&a.jsx($,{id:u,children:e})]})}));m.__docgenInfo={description:"",methods:[],displayName:"DateInput",props:{label:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""}}};const ie={title:"МТС/FormItems/DateInput",component:m,tags:["autodocs"]},f=l=>{const[e,c]=r.useState(null);return a.jsx(m,{...l,value:e,onChange:t=>{t&&(console.log("Date changed:",t),c(t))}})},n=f.bind({});n.args={label:"Дата рождения",errorMessage:""};const o=f.bind({});o.args={label:"Дата рождения",errorMessage:"Неверный формат даты"};const s=f.bind({});s.args={label:"Дата рождения",errorMessage:"",disabled:!0};var b,k,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | null>(null);
  return <DateInput {...args} value={value} onChange={(val: string | null) => {
    if (val) {
      console.log("Date changed:", val);
      setValue(val);
    }
  }} />;
}`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var v,D,Y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | null>(null);
  return <DateInput {...args} value={value} onChange={(val: string | null) => {
    if (val) {
      console.log("Date changed:", val);
      setValue(val);
    }
  }} />;
}`,...(Y=(D=o.parameters)==null?void 0:D.docs)==null?void 0:Y.source}}};var S,w,I;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | null>(null);
  return <DateInput {...args} value={value} onChange={(val: string | null) => {
    if (val) {
      console.log("Date changed:", val);
      setValue(val);
    }
  }} />;
}`,...(I=(w=s.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const ce=["Default","WithError","Disabled"];export{n as Default,s as Disabled,o as WithError,ce as __namedExportsOrder,ie as default};
