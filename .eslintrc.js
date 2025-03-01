import eslintConfig from "./eslint.config.js";

module.exports = {
  ...eslintConfig[0],
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // Dodano dla testów Jest
  },
};
