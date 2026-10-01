import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./index-mIjS73Jk.js";import{M as u}from"./Modal-C5E1Z1cH.js";import{I as o}from"./Input-xwFXvypX.js";import{S as F}from"./Select-BAgnykPg.js";import{B as A}from"./Button-pyJ4to3r.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BssJU-4Y.js";import"./index-XdMz6ftz.js";import"./styled-components.browser.esm-UUNjPRYl.js";import"./mixins-DAii6Zu4.js";import"./index-CA_YInif.js";import"./proxy-CIa9PebR.js";import"./IconYoutube-D-UZz_iv.js";import"./createIcon-CuvqBQrk.js";import"./Header-DprKSdQX.js";/* empty css              */import"./Text-DOS6fvGo.js";import"./style-ZrP7Bi_n.js";import"./BottomSheet-DkpikOES.js";import"./style-CSv-hX4L.js";import"./IconAttention--HYYox4d.js";import"./objectWithoutProperties-D1XObzAp.js";import"./IconOut-D6k_3EUx.js";import"./IconLeft-DbBqVjkY.js";import"./IconHeart-B_1rb55T.js";import"./IconDate-ChNgKphX.js";import"./IconTime-7NljV5W2.js";import"./IconStar-CUCWIUHE.js";import"./IconBookmark-U8AH2tun.js";import"./IconChevronRight-CervqCqb.js";import"./IconCross-Hq3MVGUf.js";import"./IconChevronDown-LTfZxiQ4.js";import"./IconMore-DqM9uH_d.js";import"./IconLink-BtOXviCL.js";import"./IconPicture-DxNKMXCq.js";import"./IconCrossCircle-Cy9z4wAD.js";import"./IconQuestion-CcEd_lUF.js";import"./IconEdit-BUsjAjR1.js";import"./Spinner-Cwbmsakg.js";const He={title:"МТС/Modal",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{isModalOpen:{description:"Управляет видимостью модального окна.",control:"boolean"},handleClose:{description:"Коллбек закрытия — вызывается по клику на оверлей или Escape."},title:{description:"Заголовок модального окна.",control:"text"},titleVariant:{description:"Типографика заголовка. Поддерживает варианты Text и Header, например `H3-Wide`.",control:"select",options:["P3-Medium-Comp","P3-Bold-Comp","P3-Regular-Comp","P4-Bold-Comp","P4-Medium-Comp","P4-Regular-Comp","H1-Wide","H2-Wide","H3-Wide","H4-Wide","H4-Comp"]},subtitle:{description:"Подзаголовок или описание под заголовком.",control:"text"},animateMobileSheet:{description:"Включает анимацию выезда модалки снизу на мобильных экранах.",control:"boolean"},showCloseButton:{description:"Показывает кнопку закрытия (×) в правом верхнем углу.",control:"boolean"},disableClosing:{description:"Запрещает закрытие по оверлею и Escape. Пользователь может закрыть только через кнопки действий.",control:"boolean"},cancelText:{description:"Текст кнопки отмены. Если не передан — кнопка не отображается.",control:"text"},submitText:{description:"Текст кнопки подтверждения. Если не передан — кнопка не отображается.",control:"text"},submitDisabled:{description:"Блокирует кнопку подтверждения.",control:"boolean"},submitLoading:{description:"Показывает лоадер на кнопке подтверждения во время выполнения действия.",control:"boolean"},onSubmit:{description:"Коллбек нажатия на кнопку подтверждения."},onCancel:{description:"Коллбек нажатия на кнопку отмены. Если не передан — при нажатии вызывается `handleClose`."},modalStyle:{description:"Дополнительные стили для контейнера модального окна.",control:!1},children:{control:!1}}},n=t=>{const[s,h]=_.useState(!1);return e.jsxs("div",{style:{padding:24},children:[e.jsx(A,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>h(!0),children:"Открыть модальное окно"}),e.jsx(u,{...t,isModalOpen:s,handleClose:()=>h(!1)})]})},a={name:"С полем ввода",render:t=>e.jsx(n,{...t}),args:{title:"Заголовок",subtitle:"Сопутствующее сообщение",cancelText:"Отменить",submitText:"Выполнить",children:e.jsx(o,{id:"modal-input",placeholder:"Placeholder"})},parameters:{docs:{description:{story:"Базовый вариант с заголовком, описанием, полем ввода и двумя кнопками действий."}}}},i={name:"С выпадающим списком",render:t=>e.jsx(n,{...t}),args:{title:"Сменить язык",subtitle:"Выберите из списка",cancelText:"Отменить",submitText:"Сохранить",children:e.jsx(F,{name:"lang",value:"",onChange:()=>{},options:[{value:"ru",label:"Русский"},{value:"en",label:"Английский"},{value:"it",label:"Итальянский"}]})},parameters:{docs:{description:{story:"Модальное окно с выбором из списка."}}}},l={name:"С кнопкой закрытия",render:t=>e.jsx(n,{...t}),args:{title:"Заголовок",subtitle:"Сопутствующее сообщение",showCloseButton:!0,cancelText:"Отменить",submitText:"Выполнить",children:e.jsx(o,{id:"modal-input-close",placeholder:"Placeholder"})},parameters:{docs:{description:{story:"Кнопка × в правом верхнем углу — альтернативный способ закрытия помимо оверлея и Escape."}}}},d={name:"С заголовком H3-Wide",render:t=>e.jsx(n,{...t}),args:{title:"Заголовок по центру",titleVariant:"H3-Wide",subtitle:"Сопутствующее сообщение",cancelText:"Отменить",submitText:"Выполнить",children:e.jsx(o,{id:"modal-input-wide-title",placeholder:"Placeholder"})},parameters:{docs:{description:{story:"Заголовок модального окна можно отрисовать в заголовочной типографике, например `H3-Wide`."}}}},c={name:"С мобильной sheet-анимацией",render:t=>e.jsx(n,{...t}),args:{title:"Заголовок по центру",titleVariant:"H3-Wide",subtitle:"На мобильном экране модалка выезжает снизу",animateMobileSheet:!0,cancelText:"Отменить",submitText:"Выполнить",children:e.jsx(o,{id:"modal-input-animated-mobile",placeholder:"Placeholder"})},parameters:{docs:{description:{story:"Opt-in анимация для мобильного представления модалки. На desktop поведение остаётся обычным."}}}},p={name:"Без закрытия по оверлею",render:t=>e.jsx(n,{...t}),args:{title:"Подтвердите действие",subtitle:"Это действие нельзя отменить",disableClosing:!0,cancelText:"Отмена",submitText:"Удалить",children:e.jsx(o,{id:"modal-input-disabled",placeholder:"Введите подтверждение"})},parameters:{docs:{description:{story:"Окно нельзя закрыть кликом по оверлею или Escape — только через кнопки. Используется для критических действий."}}}},m={name:"Загрузка при сабмите",render:t=>e.jsx(n,{...t}),args:{title:"Сохранить изменения",submitText:"Сохранить",cancelText:"Отменить",submitLoading:!0,children:e.jsx(o,{id:"modal-input-loading",placeholder:"Placeholder"})},parameters:{docs:{description:{story:"Кнопка подтверждения показывает лоадер во время выполнения асинхронного действия."}}}},r=()=>{const[t,s]=_.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(A,{variant:"primary",onClick:()=>s(!0),children:"Открыть"}),e.jsx(u,{isModalOpen:t,handleClose:()=>s(!1),title:"Твоя история",mobilePresentation:"bottom-sheet",showCloseButton:!0,children:e.jsx("p",{children:"На мобильном экране содержимое откроется в BottomSheet."})})]})};r.__docgenInfo={description:"",methods:[],displayName:"ResponsiveSheet"};var b,x,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var T,C,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var M,y,j;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var B,W,f;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(f=(W=d.parameters)==null?void 0:W.docs)==null?void 0:f.source}}};var P,H,v;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(v=(H=c.parameters)==null?void 0:H.docs)==null?void 0:v.source}}};var D,O,w;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(w=(O=p.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var I,E,R;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(E=m.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var k,L,V;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <>
    <Button variant="primary" onClick={() => setOpen(true)}>Открыть</Button>
    <Modal isModalOpen={open} handleClose={() => setOpen(false)} title="Твоя история" mobilePresentation="bottom-sheet" showCloseButton>
      <p>На мобильном экране содержимое откроется в BottomSheet.</p>
    </Modal>
  </>;
}`,...(V=(L=r.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const ve=["Default","WithDropdown","WithCloseButton","WideTitle","AnimatedMobileSheet","DisabledClosing","LoadingSubmit","ResponsiveSheet"];export{c as AnimatedMobileSheet,a as Default,p as DisabledClosing,m as LoadingSubmit,r as ResponsiveSheet,d as WideTitle,l as WithCloseButton,i as WithDropdown,ve as __namedExportsOrder,He as default};
