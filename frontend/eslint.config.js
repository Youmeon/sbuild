import eslint from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';

export default [
  eslint.configs.recommended,
  {
    // Базовые настройки
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        es2021: true
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    // Настройки для React
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin
    },
    rules: {
      // Ваши кастомные правила
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      // Добавляем правила для хуков
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off'
    },
    // Настройки для Prettier
    ...prettierConfig
  }
];
