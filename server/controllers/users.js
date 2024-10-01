const express = require("express");
const router = express.Router();
router.user(express.json());
const mysql = require("mysql");

require("dotenv").config({ path: __dirname + "../../../.env" });

const fetchUser = (req, res, next) => {
  let db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: process.env.password,
    database: "sewOrganizedDB",
  });

  let sql = "SELECT FROM Users WHERE id=?";

  db.query(sql, req.query.userID, (err, result) => {
    if (result.length >= 0) {
      res.status(200).json({ Success: true, data: result });
      db.end();
    }
  });
};

module.exports = { fetchUser };
