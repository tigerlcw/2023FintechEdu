import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StyledComponent from './Components/StyledComponent';
import InputComponent from './Components/InputComponent';
import StateComponent from './Components/StateComponent';
import Welcome from './Components/Welcome';
import ListComponent from './Components/ListComponent';
import AxiosComponent from './Components/AxiosComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome></Welcome>}></Route>
        <Route path="/axios" element={<AxiosComponent />}></Route>
        <Route path="/list" element={<ListComponent />}></Route>
        <Route path="/style" element={<StyledComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
