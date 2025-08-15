import { writable } from 'svelte/store';

export const isMenuOpen = writable(false);

export const toggleMenu = () => {
  isMenuOpen.update(open => !open);
};

export const closeMenu = () => {
  isMenuOpen.set(false);
};

export const openMenu = () => {
  isMenuOpen.set(true);
};