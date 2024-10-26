const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const { addSample } = require("../server/controllers/sample");
// require("dotenv").config({ path: __dirname + "./../.env" });
// const mysql = require("mysql");

// const setUpConnection = () => {
//   return mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: process.env.password,
//     database: "sys",
//     port: "3306",
//   });
// };

app.put("/sample/add", addSample);

// app.get("/test", (req, res) => {
//   const con = setUpConnection();
//   con.connect();

//   let sql = `SELECT * FROM users WHERE id=${req.id}`;

//   con.query(sql, (err, rows, fields) => {
//     if (!err) {
//       res.send(JSON.stringify(rows));
//       con.destroy();
//     } else {
//       console.log("Error while performing Query.");
//       con.destroy();
//     }
//   });
// });

app.listen(8080, () => {
  console.log("Port 8080");
});

// const fetchUser = (req, res, next) => {
//   let db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "5736",
//     database: "sys",
//     port: 3306,
//   });

//   let sql = "SELECT * FROM users WHERE id=1";
// db.query(sql, req.query.VARIABLENAME(err, res) => {
//When sending data to the db it gets added as req.query.VARIABLENAME, see above

//   db.query(sql, (err, res) => {
//     console.log({ sql, err, res });
//     if (res.length >= 0) {
//       res.status(200).json({ Success: true, data: res });
//       db.end();
//     }
//   });
// };

// fetchUser();
