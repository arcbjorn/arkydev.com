import type { EToken } from "$l18n/enums";

export interface Technology {
  name: string;
  icon?: string;
  description?: string;
}

export interface Partner {
  name: string;
  logo?: string;
  url?: string;
}

export interface ServiceBlock {
  icon: string;
  name: EToken;
  description: EToken;
  action: EToken;
  completeSolution?: boolean;
}