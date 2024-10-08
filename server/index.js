const express = require("express");
const app = express();

require("dotenv").config({ path: __dirname + "./../.env" });

const mysql = require("mysql");

const cors = require("cors");
app.use(cors());

/*const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  /*database: "sewOrganizedDB",*/
/*port: "3306",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});*/

const fetchUser = (req, res, next) => {
  let db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "5736",
    database: "sys",
    port: 3306,
  });

  let sql = "SELECT * FROM users WHERE id=1";
  // db.query(sql, req.query.VARIABLENAME(err, res) => {
  //When sending data to the db it gets added as req.query.VARIABLENAME, see above

  db.query(sql, (err, res) => {
    console.log({ sql, err, res });
    if (res.length >= 0) {
      res.status(200).json({ Success: true, data: res });
      db.end();
    }
  });
};

fetchUser();
