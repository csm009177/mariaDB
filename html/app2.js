import http from "http";
import mysql from 'mysql';

const port = 3331;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0177",
  database: "icecream"
});

const serv = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const iceQuery = "SELECT * FROM menu"; // 'menu' 테이블을 조회하도록 수정합니다.
    
    console.log("Executing query:", iceQuery); // 쿼리를 콘솔에 출력합니다.
    
    connection.query(iceQuery, (error, results) => {
      if (error) {
        console.error("Error executing query:", error); // 에러 발생 시 에러 메시지를 콘솔에 출력합니다.
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
        return;
      }
      
      const result = JSON.stringify(results);
      console.log("Query result:", result); // 쿼리 결과를 콘솔에 출력합니다.

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(result);
    });
  }
});

serv.listen(port, () => {
  console.log(`
  Server is running
  http://localhost:${port}
`);
});