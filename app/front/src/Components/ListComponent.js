import React, { useState } from 'react';
import Welcome from './Welcome';
//rafce 입력
const ListComponent = () => {
  const [users, setUsers] = useState([
    { username: '홍길동', age: 12, major: '경영학' },
    { username: '임꺽정', age: 22, major: '컴공' },
    { username: '이순신', age: 32, major: '경제학' },
  ]);
  return (
    <div>
      {users.map((user) => {
        return (
          <Welcome username={user.username} age={user.age} major={user.major} />
        );
      })}
    </div>
  );
};
export default ListComponent;
