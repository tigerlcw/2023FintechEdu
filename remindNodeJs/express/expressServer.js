var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/test', function (req, res) {
  res.send('test page 입니다.');
});

app.get('/user', function (req, res) {
  console.log(req.query.test);
  res.send('hello world');
});

app.post('/user', function (req, res) {
  console.log(req.body);
  res.send('hello world');
});

app.post('/login', function (req, res) {
  console.log(req.body.id);
  console.log(req.body.password);
  res.send(req.body.id + '님 로그인 되었습니다.');
  res.send('비밀번호는 ' + req.body.password);
});

app.listen(4000);
