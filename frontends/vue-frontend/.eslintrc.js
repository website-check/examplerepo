module.exports = {
	env: {
		browser: true
	},
	extends: ['../../.eslintrc.js', 'plugin:vue/strongly-recommended', '@vue/typescript/recommended', 'prettier'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	rules: {},
	plugins: ['promise', '@typescript-eslint', 'vue', 'import'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
		extraFileExtensions: ['.vue']
	}
};
