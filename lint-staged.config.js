export default {
	'**/*.{*,__eslint__}': ['eslint'],
	'**/*.{*,__cspell__}': ['cspell --no-progress --no-must-find-files'],
	'default.json': ['renovate-config-validator --strict'],
};
