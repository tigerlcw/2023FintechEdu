import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StyledComponent from './Components/StyledComponent';
import InputComponent from './Components/InputComponent';
import StateComponent from './Components/StateComponent';
import Welcome from './Components/Welcome';
import ListComponent from './Components/ListComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/style" element={<StyledComponent />}></Route>
        <Route path="/input" element={<InputComponent />}></Route>
        <Route path="/list" element={<ListComponent />}></Route>
        <Route path="/state" element={<StateComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
