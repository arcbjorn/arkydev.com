import type { Token } from 'src/i18n/enums';

type TNavigationToken = Token.HOME | Token.SERVICES | Token.WHY | Token.ABOUT | Token.CONTACT;

export interface INavigationOption {
	name: TNavigationToken;
	anchor: string;
}
