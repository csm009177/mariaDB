//const mysql = require("mysql");
import mysql from "mysql";

const connection = mysql.createConnection({
  host: 3306,
  user: "root",
  password: "0000",
  database: "test",
});

// MariaDB 연결
connection.connect((err) => {
    if (err) {
      console.error('MariaDB connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to MariaDB as id ' + connection.threadId);
  });
  
  // 예제 쿼리 실행
  connection.query('SELECT * FROM people', (error, results, fields) => {
    if (error) throw error;
    console.log('Query results: ', results);
  });
  
  // MariaDB 연결 종료
  connection.end((err) => {
    if (err) {
      console.error('MariaDB connection termination failed: ' + err.stack);
      return;
    }
    console.log('MariaDB connection terminated.');
  });