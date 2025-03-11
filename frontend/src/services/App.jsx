import React from 'react';
import AppRouterDefault from '@/routes/Router'; // Переименуйте для ясности
import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/main.scss';

const AppRouter = AppRouterDefault.default; // Извлекаем компонент из default

console.log('AppRouter:', AppRouter); // Должно вывести функцию
console.log('ThemeProvider:', ThemeProvider);

const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
