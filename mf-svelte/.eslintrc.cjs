module.exports = {
  root: true,
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022
  },
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  ignorePatterns: ['*.cjs', '*.html', '*.ts', '*.svelte', 'build/', '.svelte-kit/', 'dist/', 'node_modules/']
};