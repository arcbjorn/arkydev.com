import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { Theme } from '$types';

// Initialize with light theme for SSR
export const theme = writable<Theme>('light');

// Only run on client side
if (browser) {
  // Get saved theme from localStorage
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme) {
    theme.set(savedTheme);
  }
}

// Subscribe to changes and update DOM/localStorage
theme.subscribe(value => {
  if (browser) {
    localStorage.setItem('theme', value);
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}); 