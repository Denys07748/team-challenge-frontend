import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const AllGoods = lazy(() => import('pages/AllGoods'));
const Accessories = lazy(() => import('pages/Accessories'));
const Bedroom = lazy(() => import('pages/Bedroom'));
const Dining = lazy(() => import('pages/Dining'));
const Living = lazy(() => import('pages/Living'));
const Sale = lazy(() => import('pages/Sale'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="allgoods" element={<AllGoods />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="bedroom" element={<Bedroom />} />
        <Route path="dining" element={<Dining />} />
        <Route path="living" element={<Living />} />
        <Route path="sale" element={<Sale />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
