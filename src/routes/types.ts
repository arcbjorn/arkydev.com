import { EToken } from '$l18n/enums';

type TNavigationToken = EToken.SERVICES | EToken.ABOUT | EToken.CONTACT;

type TNavigationAnchor = Record<TNavigationToken, string>;

export const NAVIGATION_ANCHOR: TNavigationAnchor = {
  [EToken.SERVICES]: `/#${EToken.SERVICES}`,
  [EToken.ABOUT]: `/#${EToken.ABOUT}`,
  [EToken.CONTACT]: `/#${EToken.CONTACT}`
};

export interface INavigationOption {
  token: TNavigationToken;
  anchor: string;
}
