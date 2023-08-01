//컴포넌트 생성
const Welcome = (props) => {
  // props를 파라미터로 받음
  console.log(props);
  return (
    <div>
      <h1>안녕하세요! {props.username} 님.</h1>
      <h2>{props.age}세 이시군요</h2>
      <h2>{props.major}을 전공 하셨군요</h2>
    </div>
  );
};

export default Welcome;
