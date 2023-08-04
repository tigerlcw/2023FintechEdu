let jwt = require('jsonwebtoken');
let privateKey = 'dkfkjaewlsdklfjsajkldf';
var tokenKey = 'f@i#n%tne#ckfhlafkd0102test!@#%';
jwt.sign(
  {
    userId: 1,
    userEmail: 'testadmin123',
  },
  tokenKey,
  {
    expiresIn: '10d',
    issuer: 'fintech.admin',
    subject: 'user.login.info',
  },
  function (err, token) {
    console.log('로그인 성공', token);
    res.json(token);
  }
);

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6InRlc3RhZG1pbjEyMyIsImlhdCI6MTY5MTExNzI0NSwiZXhwIjoxNjkxOTgxMjQ1LCJpc3MiOiJmaW50ZWNoLmFkbWluIiwic3ViIjoidXNlci5sb2dpbi5pbmZvIn0.OpYKUjNrbiDKOz92JQj2btQQ9UMOrZ0bDBDWR34RqF8';
jwt.verify(token, tokenKey, (err, decoded) => {
  if (err) {
    console.log(err);
  } else {
    console.log('검증 완료: ', decoded);
    console.log('-------------------------------------------------------');
  }
});
