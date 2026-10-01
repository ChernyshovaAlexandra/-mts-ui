import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-mIjS73Jk.js";import{D as $,d as M,c as C}from"./ru-j5oUs7AM.js";import{c as h}from"./objectWithoutProperties-D1XObzAp.js";import{c as V}from"./omit-Duhjc17p.js";import{i as F,W as q,S as E,I as W,E as z}from"./style-CSv-hX4L.js";import{S as L,g as O}from"./styled-components.browser.esm-UUNjPRYl.js";/* empty css              */import{t as R,d as x,u as H,p as N,y as b}from"./index-CA_YInif.js";import{I as U}from"./IconDate-ChNgKphX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./genStyleUtils-0FiciY4a.js";import"./index-BssJU-4Y.js";import"./index-XdMz6ftz.js";import"./Keyframes-DTt6P7nv.js";import"./mixins-DAii6Zu4.js";var A=h(h({},V),{},{locale:"ru_RU",today:"Сегодня",now:"Сейчас",backToToday:"Текущая дата",ok:"ОК",clear:"Очистить",week:"Неделя",month:"Месяц",year:"Год",timeSelect:"Выбрать время",dateSelect:"Выбрать дату",monthSelect:"Выбрать месяц",yearSelect:"Выбрать год",decadeSelect:"Выбрать десятилетие",dateFormat:"D-M-YYYY",dateTimeFormat:"D-M-YYYY HH:mm:ss",previousMonth:"Предыдущий месяц (PageUp)",nextMonth:"Следующий месяц (PageDown)",previousYear:"Предыдущий год (Control + left)",nextYear:"Следующий год (Control + right)",previousDecade:"Предыдущее десятилетие",nextDecade:"Следущее десятилетие",previousCentury:"Предыдущий век",nextCentury:"Следующий век"});const B={placeholder:"Выберите время",rangePlaceholder:["Время начала","Время окончания"]},G={lang:Object.assign({placeholder:"Выберите дату",yearPlaceholder:"Выберите год",quarterPlaceholder:"Выберите квартал",monthPlaceholder:"Выберите месяц",weekPlaceholder:"Выберите неделю",rangePlaceholder:["Начальная дата","Конечная дата"],rangeYearPlaceholder:["Начальный год","Год окончания"],rangeMonthPlaceholder:["Начальный месяц","Конечный месяц"],rangeWeekPlaceholder:["Начальная неделя","Конечная неделя"],shortWeekDays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],shortMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]},A),timePickerLocale:Object.assign({},B)},J=O($)`
  ${F}
  height: auto;
  width: 100%;
  padding-right: 12px;

  &.ant-picker {
    cursor: pointer;
    background: ${b};

    &:hover {
      background: ${b};
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
`,K=L` .mts-datepicker-popup {
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
            border-radius: ${R};
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
        border-radius: ${H};
        font-family: "MTS Compact", sans-serif;
        font-size: 16px;
        display: block;
        padding: 8px 12px !important;
        border-radius: ${N} !important;
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

`;M.extend(C);const m=r.memo(r.forwardRef(({label:l,errorMessage:e,disabled:c,value:t=null,onChange:p,required:d},P)=>{const _=r.useMemo(()=>t?M(t,"DD.MM.YYYY"):null,[t]),i=r.useId(),u=`${i}-error`;return a.jsxs(q,{role:"group","aria-labelledby":i,"aria-describedby":e?u:void 0,children:[a.jsx(K,{}),l&&a.jsxs(E,{$invalidInput:!!e,htmlFor:i,children:[l,d?" *":""]}),a.jsx(W,{children:a.jsx(J,{ref:P,id:i,locale:G,popupClassName:"mts-datepicker-popup",value:_,onChange:T=>{const f=T;p==null||p(f?f.format("DD.MM.YYYY"):null)},format:"DD.MM.YYYY",placeholder:"дд.мм.гггг",required:d,disabled:c,suffixIcon:a.jsx(U,{}),"aria-required":d,"aria-invalid":!!e,"aria-describedby":e?u:void 0})}),e&&a.jsx(z,{id:u,children:e})]})}));m.__docgenInfo={description:"",methods:[],displayName:"DateInput",props:{label:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""}}};const me={title:"МТС/FormItems/DateInput",component:m,tags:["autodocs"]},g=l=>{const[e,c]=r.useState(null);return a.jsx(m,{...l,value:e,onChange:t=>{t&&(console.log("Date changed:",t),c(t))}})},n=g.bind({});n.args={label:"Дата рождения",errorMessage:""};const o=g.bind({});o.args={label:"Дата рождения",errorMessage:"Неверный формат даты"};const s=g.bind({});s.args={label:"Дата рождения",errorMessage:"",disabled:!0};var k,y,v;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | null>(null);
  return <DateInput {...args} value={value} onChange={(val: string | null) => {
    if (val) {
      console.log("Date changed:", val);
      setValue(val);
    }
  }} />;
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var D,S,Y;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | null>(null);
  return <DateInput {...args} value={value} onChange={(val: string | null) => {
    if (val) {
      console.log("Date changed:", val);
      setValue(val);
    }
  }} />;
}`,...(Y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:Y.source}}};var w,I,j;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | null>(null);
  return <DateInput {...args} value={value} onChange={(val: string | null) => {
    if (val) {
      console.log("Date changed:", val);
      setValue(val);
    }
  }} />;
}`,...(j=(I=s.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const ge=["Default","WithError","Disabled"];export{n as Default,s as Disabled,o as WithError,ge as __namedExportsOrder,me as default};
