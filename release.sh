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

# Публикуем пакет в GitHub Registry
echo "📤 Publishing package to GitHub Registry..."
npm publish --registry=https://npm.pkg.github.com

# Деплоим Storybook
echo "📘 Deploying Storybook..."
npm run deploy-storybook

echo "✅ Release complete!"
