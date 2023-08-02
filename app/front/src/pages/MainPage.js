import React, { useState, useEffect } from 'react';
import MainAccountCard from '../components/main/MainAccountCard';
import AppHeader from '../components/common/AppHeader';
import axios from 'axios';

const MainPage = () => {
  let accessToken = '';
  let userSeqNo = '';
  let userName = '';
  let [accountList, setAccountList] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem('accessToken'));
    console.log(localStorage.getItem('userSeqNo'));
    console.log(localStorage.getItem('userName'));
    accessToken = localStorage.getItem('accessToken');
    userSeqNo = localStorage.getItem('userSeqNo');
    userName = localStorage.getItem('account_holder_name');
    getAccountList();
  }, []);

  const getAccountList = () => {
    const getApiData = {
      user_seq_no: userSeqNo,
    };

    const option = {
      method: 'GET',
      url: '/v2.0/user/me',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: `Bearer ${accessToken}`,
      },
      params: getApiData,
    };

    axios(option).then(({ data }) => {
      console.log(data.res_list);
      setAccountList(data.res_list);
    });
  };

  return (
    <div>
      <AppHeader title={(userName, '의 전체 계좌목록')} />
      <AppHeader title={userName} />
      {accountList.map((account) => {
        return (
          <>
            <MainAccountCard
              bankName={account.bank_name}
              fintechUseNo={account.fintech_use_num}
            ></MainAccountCard>
          </>
        );
      })}
    </div>
  );
};

export default MainPage;
