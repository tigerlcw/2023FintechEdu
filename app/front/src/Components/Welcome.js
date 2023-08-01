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

export default Welcome;
