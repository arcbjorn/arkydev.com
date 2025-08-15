import { writable } from 'svelte/store';
import type { Theme } from '$types';

// Check if user has a theme preference saved
const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  const savedTheme = localStorage.getItem('theme') as Theme;
  return savedTheme || 'light';
};

export const theme = writable<Theme>(getInitialTheme());

// Update theme and save to localStorage
theme.subscribe(value => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', value);
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
});

// Initialize theme on client side
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme) {
    theme.set(savedTheme);
  }
} 