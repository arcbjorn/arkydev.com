import { EToken, ELanguage } from '$l18n/enums';
import type { TTranslations } from '$l18n/types';

const translations: TTranslations = {
  [ELanguage.EN]: {
    [EToken.SERVICES]: 'Services',
    [EToken.ABOUT]: 'About us',
    [EToken.CONTACT]: 'Contact',
    [EToken.SLOGAN]: 'Efficiency. Reliability. Consistency.',
    [EToken.DESCRIPTION]:
      'We create state-of-art systems,<br />accurately meeting the demand of business,<br/>constantly bringing positive impact on the world.',
    [EToken.CALL]: 'Discuss a project'
  },
  [ELanguage.DE]: {
    [EToken.SERVICES]: 'Dienstleistungen',
    [EToken.ABOUT]: 'Über uns',
    [EToken.CONTACT]: 'Kontakt',
    [EToken.SLOGAN]: 'Efficiency. Reliability. Consistency.',
    [EToken.DESCRIPTION]:
      'We create state-of-art systems,<br />accurately meeting the demand of business,<br/>constantly bringing positive impact on the world.',
    [EToken.CALL]: 'Discuss a project'
  }
};

export default translations;
