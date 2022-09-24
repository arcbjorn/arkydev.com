import type { EToken } from '$l18n/enums';

type TNavigationToken = EToken.SERVICES | EToken.ABOUT | EToken.CONTACT;

export interface INavigationOption {
	token: TNavigationToken;
	anchor: string;
}
