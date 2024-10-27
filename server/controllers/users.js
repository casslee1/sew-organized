import express from "express";
const router = express.Router();
router.user(express.json());
const mysql = require("mysql");

//require("dotenv").config({ path: __dirname + "../../../.env" });

export const fetchUser = (req, res, next) => {
  let db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "sys",
    port: 3306,
  });

  let sql = "SELECT * FROM users WHERE id=?";

  db.query(sql, req.query.userID, (err, result) => {
    console.log({ sql, err, result });
    if (result.length >= 0) {
      res.status(200).json({ Success: true, data: result });
      db.end();
    }
  });
};
