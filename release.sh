#!/bin/bash

set -e

echo "🚀 Starting release..."

# Коммитим локальные изменения, если они есть
if [ -n "$(git status --porcelain)" ]; then
  echo "🔧 Committing local changes..."
  npm run build
  git add .
  git commit -m "chore: release"
fi

# Повышаем версию (patch). Создаст коммит "x.y.z" и тег vx.y.z
echo "🔢 Bumping version..."
npm version patch

# Публикуем пакет в GitHub Registry. Если упадёт — push не выполнится (set -e)
echo "📤 Publishing package to GitHub Registry..."
npm publish --registry=https://npm.pkg.github.com

# Пушим на main вместе с тегом версии
echo "📦 Pushing to origin/main with tags..."
git push origin main --follow-tags

# Деплоим Storybook
echo "📘 Deploying Storybook..."
npm run deploy-storybook

echo "✅ Release complete!"
