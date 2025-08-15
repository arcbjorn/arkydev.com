import { writable } from 'svelte/store';
import type { Theme } from '$types';

// Check if user has a theme preference saved
const userTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') as Theme : 'light';
const initialTheme = userTheme || 'light';

export const theme = writable<Theme>(initialTheme);

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