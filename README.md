# @chernyshovaalexandra/mtsui

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

```bash
npm install @chernyshovaalexandra/mtsui
```

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
```

[Полная документация доступна здесь](https://chernyshovaalexandra.github.io/-mts-ui/)

## Скрипты

В проекте доступны следующие команды для управления разработкой и сборкой:

```bash
npm run build            # Собирает пакет для публикации.
npm run storybook        # Запускает Storybook для локальной разработки и тестирования компонентов.
npm run publish:package  # Публикует пакет в указанный реестр (например, GitHub Packages).
```

## Сборка пакета
Сборка пакета осуществляется с использованием Rollup или аналогичного инструмента. Процесс включает:

Компиляцию TypeScript в JavaScript.
Минификацию и оптимизацию кода.
Генерацию файлов .d.ts для поддержки TypeScript в проектах, использующих библиотеку.
Для выполнения сборки используйте команду:

```bash
npm run build
```

## Storybook
Storybook используется для разработки, тестирования и документирования компонентов. Он предоставляет:

Изолированную среду для просмотра компонентов.
Возможность тестирования с различными пропсами и состояниями.
Автоматическую генерацию документации на основе историй.
Запустить Storybook можно командой:

```bash
npm run storybook
```

## Публикация
Пакет можно публиковать в приватный реестр, например GitHub Packages. Для этого:

Убедитесь, что у вас есть права доступа к реестру.
Настройте файл .npmrc для указания реестра и аутентификации.
Выполните команду:

```bash
npm run publish:package
```

## Структура проекта
Проект организован следующим образом:

src/components/: Исходный код всех UI-компонентов.
src/styles/: Глобальные стили и темы для компонентов.
src/stories/: Истории для Storybook, демонстрирующие работу компонентов.
src/types/: Общие интерфейсы и типы TypeScript.
dist/: Скомпилированные файлы, готовые к публикации.

## Лицензия
Этот проект распространяется под лицензией MIT.
