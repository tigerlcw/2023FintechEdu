import React from 'react';
import axios from 'axios';
const AxiosComponent = () => {
  const handleClick = () => {
    console.log('1');
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        // than is a promise
        console.log(response);
      });
    console.log('end');
  };

  return (
    <div>
      <button onClick={handleClick}>send request</button>
    </div>
  );
};

export default AxiosComponent;
