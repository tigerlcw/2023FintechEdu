import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import AuthPage from './pages/AuthPage';
import AuthResultPage from './pages/AuthResultPage';
import MainPage from './pages/MainPage';
import BalancePage from './pages/BalancePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/authResult" element={<AuthResultPage />}></Route>
        <Route path="/balance" element={<BalancePage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
