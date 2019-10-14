const express = require("express");
const fs = require("fs");
const app = express();
const port = 3001;
let blocks = [];

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.send("Something broke!");
});

app.get("/", (req, res) => {
  blocks = JSON.parse(fs.readFileSync(__dirname + "/blocks.json", "utf8"));
  res.json(blocks);
});

app.post("/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync(__dirname + "/users.json", "utf8"));
  if (
    users.find(
      item =>
        item.login === req.body.login && item.password === req.body.password
    )
  )
    res.json({ message: "ok" });
  else res.send(new Error());
});

app.get("/search/:strToFind", (req, res) => {
  let newArr = blocks.filter(item => {
    for (let key of Object.keys(item)) {
      if (
        key !== "img" &&
        item[key].toLowerCase().includes(req.params.strToFind.toLowerCase())
      ) {
        return true;
      }
    }
  });
  res.json(newArr);
});

app.listen(port, () => {
  console.log("App listening on port: " + port);
});
