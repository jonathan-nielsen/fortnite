module.exports = {
	env: {
		es6: true,
		commonjs: true,
		node: true,
		browser: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2017,
	},
	rules: {
		indent: ['error', 4],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'max-len': [
			'error',
			{
				code: 120,
				comments: 120,
				tabWidth: 4,
			},
		],
		'quote-props': ['error', 'as-needed'],
		'object-shorthand': 'error',
		'no-new-object': 'error',
		'no-var': 'error',
		'no-const-assign': 'error',
		'prefer-const': 'error',
		'prefer-destructuring': 'error',
		'array-callback-return': 'error',
		'no-array-constructor': 'error',
		'no-plusplus': 'error',
		'no-console': [
			'error',
			{
				allow: ['warn', 'error'],
			},
		],
	},
};
