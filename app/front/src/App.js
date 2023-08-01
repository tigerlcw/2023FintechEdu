import './App.css';

//컴포넌트 생성
const Welcome = (props) => {
  console.log(props);
  return (
    <div>
      <h1>안녕하세요! {props.username} 님.</h1>
      <h2>{props.age}세 이시군요</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Welcome username="이누구" age={14} /> {/* 컴포넌트 사용 */}
      <Welcome username="김누구" age={20} />
    </div>
  );
}

export default App;
