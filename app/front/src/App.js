import './App.css';
import Welcome from './Components/Welcome'; // 컴포넌트 import
import StateComponent from './Components/StateComponent';
import InputComponent from './Components/InputComponent';
import ListComponent from './Components/ListComponent';

function App() {
  return (
    <div className="App">
      {/* <Welcome username="이누구" age={14} /> 
      <Welcome username="김누구" age={20} />
      <StateComponent /> */}
      <InputComponent /> {/* 컴포넌트 사용 */}
      <ListComponent />
    </div>
  );
}

export default App;
