module.exports = {
  parser: "babel-eslint", // Используем Babel для парсинга
  extends: [
    "airbnb", // Airbnb's config
    "plugin:react/recommended", // React rules
    "plugin:react-hooks/recommended", // React hooks rules
    "plugin:jsx-a11y/recommended", // Accessibility rules
    "plugin:prettier/recommended", // Prettier integration
  ],
  plugins: ["react", "react-hooks", "jsx-a11y", "import", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect", // Автоматическое определение версии React
    },
  },
  rules: {
    "prettier/prettier": "error", // Включаем Prettier
    "react/react-in-jsx-scope": "off", // Не обязательно импортировать React
    "react/prop-types": "off", // Отключаем проверку PropTypes
    "import/prefer-default-export": "off", // Отключаем требование к экспорту по умолчанию
    "react/jsx-props-no-spreading": "off", // Отключаем правило о спреде пропсов
    "react/display-name": "off", // Отключаем требование к имени компонента
    "jsx-a11y/no-static-element-interactions": "off", // Отключаем предупреждение о взаимодействии статических элементов
    "jsx-a11y/no-noninteractive-element-interactions": "off", // Отключаем предупреждение о взаимодействии неинтерактивных элементов
  },
  ignorePatterns: [".eslintrc.js", "craco.config.js"], // Игнорируем определенные файлы
};
