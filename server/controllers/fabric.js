import express from "express";
import dotenv from "dotenv";
import { createConnection } from "mysql";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../.env") });

const app = express();

app.use(cors());
const setUpConnection = () => {
  return createConnection({
    host: "localhost",
    user: "root",
    // eslint-disable-next-line no-undef
    password: process.env.password,
    database: "sys",
    port: "3306",
  });
};

export const addFabric = (req, res) => {
  const userID = 1;
  const {
    fabricImage,
    fabricName,
    length,
    width,
    fibreType,
    otherFibreType,
    wovenOrKnit,
    fabricType,
    solidOrPrint,
    printType,
    dominantColour,
    otherColour,
    purchaseDate,
    purchasedFrom,
    price,
    prewashed,
    notes,
  } = req.body;
  const con = setUpConnection();
  console.log(req.body);

  let sql = `INSERT INTO fabric 
  (userID, fabricImage, fabricName, length, width, fibreType, otherFibreType, wovenOrKnit, fabricType, solidOrPrint, printType, dominantColour, otherColour, purchaseDate, purchasedFrom, price, prewashed, notes) 
  VALUES (${userID}, '${fabricImage}', '${fabricName}', '${length}', '${width}', '${fibreType}', '${otherFibreType}', '${wovenOrKnit}', '${fabricType}', '${solidOrPrint}', '${printType}', '${dominantColour}', '${otherColour}', '${purchaseDate}', '${purchasedFrom}', '${price}', '${prewashed}', '${notes}')`;

  con.query(sql, (err, rows) => {
    con.destroy();
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log("Error while performing Query.", err);
    }
  });
};

export const getFabric = (req, res) => {
  const con = setUpConnection();
  let sql = `SELECT * FROM fabric`;

  con.query(sql, (err, rows) => {
    con.destroy();
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log("Error while performing Query.", err);
    }
  });
};
