#!/bin/bash

set -e

echo "🚀 Starting release..."

# Проверка: есть ли коммиты
if [ -n "$(git status --porcelain)" ]; then
  echo "🔧 Committing local changes..."
  git add .
  git commit -m "chore: release"
fi

# Пушим на main
echo "📦 Pushing to origin/main..."
git push origin main

# Повышаем версию (patch)
echo "🔢 Bumping version..."
npm version patch

# Публикуем пакет
echo "📤 Publishing package to GitHub Registry..."
npm publish

# Деплоим Storybook
echo "📘 Deploying Storybook..."
npm run deploy-storybook

echo "✅ Release complete!"
