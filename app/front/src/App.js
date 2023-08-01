import './App.css';

//컴포넌트 생성
const Welcome = () => {
  return <h1>Hello World</h1>;
};

function App() {
  return (
    <div className="App">
      <Welcome /> {/* 컴포넌트 사용 */}
    </div>
  );
}

export default App;
