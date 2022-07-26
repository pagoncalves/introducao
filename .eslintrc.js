module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ['jest'],
    extends: ['standard', 'plugin:jest/recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {},
}
