import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Layout from '@/components/Layout/Layout';
import NotFound from '@/pages/NotFound/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout title='Главная' desc='Добро пожаловать на страницу компании ООО СК ДЕНИОС'><Home /></Layout>}>
          <Route index element={<Layout></Layout>} />
        </Route>
        <Route path='/home' element={<Layout><Home /></Layout>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
