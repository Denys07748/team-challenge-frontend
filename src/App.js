import './App.css';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRouter from 'components/UI/AppRouter';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};
