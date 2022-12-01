module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  ignorePatterns: ["/node_modules/*"],
  rules: {
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always"
      }
    ],
    quotes: ["error", "double"],
    "arrow-parens": ["error", "always"],
    "no-unused-vars": 1,
    "react/prop-types": 0,
    "no-console": 1
  },
  globals: {
    describe: "readonly",
    test: "readonly"
  }
}
