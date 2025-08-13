# Cursor Logs

## Проект: React + TypeScript + Tailwind CSS + Vite

### 2024-12-19
- **Задача**: Создание нового проекта на React с TypeScript и Tailwind CSS
- **Технологии**: React, TypeScript, Tailwind CSS, Vite
- **Статус**: Добавлена поисковая строка на 476px ниже хедера

### Действия:
1. ✅ Создание cursor-logs.md
2. ✅ Создание проекта через Vite (npm create vite@latest)
3. ✅ Настройка TypeScript (tsconfig.json)
4. ✅ Настройка Tailwind CSS (tailwind.config.js)
5. ✅ Создание структуры проекта (components, pages, hooks, types)
6. ✅ Создание базовых компонентов (Button, Card)
7. ✅ Создание лендинга с мотивирующей фотографией
8. ✅ Упрощение лендинга - оставлена только фотография
9. ✅ Настройка правильного пути к изображению (/images/landing.png)
10. ✅ Настройка полного экрана без отступов и границ
11. ✅ Максимальное упрощение - только img тег с фотографией
12. ✅ Исправление масштабирования - фотография теперь покрывает весь экран
13. ✅ Исправление белых отступов - использовано position: fixed
14. ✅ Создание хедера с навигацией (О платформе, Менторы, Отзывы, FAQ)
15. ✅ Добавление шрифта AA Stetica
16. ✅ Обновление расположения элементов в хедере согласно дизайну
17. ✅ Использование правильного пути к шрифту AA Stetica Medium.otf
18. ✅ Исправление проблем с шрифтом и цветом текста
19. ✅ Изменение расположения на равномерные отступы с центрированием
20. ✅ Исправление отступов с использованием собственных CSS правил
21. ✅ Исправление пути к шрифту - файл лежит в корне public папки
22. ✅ Замена текста "GC EDUCATION" на изображение logo.png
23. ✅ Задание точных размеров хедера 1351×61 пикселей
24. ✅ Добавление поисковой строки на 476px ниже хедера

### Структура проекта:
```
src/
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Header.tsx (хедер с точными размерами 1351×61px)
│   └── SearchBar.tsx (поисковая строка)
├── pages/
│   └── Home.tsx (фотография + хедер + поисковая строка)
├── App.tsx
└── index.css (Tailwind CSS + стили для хедера и поисковой строки)

public/
├── images/
│   ├── landing.png (мотивирующая фотография)
│   └── logo.png (логотип GC Education)
└── AA Stetica Medium.otf (шрифт в корне public папки)
```

### Важно:
- Хедер зафиксирован поверх фотографии (position: fixed, z-50)
- **Точные размеры**: 1351×61 пикселей
- **Отступ сверху**: 39px от верха экрана
- **Поисковая строка**: на 476px ниже хедера, по центру
- **Новое расположение**: О платформе | Менторы | [Логотип] | Отзывы | FAQ
- **Отступы**: 300px между элементами
- **Логотип**: Изображение logo.png вместо текста
- **Размер логотипа**: 3rem высота с сохранением пропорций
- **Текст**: размер 30px, шрифт AA Stetica, без переноса строки
- **Поисковая строка**: полупрозрачная с blur эффектом, 400px ширина 

- Implemented dynamic header blur on scroll:
  - Added requestAnimationFrame-coalesced scroll listener with passive option and 10px threshold in `src/components/Header.tsx` to toggle `header--scrolled`.
  - Introduced CSS variables in `src/index.css` for easy tuning: `--header-blur`, `--header-bg`, `--header-shadow`.
  - Updated `header` transitions to target only background/filter properties and added `-webkit-backdrop-filter` for Safari.
  - Kept centered logo and adjustable per-item spacing intact. 