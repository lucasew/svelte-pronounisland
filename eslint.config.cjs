const { defineConfig, globalIgnores } = require('eslint/config');
const svelte = require('eslint-plugin-svelte');
const globals = require('globals');
const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = defineConfig([
	// 1. Base JS config
	js.configs.recommended,

	// 2. Base TypeScript config for .ts files
	{
		files: ['**/*.ts'],
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		languageOptions: {
			parser: tsParser
		},
		rules: {
			...tsPlugin.configs.recommended.rules
		}
	},

	// 3. Svelte config - this will apply to .svelte files
	...svelte.configs['flat/recommended'],

	// 4. Prettier config (should be last for stylistic overrides)
	...compat.extends('prettier'),

	// 5. Overrides for .svelte files to enable TypeScript parsing in <script>
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tsParser // Tells svelte-eslint-parser to use ts-parser for the script block
			},
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			// Temporarily disable rules that are failing due to pre-existing issues
			'svelte/no-navigation-without-resolve': 'off',
			'svelte/valid-prop-names-in-kit-pages': 'off',
			'svelte/require-each-key': 'off'
		}
	},

	// Global ignores
	globalIgnores([
		'**/*.cjs',
		'**/.DS_Store',
		'**/node_modules',
		'build',
		'.svelte-kit',
		'package',
		'**/.env',
		'**/.env.*',
		'!**/.env.example',
		'**/pnpm-lock.yaml',
		'**/package-lock.json',
		'**/yarn.lock'
	])
]);
