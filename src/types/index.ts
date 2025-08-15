import type { EToken, ELanguage } from "$l18n/enums";

export interface Technology {
  name: string;
  icon?: string;
  description?: string;
}

export interface Partner {
  name: string;
  logo?: string;
  url?: string;
}

export interface ServiceBlock {
  icon: string;
  name: EToken;
  description: EToken;
  action: EToken;
  completeSolution?: boolean;
}

export type Theme = 'light' | 'dark';

export type IconName = 'sun' | 'moon' | 'menu' | 'close';

export type ButtonVariant = 'nav' | 'action' | 'mobile-nav' | 'toggle';

export interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export interface ThemeStore {
  subscribe: (callback: (value: Theme) => void) => () => void;
  set: (value: Theme) => void;
  update: (updater: (value: Theme) => Theme) => void;
}

export interface LanguageStore {
  subscribe: (callback: (value: ELanguage) => void) => () => void;
  set: (value: ELanguage) => void;
  update: (updater: (value: ELanguage) => ELanguage) => void;
}

export interface NavigationStore {
  subscribe: (callback: (value: boolean) => void) => () => void;
  set: (value: boolean) => void;
  update: (updater: (value: boolean) => boolean) => void;
}