export default {
	'default.json': [
		'prettier --check',
		'cspell --no-progress --no-must-find-files',
		'renovate-config-validator',
	],
	'**/*.{md,json,yml,yaml,js}': [
		'prettier --check',
		'cspell --no-progress --no-must-find-files',
	],
};
