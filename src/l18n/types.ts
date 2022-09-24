import type { ELanguage, EToken } from './enums';

export type TTranslationVariables = Record<string, string>;

type ITranslationsMap = Record<EToken, string>;

export type TTranslations = Record<ELanguage, ITranslationsMap>;
