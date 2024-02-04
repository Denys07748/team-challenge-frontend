import { Suspense } from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
