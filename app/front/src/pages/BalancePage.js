import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppHeader from '../components/common/AppHeader';
import queryString from 'query-string';
import axios from 'axios';

const bankCode = process.env.REACT_APP_BACK_CODE;

const BalancePage = () => {
  let accessToken = '';
  let userSeqNo = '';
  const [balance, setBalance] = useState('아직없음');

  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const fintechUseNum = parsed.fintechUseNo;

  function generateRandom9DigitNumber() {
    const min = 100000000; // Minimum value (smallest 9-digit number)
    const max = 999999999; // Maximum value (largest 9-digit number)

    const random9DigitNumber =
      Math.floor(Math.random() * (max - min + 1)) + min;
    return random9DigitNumber.toString();
  }

  const genTrasId = () => {
    return bankCode + generateRandom9DigitNumber();
  };

  useEffect(() => {
    console.log(localStorage.getItem('accessToken'));
    console.log(localStorage.getItem('userSeqNo'));
    console.log(fintechUseNum);
    console.log(genTrasId());
    accessToken = localStorage.getItem('accessToken');
    userSeqNo = localStorage.getItem('userSeqNo');
    getBalance();
  }, []);

  const getBalance = () => {
    const sendObj = {
      bank_tran_id: genTrasId(),
      fintech_use_num: fintechUseNum,
      tran_dtime: '20230715103900',
    };
    const option = {
      method: 'GET',
      url: 'v2.0/account/balance/fin_num',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: `Bearer ${accessToken}`,
      },
      params: sendObj,
    };

    axios(option).then(({ data }) => {
      console.log(data);
      setBalance(data);
    });
  };

  return (
    <div>
      <AppHeader title="잔액조회"></AppHeader>
      {balance}
    </div>
  );
};

export default BalancePage;
