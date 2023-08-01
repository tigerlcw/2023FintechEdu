import { useState } from 'react';
const StateComponent = () => {
  // let username = '홍길동'; // 상태(state) 정의는 return 전에 해야 함.
  // 프론트엔드는 항상 상태 변화에 따라서 렌더링을 다시 해줘야 함.
  let [username, setUsername] = useState('홍길동');
  setInterval(() => {
    setUsername('박누구');
  }, 3000);
  return (
    <div>
      <p>상태 관련 코드</p>
      이름 : {username} <br />
    </div>
  );
};

export default StateComponent;
