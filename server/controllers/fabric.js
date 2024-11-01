import express from "express";
import cors from "cors";
import { setUpConnection } from "../utils/setUpConnection.js";

const app = express();

app.use(cors());

export const addFabric = (req, res) => {
  const userID = 1;
  const {
    fabricImage = null,
    fabricName = null,
    length = null,
    width = null,
    fibreType = null,
    otherFibreType = null,
    wovenOrKnit = null,
    fabricType = null,
    solidOrPrint = null,
    printType = null,
    dominantColour = null,
    otherColour = null,
    purchaseDate = null,
    purchasedFrom = null,
    price = null,
    prewashed = null,
    notes = null,
  } = req.body;
  const con = setUpConnection();
  console.log(req.body);

  let sql = `INSERT INTO fabric 
  (userID, 
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
  notes) 
  VALUES (${userID}, 
  ${fabricImage ? `'${fabricImage}'` : "NULL"}, 
  ${fabricName ? `'${fabricName}'` : "NULL"}, 
  ${length ? `'${length}'` : "NULL"}, 
  ${width ? `'${width}'` : "NULL"}, 
  ${fibreType ? `'${fibreType}'` : "NULL"}, 
  ${otherFibreType ? `'${otherFibreType}'` : "NULL"}, 
  ${wovenOrKnit ? `'${wovenOrKnit}'` : "NULL"}, 
  ${fabricType ? `'${fabricType}'` : "NULL"}, 
  ${solidOrPrint ? `'${solidOrPrint}'` : "NULL"}, 
  ${printType ? `'${printType}'` : "NULL"}, 
  ${dominantColour ? `'${dominantColour}'` : "NULL"}, 
  ${otherColour ? `'${otherColour}'` : "NULL"}, 
  ${purchaseDate ? `'${purchaseDate}'` : "NULL"}, 
  ${purchasedFrom ? `'${purchasedFrom}'` : "NULL"}, 
  ${price ? `'${price}'` : "NULL"}, 
  ${prewashed ? `'${prewashed}'` : "NULL"}, 
  ${notes ? `'${notes}'` : "NULL"})`;

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
