export enum ENavigationName {
	HOME = 'home',
	SERVICES = 'services',
	WHY = 'why',
	ABOUT = 'about',
	CONTACT = 'contact'
}

export interface INavigationOption {
	name: ENavigationName;
	anchor: string;
}
