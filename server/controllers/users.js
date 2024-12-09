import express from "express";
import cors from "cors";
import { setUpConnection } from "../utils/setUpConnection.js";

const app = express();

app.use(cors());

// export const fetchUser = (req, res) => {
//   const con = setUpConnection();

//   let sql = "SELECT * FROM users WHERE id=?";

//   con.query(sql, req.query.userID, (err, result) => {
//     con.destroy();
//     console.log({ sql, err, result });
//     if (result.length >= 0) {
//       res.status(200).json({ Success: true, data: result });
//     }
//   });
// };

export const addUser = (req, res) => {
  const { firstName, lastName, email, password, preferredUnits } = req.body;

  const con = setUpConnection();

  let checkSql = "SELECT * FROM users WHERE email = ?";
  con.query(checkSql, [email], (err, result) => {
    if (err) {
      con.destroy();
      return res.status(500).json({ message: "Database query failed" });
    }
    //check to see if email already in database
    if (result.length > 0) {
      con.destroy();
      return res.status(400).json({ message: "Email already exists" });
    }

    let sql = `INSERT INTO users
  (firstName,
    lastName,
    email,
    password,
    preferredUnits)
    VALUES (?, ?, ?, ?, ?)`;

    const values = [firstName, lastName, email, password, preferredUnits];

    con.query(sql, values, (err, rows) => {
      con.destroy();
      if (!err) {
        res.send(JSON.stringify(rows));
      } else {
        console.log("Error while adding user", err);
      }
    });
  });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  const con = setUpConnection();

  let sql = "SELECT * FROM users WHERE email = ? AND password = ?";

  con.query(sql, [email, password], (err, result) => {
    con.destroy();

    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Database query failed" });
    }

    if (result.length > 0) {
      res.status(200).json({ success: true, data: result[0] });
    } else {
      res.status(400).json({ success: false, message: "Invalid credentials" });
    }
  });
};
