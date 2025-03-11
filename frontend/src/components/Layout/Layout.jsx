import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

const Layout = ({ children }) => {
  return (
    <>
      {/* SEO данные */}
      {/* <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Helmet> */}

      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
