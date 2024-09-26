const express = require("express");
const app = express();

const mysql = require("mysql");

const cors = require("cors");
app.use(cors());

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "secret",
  database: "sewOrganizedDB",
  port: "33069",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

/*
app.get("/test/:Username", (req, res) => {
  console.log(req.query);
  res.send({ message: "This is a test endpoint!", moreData: "moreData" });
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});*/
