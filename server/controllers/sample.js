const express = require("express");
const app = express();

require("dotenv").config({ path: __dirname + "./../../.env" });

const mysql = require("mysql");

const cors = require("cors");

app.use(cors());
const setUpConnection = () => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.password,
    database: "sys",
    port: "3306",
  });
};

const addSample = (req, res) => {
  const userID = 1;
  const { sampleColumn } = req.body;
  const con = setUpConnection();
  console.log(req.body);
  //   con.connect();

  let sql = `INSERT INTO sample (userID, sampleColumn) VALUES (${userID}, '${sampleColumn}')`;

  con.query(sql, (err, rows) => {
    if (!err) {
      res.send(JSON.stringify(rows));
      con.destroy();
    } else {
      console.log("Error while performing Query.", err);
      con.destroy();
    }
  });
};

module.exports = { addSample };
