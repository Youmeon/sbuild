import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import NotFound from '@/pages/NotFound/NotFound'; // Пример 404 страницы
import Layout from '@/components/Layout/Layout'; // Общий лейаут

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<Layout title='О нас' desc='Узнайте больше о нашей компании'><About /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
