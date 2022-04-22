module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  plugins: [
    'vue', '@typescript-eslint/eslint-plugin'
  ],
  rules: {
    'vue/no-multiple-template-root': 'off',
  },
};
