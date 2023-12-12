const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001; // 포트 설정, 기본값은 3001
const mysql = require("mysql2"); // MariaDB 드라이버

// MariaDB 연결 설정
const connection = mysql.createConnection({
  host: "localhost", // MariaDB 호스트 주소
  user: "root", // MariaDB 사용자명
  password: "1234", // MariaDB 비밀번호
  database: "kimdb", // MariaDB 데이터베이스명
  port: 3308,
});

// 정적 파일 제공 (React 앱을 포함한 정적 파일들을 서빙)
app.use(express.static('public'));

// 라우팅 - React 앱으로 모든 요청을 보냄 (SPA에서 사용하기 위해)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/login", (req, res) => {
  res.end("index.html");
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});