# @mts/ui

UI-библиотека компонентов на React с использованием TypeScript и Storybook.

## Оглавление
- [Особенности](#особенности)
- [Установка](#установка)
- [Использование](#использование)
- [Скрипты](#скрипты)
- [Сборка пакета](#сборка-пакета)
- [Storybook](#storybook)
- [Публикация](#публикация)
- [Структура проекта](#структура-проекта)
- [Лицензия](#лицензия)

## Особенности
- Набор часто используемых UI-компонентов (Button, Link, Modal и т.д.).
- Поддержка TypeScript.
- Продвинутая стилизация через styled-components.
- Документация и примеры использования в Storybook.
- Подготовка для приватной публикации в GitHub Packages или другое хранилище.

## Установка

\`\`\`bash
npm install @mts/ui
\`\`\`

> Если вы используете GitHub Packages или другой приватный реестр, убедитесь, что настроен **.npmrc** и правильная аутентификация.

## Использование

```tsx
import React from "react";
import { Button } from "@mts/ui";

const App = () => (
  <div>
    <Button
      variant="primary"
      btn_type="button"
      onClick={() => console.log("Clicked!")}
    >
      Нажми меня
    </Button>
  </div>
);

export default App;