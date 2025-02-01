import type { Technology, Partner, ServiceBlock } from '$types';
import { EToken } from '$l18n/enums';

export const TECHNOLOGIES: Technology[] = [
  {
    name: EToken.TECH_AI,
    description: EToken.TECH_AI_DESC
  },
  {
    name: EToken.TECH_DISTRIBUTED,
    description: EToken.TECH_DISTRIBUTED_DESC
  },
  {
    name: EToken.TECH_BLOCKCHAIN,
    description: EToken.TECH_BLOCKCHAIN_DESC
  },
  {
    name: EToken.TECH_DESKTOP,
    description: EToken.TECH_DESKTOP_DESC
  },
  {
    name: EToken.TECH_MOBILE,
    description: EToken.TECH_MOBILE_DESC
  },
  {
    name: EToken.TECH_WEB,
    description: EToken.TECH_WEB_DESC
  }
];

export const PARTNERS: Partner[] = [
  'Alphabet',
  'IBM',
  'Binance',
  'Chime',
  'Hitachi',
  'Microsoft',
  'TD Canada Trust'
].map(name => ({ name }));

export const SERVICES: ServiceBlock[] = [
  {
    icon: 'ConsultingIcon',
    name: EToken.CONSULTING,
    description: EToken.CONSULTING_DESC,
    action: EToken.CONSULTING_ACTION
  },
  {
    icon: 'SystemArchitectureIcon',
    name: EToken.ARCHITECTURE,
    description: EToken.ARCHITECTURE_DESC,
    action: EToken.ARCHITECTURE_ACTION
  },
  {
    icon: 'TeamIcon',
    name: EToken.TEAM,
    description: EToken.TEAM_DESC,
    action: EToken.TEAM_ACTION
  },
  {
    icon: 'CompleteSolutionIcon',
    name: EToken.COMPLETE,
    description: EToken.COMPLETE_DESC,
    action: EToken.COMPLETE_ACTION,
    completeSolution: true
  }
]; 