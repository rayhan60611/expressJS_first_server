const express = require("express");
const app = express();
const port = 3000;

const usersData = require("./data/users.json");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/users", (req, res) => {
  res.send(usersData);
});

app.listen(port, () => {
  console.log(`1st express server is running on port ${port}`);
});
