import s from './Layout.module.css';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <div className={s.container}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
