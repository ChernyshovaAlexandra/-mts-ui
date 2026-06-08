import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as L}from"./index-G8LIXM5I.js";import{M as w}from"./Modal-MChDpnIK.js";import{I as o}from"./Input-BE7fM2k_.js";import{S as V}from"./Select-B_FSnd7Y.js";import{B as k}from"./Button-Rt6WeiJe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DoeU9KPV.js";import"./index-B6ujFmsw.js";import"./styled-components.browser.esm-BU5pfHrT.js";import"./mixins-CTkzXf3m.js";import"./index-CWlbk4Hf.js";import"./index-BrN7QjLr.js";import"./IconYoutube-CRYDP8rR.js";import"./createIcon-CRC-JE94.js";import"./Header-2Snyan4B.js";/* empty css              */import"./Text-2zki5lTF.js";import"./style-afSt-2-G.js";import"./style-BTvnBIeH.js";import"./IconAttention-OHJemvOI.js";import"./genStyleUtils-H7UieH10.js";import"./useIcons-Do3klL4i.js";import"./omit-BVcYdL5y.js";import"./Keyframes-C_aWZ9en.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconHeart-CQgzpcxH.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-BGcHld1r.js";import"./IconStar-DBYALbaW.js";import"./IconBookmark-BesuOxsj.js";import"./IconChevronRight-B3ah8NhF.js";import"./IconCross-COM3iMpw.js";import"./IconChevronDown-DMxy4cGU.js";import"./IconMore-nYtcAaZN.js";import"./IconLink-DjSXk0U5.js";import"./IconPicture-CMCuDJpX.js";import"./IconCrossCircle-OcWpa9Gk.js";import"./IconQuestion-BrC8d57T.js";import"./IconEdit-BJDhI4vU.js";import"./BottomSheet-HnBawz1T.js";import"./Spinner-BrDaGlgB.js";const fe={title:"МТС/Modal",component:w,tags:["autodocs"],parameters:{docs:{description:{component:`
**Modal** — диалоговое окно для подтверждения действий, ввода данных или отображения важной информации. Рендерится через портал в \`document.body\`.

### Поведение

- Открытие/закрытие управляется снаружи через \`isModalOpen\` и \`handleClose\`
- При открытии блокирует скролл страницы
- Закрывается по клику на оверлей или клавише \`Escape\`
- \`disableClosing={true}\` — полностью отключает оба способа закрытия
- На мобильных устройствах (< 480px) прижимается к нижнему краю экрана как Bottom Sheet
- \`animateMobileSheet={true}\` — включает мобильную анимацию выезда снизу

### Структура

\`\`\`
Modal
├── MobileIndicator  (drag-handle на мобилке)
├── CloseButton      (опционально, showCloseButton)
├── Header           (title + subtitle)
├── Body             (children)
└── Footer           (cancelText + submitText)
\`\`\`
        `}}},argTypes:{isModalOpen:{description:"Управляет видимостью модального окна.",control:"boolean"},handleClose:{description:"Коллбек закрытия — вызывается по клику на оверлей или Escape."},title:{description:"Заголовок модального окна.",control:"text"},titleVariant:{description:"Типографика заголовка. Поддерживает варианты Text и Header, например `H3-Wide`.",control:"select",options:["P3-Medium-Comp","P3-Bold-Comp","P3-Regular-Comp","P4-Bold-Comp","P4-Medium-Comp","P4-Regular-Comp","H1-Wide","H2-Wide","H3-Wide","H4-Wide","H4-Comp"]},subtitle:{description:"Подзаголовок или описание под заголовком.",control:"text"},animateMobileSheet:{description:"Включает анимацию выезда модалки снизу на мобильных экранах.",control:"boolean"},showCloseButton:{description:"Показывает кнопку закрытия (×) в правом верхнем углу.",control:"boolean"},disableClosing:{description:"Запрещает закрытие по оверлею и Escape. Пользователь может закрыть только через кнопки действий.",control:"boolean"},cancelText:{description:"Текст кнопки отмены. Если не передан — кнопка не отображается.",control:"text"},submitText:{description:"Текст кнопки подтверждения. Если не передан — кнопка не отображается.",control:"text"},submitDisabled:{description:"Блокирует кнопку подтверждения.",control:"boolean"},submitLoading:{description:"Показывает лоадер на кнопке подтверждения во время выполнения действия.",control:"boolean"},onSubmit:{description:"Коллбек нажатия на кнопку подтверждения."},onCancel:{description:"Коллбек нажатия на кнопку отмены. Если не передан — при нажатии вызывается `handleClose`."},modalStyle:{description:"Дополнительные стили для контейнера модального окна.",control:!1},children:{control:!1}}},n=t=>{const[O,p]=L.useState(!1);return e.jsxs("div",{style:{padding:24},children:[e.jsx(k,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>p(!0),children:"Открыть модальное окно"}),e.jsx(w,{...t,isModalOpen:O,handleClose:()=>p(!1)})]})},r={name:"С полем ввода",render:t=>e.jsx(n,{...t}),args:{title:"Заголовок",subtitle:"Сопутствующее сообщение",cancelText:"Отменить",submitText:"Выполнить",children:e.jsx(o,{id:"modal-input",placeholder:"Placeholder"})},parameters:{docs:{description:{story:"Базовый вариант с заголовком, описанием, полем ввода и двумя кнопками действий."}}}},a={name:"С выпадающим списком",render:t=>e.jsx(n,{...t}),args:{title:"Сменить язык",subtitle:"Выберите из списка",cancelText:"Отменить",submitText:"Сохранить",children:e.jsx(V,{name:"lang",value:"",onChange:()=>{},options:[{value:"ru",label:"Русский"},{value:"en",label:"Английский"},{value:"it",label:"Итальянский"}]})},parameters:{docs:{description:{story:"Модальное окно с выбором из списка."}}}},i={name:"С кнопкой закрытия",render:t=>e.jsx(n,{...t}),args:{title:"Заголовок",subtitle:"Сопутствующее сообщение",showCloseButton:!0,cancelText:"Отменить",submitText:"Выполнить",children:e.jsx(o,{id:"modal-input-close",placeholder:"Placeholder"})},parameters:{docs:{description:{story:"Кнопка × в правом верхнем углу — альтернативный способ закрытия помимо оверлея и Escape."}}}},s={name:"С заголовком H3-Wide",render:t=>e.jsx(n,{...t}),args:{title:"Заголовок по центру",titleVariant:"H3-Wide",subtitle:"Сопутствующее сообщение",cancelText:"Отменить",submitText:"Выполнить",children:e.jsx(o,{id:"modal-input-wide-title",placeholder:"Placeholder"})},parameters:{docs:{description:{story:"Заголовок модального окна можно отрисовать в заголовочной типографике, например `H3-Wide`."}}}},l={name:"С мобильной sheet-анимацией",render:t=>e.jsx(n,{...t}),args:{title:"Заголовок по центру",titleVariant:"H3-Wide",subtitle:"На мобильном экране модалка выезжает снизу",animateMobileSheet:!0,cancelText:"Отменить",submitText:"Выполнить",children:e.jsx(o,{id:"modal-input-animated-mobile",placeholder:"Placeholder"})},parameters:{docs:{description:{story:"Opt-in анимация для мобильного представления модалки. На desktop поведение остаётся обычным."}}}},d={name:"Без закрытия по оверлею",render:t=>e.jsx(n,{...t}),args:{title:"Подтвердите действие",subtitle:"Это действие нельзя отменить",disableClosing:!0,cancelText:"Отмена",submitText:"Удалить",children:e.jsx(o,{id:"modal-input-disabled",placeholder:"Введите подтверждение"})},parameters:{docs:{description:{story:"Окно нельзя закрыть кликом по оверлею или Escape — только через кнопки. Используется для критических действий."}}}},c={name:"Загрузка при сабмите",render:t=>e.jsx(n,{...t}),args:{title:"Сохранить изменения",submitText:"Сохранить",cancelText:"Отменить",submitLoading:!0,children:e.jsx(o,{id:"modal-input-loading",placeholder:"Placeholder"})},parameters:{docs:{description:{story:"Кнопка подтверждения показывает лоадер во время выполнения асинхронного действия."}}}};var m,u,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "С полем ввода",
  render: args => <ModalDemo {...args} />,
  args: {
    title: "Заголовок",
    subtitle: "Сопутствующее сообщение",
    cancelText: "Отменить",
    submitText: "Выполнить",
    children: <Input id="modal-input" placeholder="Placeholder" />
  },
  parameters: {
    docs: {
      description: {
        story: "Базовый вариант с заголовком, описанием, полем ввода и двумя кнопками действий."
      }
    }
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,x,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "С выпадающим списком",
  render: args => <ModalDemo {...args} />,
  args: {
    title: "Сменить язык",
    subtitle: "Выберите из списка",
    cancelText: "Отменить",
    submitText: "Сохранить",
    children: <Select name="lang" value="" onChange={() => {}} options={[{
      value: "ru",
      label: "Русский"
    }, {
      value: "en",
      label: "Английский"
    }, {
      value: "it",
      label: "Итальянский"
    }]} />
  },
  parameters: {
    docs: {
      description: {
        story: "Модальное окно с выбором из списка."
      }
    }
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var T,C,M;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "С кнопкой закрытия",
  render: args => <ModalDemo {...args} />,
  args: {
    title: "Заголовок",
    subtitle: "Сопутствующее сообщение",
    showCloseButton: true,
    cancelText: "Отменить",
    submitText: "Выполнить",
    children: <Input id="modal-input-close" placeholder="Placeholder" />
  },
  parameters: {
    docs: {
      description: {
        story: "Кнопка × в правом верхнем углу — альтернативный способ закрытия помимо оверлея и Escape."
      }
    }
  }
}`,...(M=(C=i.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var S,y,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "С заголовком H3-Wide",
  render: args => <ModalDemo {...args} />,
  args: {
    title: "Заголовок по центру",
    titleVariant: "H3-Wide",
    subtitle: "Сопутствующее сообщение",
    cancelText: "Отменить",
    submitText: "Выполнить",
    children: <Input id="modal-input-wide-title" placeholder="Placeholder" />
  },
  parameters: {
    docs: {
      description: {
        story: "Заголовок модального окна можно отрисовать в заголовочной типографике, например \`H3-Wide\`."
      }
    }
  }
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var W,H,P;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "С мобильной sheet-анимацией",
  render: args => <ModalDemo {...args} />,
  args: {
    title: "Заголовок по центру",
    titleVariant: "H3-Wide",
    subtitle: "На мобильном экране модалка выезжает снизу",
    animateMobileSheet: true,
    cancelText: "Отменить",
    submitText: "Выполнить",
    children: <Input id="modal-input-animated-mobile" placeholder="Placeholder" />
  },
  parameters: {
    docs: {
      description: {
        story: "Opt-in анимация для мобильного представления модалки. На desktop поведение остаётся обычным."
      }
    }
  }
}`,...(P=(H=l.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var D,f,B;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Без закрытия по оверлею",
  render: args => <ModalDemo {...args} />,
  args: {
    title: "Подтвердите действие",
    subtitle: "Это действие нельзя отменить",
    disableClosing: true,
    cancelText: "Отмена",
    submitText: "Удалить",
    children: <Input id="modal-input-disabled" placeholder="Введите подтверждение" />
  },
  parameters: {
    docs: {
      description: {
        story: "Окно нельзя закрыть кликом по оверлею или Escape — только через кнопки. Используется для критических действий."
      }
    }
  }
}`,...(B=(f=d.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var v,E,I;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Загрузка при сабмите",
  render: args => <ModalDemo {...args} />,
  args: {
    title: "Сохранить изменения",
    submitText: "Сохранить",
    cancelText: "Отменить",
    submitLoading: true,
    children: <Input id="modal-input-loading" placeholder="Placeholder" />
  },
  parameters: {
    docs: {
      description: {
        story: "Кнопка подтверждения показывает лоадер во время выполнения асинхронного действия."
      }
    }
  }
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const Be=["Default","WithDropdown","WithCloseButton","WideTitle","AnimatedMobileSheet","DisabledClosing","LoadingSubmit"];export{l as AnimatedMobileSheet,r as Default,d as DisabledClosing,c as LoadingSubmit,s as WideTitle,i as WithCloseButton,a as WithDropdown,Be as __namedExportsOrder,fe as default};
