module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: "latest", // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },

  env: {
    browser: true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    "eslint:recommended",

    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    // "plugin:vue/vue3-essential", // Priority A: Essential (Error Prevention)
    // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    "plugin:vue/vue3-recommended", // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    // https://github.com/prettier/eslint-config-prettier#installation
    // usage with Prettier, provided by 'eslint-config-prettier'.
    "prettier",
  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    "vue",

    // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Prettier has not been included as plugin to avoid performance impact
    // add it as an extension for your IDE
  ],

  globals: {
    ga: "readonly", // Google Analytics
    cordova: "readonly",
    __statics: "readonly",
    __QUASAR_SSR__: "readonly",
    __QUASAR_SSR_SERVER__: "readonly",
    __QUASAR_SSR_CLIENT__: "readonly",
    __QUASAR_SSR_PWA__: "readonly",
    process: "readonly",
    Capacitor: "readonly",
    chrome: "readonly",
  },

  // add your custom rules here
  rules: {
    // --- Base ESLint ---
    "prefer-promise-reject-errors": "off",
    curly: "error",
    "no-else-return": ["warn", { allowElseIf: false }],
    eqeqeq: "error",
    "no-alert": "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "prefer-const": "warn",
    "no-redeclare": "off",

    // --- Vue ---
    "vue/eqeqeq": "error",
    "vue/block-lang": ["error", { style: { lang: "scss" } }],
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "vue/custom-event-name-casing": "warn",
    "vue/html-comment-content-spacing": "warn",
    "vue/html-comment-indent": "warn",
    "vue/html-comment-content-newline": "warn",
    "vue/no-deprecated-v-is": "error",
    "vue/no-duplicate-attr-inheritance": "error",
    "vue/no-empty-component-block": "warn",
    "vue/no-static-inline-styles": "warn",
    "vue/no-unused-properties": ["warn", { groups: ["props", "setup"] }],
    "vue/no-useless-v-bind": "warn",
    "vue/padding-line-between-blocks": "warn",
    "vue/require-emit-validator": "error",
    "vue/require-name-property": "error",
    "vue/static-class-names-order": "warn",
    "vue/v-for-delimiter-style": "warn",
    "vue/v-on-event-hyphenation": "error",
  },
};
