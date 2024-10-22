import globals from 'globals';
import pluginJs from '@eslint/js';
import google from 'eslint-config-google';

export default [
  {
    languageOptions: {
      globals: {...globals.node, ...globals.mocha, ...globals.jest},
    },
  },
  pluginJs.configs.recommended,
  {
    ...google,
    rules: {
      ...google.rules,
      'valid-jsdoc': 'off',
      'require-jsdoc': 'off',
      'default-case': 'error',
      'semi': ['error', 'always'],
      'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 0, maxBOF: 0}],
      'func-call-spacing': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'max-len': ['error', {code: 160}],
    },
  },
  {
    ignores: ['wdio/configs/wdio.mocha.conf.js', 'wdio/configs/wdio.cucumber.conf.js'],
  },
  {
    files: ['wdio/test/steps/*.steps.mjs'],
    rules: {
      'new-cap': 'off', // Disable the rule that enforces uppercase names for constructors
    },
  },
];
