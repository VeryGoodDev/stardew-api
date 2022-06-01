/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      extends: require.resolve(`@vgd/eslint-config-personal/node-js`),
      files: [`scripts/**/*.cjs`],
      rules: {
        'import/no-commonjs': `off`,
      },
    },
    {
      extends: require.resolve(`@vgd/eslint-config-personal/node-ts`),
      files: [`src/**/*.ts`],
      parserOptions: {
        project: `tsconfig.json`,
      },
    },
  ],
}
