module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // 🚨 IMPORTANT: this is the config that fixes it at the moment
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}