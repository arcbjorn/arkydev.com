// =============================================================================
// UNIFIED CONSTANTS AND ENUMS
// =============================================================================

// Re-export language and i18n enums for convenience
export { ELanguage, EToken } from '$l18n/enums';

// =============================================================================
// COMPANY INFORMATION
// =============================================================================

export enum ECompanyName {
  ABBREVIATION = 'ASDC',
  SHORT = 'Arky',
  FULL = 'Arky Development',
  EXTENDED = 'Arky Software Development Corporation'
}

export enum ECompanyEmail {
  HELLO = 'hi@arkydev.com',
  PRIVACY = 'privacy@arkydev.com'
}

export enum ECompanyContact {
  LEGAL_ID = '316366767',
  TELEGRAM_URL = 'https://t.me/arcbjorn',
  ANALYTICS_URL = 'https://analytics.arcbjorn.com/script.js',
  ANALYTICS_WEBSITE_ID = 'd3a64e54-38b9-4bc2-8206-3ab1c92c2564'
}

// =============================================================================
// THEME & UI
// =============================================================================

export enum ETheme {
  LIGHT = 'light',
  DARK = 'dark'
}

export enum EIconName {
  SUN = 'sun',
  MOON = 'moon',
  MENU = 'menu',
  CLOSE = 'close'
}

export enum EButtonVariant {
  NAV = 'nav',
  ACTION = 'action',
  MOBILE_NAV = 'mobile-nav',
  TOGGLE = 'toggle'
}

// =============================================================================
// NAVIGATION
// =============================================================================

export enum ERoutes {
  HOME = '/',
  LEGAL = '/legal',
  PRIVACY = '/privacy',
  TERMS = '/terms'
}

// Navigation anchors are defined in routes/types.ts to avoid circular imports

// =============================================================================
// SERVICES
// =============================================================================

export enum EServiceIcon {
  CONSULTING = 'ConsultingIcon',
  SYSTEM_ARCHITECTURE = 'SystemArchitectureIcon',
  TEAM = 'TeamIcon',
  COMPLETE_SOLUTION = 'CompleteSolutionIcon'
}

// =============================================================================
// TECHNOLOGIES & PARTNERS
// =============================================================================

export const COMPANY_PARTNERS = [
  'Alphabet',
  'IBM',
  'Binance',
  'Chime',
  'Hitachi',
  'Microsoft',
  'TD Canada Trust'
] as const;

// =============================================================================
// RESPONSIVE BREAKPOINTS
// =============================================================================

export enum EBreakpoint {
  XS_2 = '325px',
  XS = '475px',
  SM = '640px',
  MD = '768px',
  LG = '1024px',
  XL = '1280px',
  XL_2 = '1536px'
}

// =============================================================================
// TIMING & ANIMATIONS
// =============================================================================

export enum EAnimationDuration {
  FAST = '150ms',
  NORMAL = '300ms',
  SLOW = '500ms'
}

// =============================================================================
// LAZY LOADING
// =============================================================================

export const LAZY_LOAD_DEFAULTS = {
  THRESHOLD: 0.1,
  ROOT_MARGIN: '100px'
} as const;

// =============================================================================
// TYPE GUARDS & UTILITIES
// =============================================================================

export const isValidTheme = (theme: string): theme is ETheme => {
  return Object.values(ETheme).includes(theme as ETheme);
};

export const isValidIconName = (icon: string): icon is EIconName => {
  return Object.values(EIconName).includes(icon as EIconName);
};

export const isValidButtonVariant = (variant: string): variant is EButtonVariant => {
  return Object.values(EButtonVariant).includes(variant as EButtonVariant);
};