module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:svelte/recommended',
		'prettier'
	],
	plugins: ['@typescript-eslint', 'svelte'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte/svelte' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2022,
		project: './tsconfig.json'
	},
	env: {
		browser: true,
		es2022: true,
		node: true
	}
};
