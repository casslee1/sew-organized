import express from "express";
import cors from "cors";
import { setUpConnection } from "../utils/setUpConnection.js";

const app = express();

app.use(cors());

export const addFabric = (req, res) => {
  const userID = 1;
  const fabricImage = req.file ? req.file.filename : null;

  const {
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
    entryDate = null,
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
  notes,
  entryDate) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    userID,
    fabricImage,
    fabricName,
    length || null,
    width || null,
    fibreType || null,
    otherFibreType || null,
    wovenOrKnit || null,
    fabricType || null,
    solidOrPrint || null,
    printType || null,
    dominantColour || null,
    otherColour || null,
    purchaseDate || null,
    purchasedFrom || null,
    price || null,
    prewashed || null,
    notes || null,
    entryDate || null,
  ];

  con.query(sql, values, (err, rows) => {
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

export const getFabricByID = (req, res) => {
  const { id } = req.params;
  const con = setUpConnection();

  let sql = `SELECT * FROM fabric WHERE id = ?`;

  con.query(sql, [id], (err, rows) => {
    con.destroy();
    if (!err) {
      if (rows.length > 0) {
        res.send(JSON.stringify(rows[0]));
      } else {
        res.status(404).send({ message: "Fabric not found" });
      }
    } else {
      console.log("Error while performing Query.", err);
      res.status(500).send({ message: "Server error" });
    }
  });
};
