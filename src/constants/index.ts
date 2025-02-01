import type { Technology, Partner } from '../types';
import { EToken } from '$l18n/enums';
import { t } from '$l18n';

export const TECHNOLOGIES: Technology[] = [
  {
    name: 'Distributed systems',
    description: 'Building scalable distributed applications'
  },
  {
    name: 'Blockchain solutions',
    description: 'Web3 and blockchain development'
  },
  {
    name: 'Cross-platform Desktop apps',
    description: 'Native desktop applications'
  },
  {
    name: 'Cross-platform Mobile apps',
    description: 'Native mobile applications'
  },
  {
    name: 'Full-stack Web solutions',
    description: 'End-to-end web applications'
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