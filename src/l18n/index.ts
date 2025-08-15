import { derived } from 'svelte/store';
import { language as lang } from '$stores/language';
import translations from '$l18n/translations';

import { ELanguage, type EToken } from '$l18n/enums';
import type { TTranslationVariables } from '$l18n/types';

export { lang };
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
			const value = vars[k];
			if (value !== undefined) {
				text = text.replace(regex, value);
			}
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
