import AppRouter from '@/routes/Router';
import Home from '../pages/Home/Home';
import Layout from '../components/Layout/Layout';
import { ThemeProvider } from '@/context/ThemeContext'; // Пример контекста
import '@/#/base/main.scss';

const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
