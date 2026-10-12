# Alena Tzur — Design Tokens

## Цветовая палитра

### Шкалы цветов (50–950, OKLCH perceptual interpolation)

| Тон | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|-----|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| **Milk** | `#F8F5F2` | `#F8F5F2` | `#F8F5F2` | `#F8F5F2` | `#F8F5F2` | `#F8F5F2` | `#E1DEDB` | `#C6C3C1` | `#A5A3A1` | `#787675` | `#000000` |
| **Powder Nude** | `#FFFFFF` | `#E8D6D1` | `#E8D6D1` | `#E8D6D1` | `#E8D6D1` | `#E8D6D1` | `#D0BEB9` | `#B7A6A1` | `#9D948F` | `#84817C` | `#3E3C3A` |
| **Dusty Rose** | `#FFFFFF` | `#F7ECE9` | `#F0E0DC` | `#E6CFC9` | `#DDBDB6` | `#C9A6A0` | `#B8958F` | `#A7847E` | `#96736D` | `#85625C` | `#3E3C3A` |
| **Warm Taupe** | `#FFFFFF` | `#F3F1EF` | `#E7E3E0` | `#D8D2CE` | `#C7BFB9` | `#9B817B` | `#8B736D` | `#7A645F` | `#69544F` | `#58443F` | `#2B2625` |
| **Deep Chocolate** | `#FFFFFF` | `#F6F3F2` | `#ECE7E5` | `#DCD4D1` | `#C7BAB5` | `#332B29` | `#2C2523` | `#25201E` | `#1E1A18` | `#171412` | `#000000` |
| **Champagne** | `#FFFFFF` | `#F7F2E8` | `#F0E8D6` | `#E5D9BE` | `#D3C29A` | `#C8AD82` | `#B9A275` | `#A99268` | `#99825C` | `#897250` | `#3A332B` |
| **Fresh Sky Blue** | `#FFFFFF` | `#F1F6F6` | `#E3EDEE` | `#D2E0E1` | `#BED2D3` | `#DCE3E3` | `#C9D7D8` | `#B5C8CA` | `#A2B7B9` | `#8FA7A9` | `#3A4A4C` |

### Семантические алиасы

| Семантический токен | Базовый тон | Шкала | Использование |
|---------------------|-------------|-------|---------------|
| `--color-background` | Milk | 50 | Основной фон страницы |
| `--color-surface` | Powder Nude | 100 | Карточки, крупные блоки |
| `--color-surface-elevated` | Milk | 100 | Вынесенные элементы, навигация |
| `--color-primary` | Dusty Rose | 500 | Акценты, кнопки primary |
| `--color-primary-hover` | Dusty Rose | 600 | Hover состояния кнопок |
| `--color-secondary` | Warm Taupe | 500 | Вторичный текст, элементы |
| `--color-accent` | Champagne | 500 | Премиум детали, иконки |
| `--color-medical` | Fresh Sky Blue | 500 | Медицинские блоки, tech |
| `--color-text-primary` | Deep Chocolate | 500 | Заголовки, основной текст |
| `--color-text-secondary` | Warm Taupe | 600 | Вторичный текст, подписи |
| `--color-border` | Powder Nude | 300 | Границы, разделители |
| `--color-focus` | Champagne | 400 | Фокус-кольца |

### Пропорции

- **Milk — 70%** (фон, воздух, чистота)
- **Powder Nude — 20%** (карточки, блоки)
- **Dusty Rose — 5%** (акценты, активные состояния)
- **Champagne — 3%** (премиум детали, иконки)
- **Fresh Sky Blue — 2%** (медицинские/tech блоки)

## Типографика

### Семейства шрифтов

| Роль | Шрифт | Переменная | Вес | Субсеты |
|------|-------|------------|-----|---------|
| Заголовки | Playfair Display | `--font-serif` | 400, 500, 600, 700 | latin, cyrillic |
| Тело | Inter | `--font-sans` | 300, 400, 500, 600, 700 | latin, cyrillic |
| Акцент (опц.) | Dancing Script | `--font-accent` | 400 | latin |

### Масштаб типографики

| Токен | Размер | Line-height | Использование |
|-------|--------|-------------|---------------|
| `--text-xs` | 0.875rem | 1.4 | Мелкий текст |
| `--text-sm` | 0.9375rem | 1.4 | Подписи |
| `--text-base` | 1rem | 1.5 | Основной текст |
| `--text-lg` | 1.125rem | 1.5 | Промежуточный текст |
| `--text-xl` | 1.25rem | 1.4 | Подзаголовки |
| `--text-2xl` | 1.5625rem | 1.3 | Мелкие заголовки |
| `--text-3xl` | 1.875rem | 1.25 | Заголовки секций |
| `--text-4xl` | 2.25rem | 1.2 | Крупные заголовки |
| `--text-5xl` | 2.75rem | 1.15 | Hero-заголовки |
| `--text-6xl` | 3.25rem | 1.1 | Крупный Hero |
| `--text-7xl` | 4rem | 1.05 | Максимальный размер |

## Пространство, скругление, тени

### Скругление

| Токен | Значение |
|-------|----------|
| `--radius-sm` | 0.375rem |
| `--radius-md` | 0.5rem |
| `--radius-lg` | 0.75rem |
| `--radius-xl` | 1rem |
| `--radius-2xl` | 1.5rem |

### Тени

| Токен | Значение |
|-------|----------|
| `--shadow-sm` | 0 2px 6px -2px rgb(51 43 41 / 0.08) |
| `--shadow-md` | 0 8px 20px -6px rgb(51 43 41 / 0.12) |
| `--shadow-lg` | 0 16px 32px -8px rgb(51 43 41 / 0.14) |

## Компоненты

### Кнопки

| Вариант | Фон | Текст | Hover |
|---------|-----|-------|-------|
| `.btn-primary` | `--color-primary` | `--color-text-primary` | `--color-primary-hover` |
| `.btn-secondary` | `--color-surface` | `--color-text-primary` | `--color-surface-elevated` |
| `.btn-medical` | `--color-medical` | `--color-text-primary` | `--fresh-sky-blue-600` |

### Карточки

| Вариант | Фон | Border | Shadow |
|---------|-----|--------|--------|
| `.card` | `--color-surface` | `--color-border` | `--shadow-sm` |

### Инпуты

- `.input-base`: фон `--color-surface-elevated`, border `--color-border`, текст `--color-text-primary`, placeholder `--color-accent`, focus `--color-focus`

## Анимации

| Класс | Описание |
|-------|----------|
| `.animate-fade-up` | Fade in + translateY (0.8s) |
| `.animate-scale-in` | Fade in + scale (0.7s) |

## Сводка изменений

- `globals.css`: полностью перезаписан с новой цветовой системой и семантическими алиасами
- `layout.tsx`: Playfair Display + Inter вместо Nunito
- UI-компоненты (6 файлов): все hardcoded hex заменены на семантические переменные
- Секционные компоненты (10 файлов): все hardcoded hex заменены на семантические переменные
- `design-tokens.md`: созданная документация
- Исправлено: `--color-primary` теперь использует `var(--dusty-rose-500)` вместо hardcoded hex
- Исправлено: дублирование CSS переменных в globals.css
- Добавлены utility классы для цветовых токенов в `@layer utilities`
