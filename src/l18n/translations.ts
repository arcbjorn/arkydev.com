import { EToken, ELanguage } from '$l18n/enums';
import type { TTranslations } from '$l18n/types';

const translations: TTranslations = {
  [ELanguage.EN]: {
    [EToken.SERVICES]: 'Services',
    [EToken.ABOUT]: 'About us',
    [EToken.CONTACT]: 'Contact'
  },
  [ELanguage.DE]: {
    [EToken.SERVICES]: 'Dienstleistungen',
    [EToken.ABOUT]: 'Über uns',
    [EToken.CONTACT]: 'Kontakt'
  }
};

export default translations;
