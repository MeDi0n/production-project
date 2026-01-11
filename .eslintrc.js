module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "i18next",
    "react-hooks",
    "prettier",
  ],
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:i18next/recommended",
    "plugin:prettier/recommended", // Prettier всегда должен быть последним
  ],
  rules: {
    // ---------------------------------------------------
    // ПРАВИЛО ДЛЯ СОРТИРОВКИ ИМПОРТОВ (FSD)
    // ---------------------------------------------------
    "import/order": [
      "error", // Считать ошибкой, если порядок нарушен
      {
        groups: [
          "builtin", // Встроенные в Node.js (fs, path)
          "external", // Внешние (react, react-router-dom)
          "internal", // Внутренние (из webpack aliases - app, pages, entities, etc)
          "parent", // Родительские (../)
          "sibling", // Соседние (./)
          "index", // Индекс-файлы (./index)
          "object", // Импорты типов (import type ...)
        ],
        // Определяем группы для вашей FSD-архитектуры
        pathGroups: [
          // React всегда наверху
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          // Стили всегда в самом низу
          {
            pattern: "*.scss",
            group: "object", // Относим к "типам", чтобы они были в конце
            position: "after",
          },
          // Алиасы FSD
          {
            pattern: "app/**",
            group: "internal",
          },
          {
            pattern: "pages/**",
            group: "internal",
          },
          {
            pattern: "widgets/**",
            group: "internal",
          },
          {
            pattern: "features/**",
            group: "internal",
          },
          {
            pattern: "entities/**",
            group: "internal",
          },
          {
            pattern: "shared/**",
            group: "internal",
          },
        ],
        // Добавляем пустую строку-отступ между группами
        "newlines-between": "always",
        // Сортируем импорты внутри групп по алфавиту
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],

    // ---------------------------------------------------
    // ПРАВИЛА ДЛЯ PRETTIER
    // ---------------------------------------------------
    // Отключаем правила, которые дублируют Prettier
    indent: "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "max-len": "off",

    // Включаем проверку Prettier через ESLint
    "prettier/prettier": "error",

    // ---------------------------------------------------
    // ОСТАЛЬНЫЕ ПРАВИЛА ПРОЕКТА
    // ---------------------------------------------------
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
        ignoreAttribute: [
          "as",
          "role",
          "data-testid",
          "to",
          "justify",
          "align",
          "direction",
          "gap",
        ],
      },
    ],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-param-reassign": "off",
    "no-undef": "off",
    "react/no-array-index-key": "off",
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
        "max-len": "off",
      },
    },
  ],
};
