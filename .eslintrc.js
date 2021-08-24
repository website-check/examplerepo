module.exports = {
	root: true,
	env: {
		node: true,
		jest: true,
		es2021: true
	},
	extends: ['eslint:recommended', 'prettier'],
	rules: {},
	plugins: ['promise', '@typescript-eslint'],
	ignorePatterns: ['build', '.*.js', '*.config.js', 'node_modules'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
		sourceType: 'module',
		extraFileExtensions: ['.vue']
	}
};
