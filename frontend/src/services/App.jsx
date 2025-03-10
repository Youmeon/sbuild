import AppRouter from '@/routes/Router';
import { ThemeProvider } from '@/context/ThemeContext'; // Пример контекста
import '@/styles/global.scss';

const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
