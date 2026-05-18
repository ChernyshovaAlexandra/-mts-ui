import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as v}from"./index-Dx_1l3Sb.js";import{M as D}from"./Modal-B4nLn0XP.js";import{I as l}from"./Input-CR8KxtSK.js";import{S as E}from"./Select-CDebTjzZ.js";import{B as I}from"./Button-DfpABke-.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DoeU9KPV.js";import"./index-B6ujFmsw.js";import"./styled-components.browser.esm-y4XIFzD1.js";import"./mixins-ib8c4tLP.js";import"./index-B66h-egn.js";import"./Card-CtToN61-.js";import"./IconYoutube-CikJe2Kh.js";import"./createIcon-DXdYUD03.js";import"./Text-BGtrDhtg.js";import"./style-CYyl-vEM.js";/* empty css              */import"./style-CaScT4Df.js";import"./IconAttention-OHJemvOI.js";import"./genStyleUtils-DZ7vnBUQ.js";import"./useIcons-BKGFv49f.js";import"./omit-Z8POZ-D9.js";import"./Keyframes-CIbZ7YnR.js";import"./IconBookmark-CFJE0vQI.js";import"./IconOut-BVbMsUOi.js";import"./IconLeft-C3XBBr1z.js";import"./IconDate-BrvuUuHU.js";import"./IconTime-Bvy4Z0sQ.js";import"./IconLink-CnepHNOO.js";import"./IconChevronRight-jbCZTIeY.js";import"./IconCross-DrP_deE0.js";import"./IconMore-B_vxfzTm.js";import"./IconPicture-B6KsTlBs.js";import"./IconEdit--ReOD0mK.js";import"./BottomSheet-Bz-_wCEr.js";import"./index-C5BeFhru.js";import"./Spinner-5z9YM4jE.js";const xe={title:"МТС/Modal",component:D,tags:["autodocs"],parameters:{docs:{description:{component:`
**Modal** — диалоговое окно для подтверждения действий, ввода данных или отображения важной информации. Рендерится через портал в \`document.body\`.

### Поведение

- Открытие/закрытие управляется снаружи через \`isModalOpen\` и \`handleClose\`
- При открытии блокирует скролл страницы
- Закрывается по клику на оверлей или клавише \`Escape\`
- \`disableClosing={true}\` — полностью отключает оба способа закрытия
- На мобильных устройствах (< 480px) прижимается к нижнему краю экрана как Bottom Sheet

### Структура

\`\`\`
Modal
├── MobileIndicator  (drag-handle на мобилке)
├── CloseButton      (опционально, showCloseButton)
├── Header           (title + subtitle)
├── Body             (children)
└── Footer           (cancelText + submitText)
\`\`\`
        `}}},argTypes:{isModalOpen:{description:"Управляет видимостью модального окна.",control:"boolean"},handleClose:{description:"Коллбек закрытия — вызывается по клику на оверлей или Escape."},title:{description:"Заголовок модального окна.",control:"text"},subtitle:{description:"Подзаголовок или описание под заголовком.",control:"text"},showCloseButton:{description:"Показывает кнопку закрытия (×) в правом верхнем углу.",control:"boolean"},disableClosing:{description:"Запрещает закрытие по оверлею и Escape. Пользователь может закрыть только через кнопки действий.",control:"boolean"},cancelText:{description:"Текст кнопки отмены. Если не передан — кнопка не отображается.",control:"text"},submitText:{description:"Текст кнопки подтверждения. Если не передан — кнопка не отображается.",control:"text"},submitDisabled:{description:"Блокирует кнопку подтверждения.",control:"boolean"},submitLoading:{description:"Показывает лоадер на кнопке подтверждения во время выполнения действия.",control:"boolean"},onSubmit:{description:"Коллбек нажатия на кнопку подтверждения."},onCancel:{description:"Коллбек нажатия на кнопку отмены. Если не передан — при нажатии вызывается `handleClose`."},modalStyle:{description:"Дополнительные стили для контейнера модального окна.",control:!1},children:{control:!1}}},o=t=>{const[B,d]=v.useState(!1);return e.jsxs("div",{style:{padding:24},children:[e.jsx(I,{btn_type:"button",variant:"primary",width:"auto",onClick:()=>d(!0),children:"Открыть модальное окно"}),e.jsx(D,{...t,isModalOpen:B,handleClose:()=>d(!1)})]})},n={name:"С полем ввода",render:t=>e.jsx(o,{...t}),args:{title:"Заголовок",subtitle:"Сопутствующее сообщение",cancelText:"Отменить",submitText:"Выполнить",children:e.jsx(l,{id:"modal-input",placeholder:"Placeholder"})},parameters:{docs:{description:{story:"Базовый вариант с заголовком, описанием, полем ввода и двумя кнопками действий."}}}},r={name:"С выпадающим списком",render:t=>e.jsx(o,{...t}),args:{title:"Сменить язык",subtitle:"Выберите из списка",cancelText:"Отменить",submitText:"Сохранить",children:e.jsx(E,{name:"lang",value:"",onChange:()=>{},options:[{value:"ru",label:"Русский"},{value:"en",label:"Английский"},{value:"it",label:"Итальянский"}]})},parameters:{docs:{description:{story:"Модальное окно с выбором из списка."}}}},s={name:"С кнопкой закрытия",render:t=>e.jsx(o,{...t}),args:{title:"Заголовок",subtitle:"Сопутствующее сообщение",showCloseButton:!0,cancelText:"Отменить",submitText:"Выполнить",children:e.jsx(l,{id:"modal-input-close",placeholder:"Placeholder"})},parameters:{docs:{description:{story:"Кнопка × в правом верхнем углу — альтернативный способ закрытия помимо оверлея и Escape."}}}},a={name:"Без закрытия по оверлею",render:t=>e.jsx(o,{...t}),args:{title:"Подтвердите действие",subtitle:"Это действие нельзя отменить",disableClosing:!0,cancelText:"Отмена",submitText:"Удалить",children:e.jsx(l,{id:"modal-input-disabled",placeholder:"Введите подтверждение"})},parameters:{docs:{description:{story:"Окно нельзя закрыть кликом по оверлею или Escape — только через кнопки. Используется для критических действий."}}}},i={name:"Загрузка при сабмите",render:t=>e.jsx(o,{...t}),args:{title:"Сохранить изменения",submitText:"Сохранить",cancelText:"Отменить",submitLoading:!0,children:e.jsx(l,{id:"modal-input-loading",placeholder:"Placeholder"})},parameters:{docs:{description:{story:"Кнопка подтверждения показывает лоадер во время выполнения асинхронного действия."}}}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,b,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var g,h,T;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(T=(h=s.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var C,y,j;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var M,S,f;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const ge=["Default","WithDropdown","WithCloseButton","DisabledClosing","LoadingSubmit"];export{n as Default,a as DisabledClosing,i as LoadingSubmit,s as WithCloseButton,r as WithDropdown,ge as __namedExportsOrder,xe as default};
