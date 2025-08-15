import { writable } from 'svelte/store';
import { ELanguage } from '$l18n/enums';

export const language = writable<ELanguage>(ELanguage.EN); 