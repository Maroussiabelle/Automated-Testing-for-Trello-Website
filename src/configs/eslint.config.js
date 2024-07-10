import globals from 'globals'
import pluginJs from '@eslint/js'
import google from 'eslint-config-google'


export default [
  {languageOptions: {globals: globals.mocha}},
  pluginJs.configs.recommended,
  {
    ...google,
    rules: {
      ...google.rules,
      'valid-jsdoc': 'off',
      'require-jsdoc': 'off',
      'default-case': 'error',
      'semi': ['error', 'never'],
      'func-call-spacing': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
    },
  },
  {
    ignores: ['src/configs/wdio.conf.js'],
  },
]
