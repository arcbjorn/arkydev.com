import { writable } from 'svelte/store';
import { ELanguage } from '$lib/constants';

export const language = writable<ELanguage>(ELanguage.EN); 