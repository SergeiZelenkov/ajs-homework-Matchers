import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
         ...globals.node,
         ...globals.jest 
       },
    },
    rules: {
      'no-console': 'off',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'jest/prefer-expect-assertions': 'off' 
    },
      ignores: ['node_modules/', 'dist/', '**/*.min.js', 'coverage/', 'docs/']
  },
];
