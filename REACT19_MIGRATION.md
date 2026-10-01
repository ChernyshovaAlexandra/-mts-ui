# React 19 и исправления из MTS 33

Эта серия изменений переводит библиотеку на React 19. Сборка пакета и публикация
Storybook выполняются существующим release-процессом. Отдельные typecheck, lint
и тесты в рамках миграции не запускались.
Дропзона и выбор файлов в эту серию изменений не входят: ожидается референс MTS.

## React 19

- Peer-зависимости React и React DOM: `^19.0.0`.
- Среда разработки: React и React DOM `^19.3.0`, типы React 19.
- Framer Motion обновлён с 10 до 12 с сохранением существующих импортов.
- Ant Design остаётся на 5; официальный `@ant-design/v5-patch-for-react-19`
  подключён в точке входа библиотеки.
- Глобальный `JSX` заменён на `React.JSX` в публичных типах типографики.
- Удалён неиспользуемый CRA-пресет Storybook: текущая конфигурация использует Vite.
- Обновлён `pnpm-lock.yaml`. Для разработки использовать pnpm; старый
  `yarn.lock` не обновлялся и не отражает эту миграцию.

## Исправления

- Modal и BottomSheet используют единый счётчик блокировки прокрутки. Последнее
  закрытие восстанавливает исходные inline-стили и позицию страницы независимо
  от порядка закрытия вложенных окон. Повторный cleanup безопасен.
- Мобильный Select использует нативную кнопку с фокусом и клавиатурной активацией.
  Новый `focusRef` предоставляет `focus()` и `blur()` в обеих версиях. Старый
  `ref` на экземпляр React Select сохранён для десктопной версии.
- Встроенные обращения в Input, Select, Registration, InlineEdit, CookieBanner
  и Textarea используют «ты».
- Navigation отображает `customBtn` независимо от `withLogin`.
- Breadcrumbs используют существующий Link; `useRouter` включает переходы через
  React Router, обычные ссылки остаются поведением по умолчанию.

## API без проектных CSS-обходов

```tsx
<Button
  variant="primary"
  content="Отправить историю"
  responsiveWidth={{ breakpoint: 1024, maxWidth: 320, wrap: true }}
/>
```

Обычные `maxWidth` и `wrap` применяются на всех экранах. `responsiveWidth`
включается на заданном breakpoint. Стандартные width и перенос не изменены.
Размеры 1024 и 320 — пример настройки потребителя, не значения библиотеки.

```tsx
<BottomSheet isOpen={open} onClose={close} title="Вход" contentPadding>
  <LoginForm />
</BottomSheet>
```

`contentPadding=true` выравнивает содержимое с заголовком и учитывает safe area.
Можно передать CSS-строку. По умолчанию отступы не добавляются для шитов со списками.

```tsx
<Modal
  isModalOpen={open}
  handleClose={close}
  title="Вход"
  mobilePresentation="bottom-sheet"
  mobileBreakpoint={768}
  showCloseButton
>
  <LoginForm />
</Modal>
```

По умолчанию остаётся Modal. Настройки шита передаются через `bottomSheetProps`.
Флаги запрета закрытия и состояния submit работают в обеих версиях.

```tsx
<CookieBanner
  onAccept={accept}
  bottomOffset="calc(72px + env(safe-area-inset-bottom, 0px))"
/>
```

`bottomOffset` принимает число в px или CSS-строку. Поддерживаются `style` и
`className`; нижний внутренний отступ учитывает safe area.

```tsx
<Breadcrumbs useRouter crumbs={[{ name: "Правила", path: "/rules" }]} />
```

Режим `useRouter` требует Router в приложении.

```tsx
const regionFocus = useRef<SelectFocusHandle>(null);
<Select name="region" value={region} onChange={setRegion} focusRef={regionFocus} />
// regionFocus.current?.focus();
```

```tsx
<Textarea label="Твоя история" value={story} onChange={handleChange} rows={7} />
```

Textarea переиспользует стили Input, подпись и ошибку. Принимает нативные props,
ref на HTMLTextAreaElement и `errorMessage`. У выбора файлов отдельный контракт,
который отложен вместе с дропзоной.

```tsx
<ResponsiveNavigation navigation={desktopProps} tabBar={mobileProps}>
  <main>{content}</main>
  <footer>{footer}</footer>
</ResponsiveNavigation>
```

Обёртка использует существующие Navigation и TabBar, фиксирует верхнюю навигацию
на десктопе и нижнюю на мобильном экране. Весь контент и footer помещаются внутрь:
после них резервируется фактическая высота TabBar, включая safe area. Breakpoint
по умолчанию 768 px, доступен prop `breakpoint`. Состав меню и обработчики остаются
за приложением. Ограничение существующего TabBar в пять видимых пунктов сохранено.

## Доставка

Для публикации используется
существующий `npm run release`: он включает build, коммиты, bump версии,
публикацию в GitHub Packages, push и деплой Storybook.
После опубликованного релиза можно обновить MTS 33 и убрать соответствующие
локальные обходы; версия установленной библиотеки сейчас не менялась.
