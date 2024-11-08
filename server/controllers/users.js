import express from "express";
import cors from "cors";
import { setUpConnection } from "../utils/setUpConnection.js";

const app = express();

app.use(cors());

export const fetchUser = (req, res) => {
  const con = setUpConnection();

  let sql = "SELECT * FROM users WHERE id=?";

  con.query(sql, req.query.userID, (err, result) => {
    con.destroy();
    console.log({ sql, err, result });
    if (result.length >= 0) {
      res.status(200).json({ Success: true, data: result });
    }
  });
};
