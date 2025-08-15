import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { ETheme, isValidTheme } from '$lib/constants';
import type { Theme } from '$types';

// Initialize with light theme for SSR
export const theme = writable<Theme>(ETheme.LIGHT);

// Only run on client side
if (browser) {
  // Get saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme && isValidTheme(savedTheme)) {
    theme.set(savedTheme);
  }
}

// Subscribe to changes and update DOM/localStorage
theme.subscribe(value => {
  if (browser) {
    localStorage.setItem('theme', value);
    if (value === ETheme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}); 