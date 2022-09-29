import { EToken, ELanguage } from '$l18n/enums';
import type { TTranslations } from '$l18n/types';

const translations: TTranslations = {
  [ELanguage.EN]: {
    [EToken.SERVICES]: 'Services',
    [EToken.ABOUT]: 'About us',
    [EToken.CONTACT]: 'Contact',
    [EToken.SLOGAN]: 'Efficiency. Reliability. Consistency.',

    [EToken.DESCRIPTION]:
      'We create state-of-art software systems to bring positive impact on the world.',
    [EToken.ACTION]: 'Discuss a project',

    [EToken.CONSULTING]: 'Consulting',
    [EToken.CONSULTING_DESC]:
      'Analytical process of current & future systems to find the most efficient & reliable way of achieving business objectives.',
    [EToken.CONSULTING_ACTION]: 'Let`s chat',

    [EToken.ARCHITECTURE]: 'System Architecture',
    [EToken.ARCHITECTURE_DESC]:
      'Restructure of current system or construction of a system from ground up with resiliency and consistency in mind.',
    [EToken.ARCHITECTURE_ACTION]: 'Start deepwork',

    [EToken.TEAM]: 'Team Integration',
    [EToken.TEAM_DESC]:
      'Ready to take on a challenge and join the existing team to improve quality & speed at any stage of development.',
    [EToken.TEAM_ACTION]: 'Hire us',

    [EToken.COMPLETE]: 'Complete solution',
    [EToken.COMPLETE_DESC]:
      '<li>Design & Discovery</li><li>System Architecture</li><li>Implementation</li><li>DevOps</li>',
    [EToken.COMPLETE_ACTION]: 'Launch big idea',

    [EToken.ABOUT_US]:
      'We are a team of seasoned engineers & designers, dedicated to make the world a better place with help of technologies:',

    [EToken.PARTNERS]: 'Greatful to have opportunity to work with:',

    [EToken.CONTACT_ACTION]: 'Let`s do it!',
    [EToken.CONTACT_LINKS]: 'Contact us via',

    [EToken.LEGAL]: 'Legal Mentions',
    [EToken.PRIVACY]: 'Privacy Policy',
    [EToken.TERMS]: 'Terms of Usage',

    [EToken.LEGAL_SHORT]: 'Legal',
    [EToken.PRIVACY_SHORT]: 'Privacy',
    [EToken.TERMS_SHORT]: 'Terms'
  }
};

export default translations;
