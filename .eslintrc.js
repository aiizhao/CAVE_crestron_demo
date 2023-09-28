//from cave_static
module.exports = {
  env: {
    es2021: true,
  },
  plugins: ['@emotion', 'ramda'],
  extends: [
    'react-app',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:compat/recommended',
    'plugin:ramda/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // General
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'prefer-template': 'warn',

    // Error on unused vars to force proper development
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: 'props',
        // "varsIgnorePattern": ""
      },
    ],

    // Import Rules
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          ['builtin', 'external', 'internal'],
          ['index', 'sibling'],
          'parent',
        ],
        pathGroups: [
          {
            pattern: '../../*',
            group: 'parent',
            position: 'after',
          },
          {
            pattern: '../../../*',
            group: 'parent',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-named-as-default': 'error',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        peerDependencies: true,
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/newline-after-import': 'error',
    'import/no-named-default': 'error',
    'import/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
    'import/no-anonymous-default-export': 'error',
    'import/no-cycle': 'error',
    
    // prettier rules
    // complies with Prettier '--jsx-single-quote' default value
    'jsx-quotes': ['error', 'prefer-double'],

    // emotion rules
    '@emotion/no-vanilla': 'error',
    '@emotion/import-from-emotion': 'error',
    '@emotion/styled-import': 'error',
    '@emotion/syntax-preference': ['error', 'object'],

    // mui rules
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
      },
    ],
  },
  root: true,
}
