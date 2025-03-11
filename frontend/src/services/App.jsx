import React from 'react';
import AppRouter from '@/routes/Router';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/main.scss';

const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
