/**
 * Константы для анимаций, порогов и других magic numbers
 * Централизованное место для настройки UX параметров
 */

export const ANIMATION = {
  /** Базовая длительность fade-up анимации */
  FADE_UP_DURATION: 0.8,
  /** Базовая длительность scale-in анимации */
  SCALE_IN_DURATION: 0.7,
  /** Длительность анимации секций (desktop) */
  SECTION_DURATION_DESKTOP: 0.7,
  /** Длительность анимации секций (mobile) */
  SECTION_DURATION_MOBILE: 0.3,
  /** Задержка между элементами в stagger */
  STAGGER_DELAY: 0.1,
  /** Задержка между модулями в сетке */
  MODULE_STAGGER_DELAY: 0.08,
  /** Easing функция для плавных анимаций */
  EASE_SMOOTH: [0.16, 1, 0.3, 1] as const,
  /** Easing для мобильных (упрощенная) */
  EASE_MOBILE: undefined,
} as const;

export const VIEWPORT = {
  /** Margin для IntersectionObserver секций */
  SECTION_MARGIN: "-100px",
  /** Порог срабатывания анимации секций */
  SECTION_THRESHOLD: 0,
} as const;

export const NAVBAR = {
  /** Порог скролла для появления фона навигации (px) */
  SCROLL_THRESHOLD: 20,
  /** Высота навигации для расчетов отступов */
  HEIGHT: 72,
} as const;

export const SCROLL_PROGRESS = {
  /** Высота прогресс-бара (px) */
  HEIGHT: 3,
  /** Z-index */
  Z_INDEX: 60,
} as const;