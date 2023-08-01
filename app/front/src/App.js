import './App.css';
import Welcome from './Components/Welcome'; // 컴포넌트 import
import StateComponent from './Components/StateComponent';

function App() {
  return (
    <div className="App">
      <Welcome username="이누구" age={14} /> {/* 컴포넌트 사용 */}
      <Welcome username="김누구" age={20} />
      <StateComponent />
    </div>
  );
}

export default App;
