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
    "no-console": 1,
    "multiline-ternary": 0,
    "react/react-in-jsx-scope": 0 // React doesn't need to be imported since React v17
  },
  globals: {
    describe: "readonly",
    test: "readonly"
  }
}
