import { derived, writable } from 'svelte/store';
import translations from '$l18n/translations';

import { ELanguage, type EToken } from '$l18n/enums';
import type { TTranslationVariables } from '$l18n/types';

export const lang = writable(ELanguage.EN);
export const langs = Object.keys(translations);

function translate(lang: ELanguage, token: EToken, vars: TTranslationVariables) {
	if (!token) throw new Error('No token provided to $t()');
	if (!lang) throw new Error(`No translation for token "${token}"`);

	let text = translations[lang][token];

	if (!text) {
		return translations[ELanguage.EN][token];
	}

	if (vars) {
		Object.keys(vars).map((k) => {
			const regex = new RegExp(`{{${k}}}`, 'g');
			text = text.replace(regex, vars[k]);
		});
	}

	return text;
}

export const t = derived(
	lang,
	($lang) =>
		(token: EToken, vars = {}) =>
			translate($lang, token, vars)
);
