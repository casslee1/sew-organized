const express = require("express");
const app = express();

require("dotenv").config({ path: __dirname + "./../.env" });

const mysql = require("mysql");

const cors = require("cors");
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  /*database: "sewOrganizedDB",*/
  port: "3306",
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
