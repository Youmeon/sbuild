import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children, title, desc }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Helmet>

      <Header />
      <main>
        <Outlet /> {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
