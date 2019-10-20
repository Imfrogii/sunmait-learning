const express = require("express");
const fs = require("fs");
const app = express();
const mysql = require("mysql2");
const port = 3001;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "springdb",
  password: "1234"
});

connection.connect(function(err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

// connection.end(function(err) {
//   if (err) {
//     return console.log("Ошибка: " + err.message);
//   }
//   console.log("Подключение закрыто");
// });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.send("Something broke!");
});

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/blocks/:strToFind", (req, res) => {
  connection.query(
    `SELECT * FROM blocks 
     WHERE img LIKE '%${req.params.strToFind}%' 
     OR name LIKE '%${req.params.strToFind}%' 
     OR about LIKE '%${req.params.strToFind}%'
    `,
    (err, result) => {
      if (err) res.send(err);
      else {
        res.send(result);
      }
    }
  );
});

const select_all_blocks = "SELECT * FROM blocks";
app.get("/blocks", (req, res) => {
  connection.query(select_all_blocks, (err, result) => {
    if (err) res.send(err);
    else {
      res.send(result);
    }
  });
});

app.post("/users/login", (req, res) => {
  connection.query(
    `SELECT login FROM users 
     WHERE login="${req.body.login}" 
     AND password="${req.body.password}"
    `,
    (err, result) => {
      if (err) res.send(err);
      else {
        result.length !== 0 ? res.send(result[0]) : res.send([]);
      }
    }
  );
});

app.post("/users/registration", (req, res) => {
  connection.query(
    `INSERT INTO users(login, password, firstName, lastName, age)
    VALUES('${req.body.login}', 
    '${req.body.password}', 
    '${req.body.firstName}', 
    '${req.body.lastName}', 
    '${req.body.age}')`,
    (err, result) => {
      if (err) res.send(err);
      else {
        res.send(req.body.login);
      }
    }
  );
});

app.listen(port, () => {
  console.log("App listening on port: " + port);
});
