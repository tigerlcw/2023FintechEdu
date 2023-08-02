import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StyledComponent from './components/StyledComponent';
import InputComponent from './components/InputComponent';
import StateComponent from './components/StateComponent';
import Welcome from './components/Welcome';
import ListComponent from './components/ListComponent';
import AxiosComponent from './components/AxiosComponent';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Welcome></Welcome>}></Route>
        <Route path="/axios" element={<AxiosComponent />}></Route>
        <Route path="/list" element={<ListComponent />}></Route>
        <Route path="/style" element={<StyledComponent />}></Route> */}
        <Route path="/news" element={<NewsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
