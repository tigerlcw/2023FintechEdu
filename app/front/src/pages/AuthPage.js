import React from 'react';
import HeaderTitle from '../components/common/AppHeader';

const AuthPage = () => {
  const clientId = process.env.REACT_APP_BACK_CLIENT_KEY;
  const handleClick = () => {
    let tmpwindow = window.open('about:blank');
    tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
  };

  return (
    <div>
      <HeaderTitle title={'사용자 인증'}></HeaderTitle>
      <button onClick={handleClick}>사용자 인증</button>
    </div>
  );
};

export default AuthPage;
