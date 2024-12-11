import express from "express";
import cors from "cors";
import { setUpConnection } from "../utils/setUpConnection.js";

const app = express();

app.use(cors());

export const addFabric = (req, res) => {
  const fabricImage = req?.file?.filename || null;

  const {
    userID,
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

export const getFabricName = (req, res) => {
  const con = setUpConnection();
  let sql = `SELECT fabricName FROM fabric`;

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

export const updateFabric = (req, res) => {
  const { id } = req.params;
  const fabricImage = req?.file?.filename || null;
  console.log(req.body);
  const {
    fabricName,
    length,
    width,
    fibreType,
    wovenOrKnit,
    fabricType,
    solidOrPrint,
    printType,
    dominantColour,
    purchaseDate,
    purchasedFrom,
    price,
    prewashed,
    notes,
  } = req.body;

  //const fibreTypeString = JSON.stringify(fibreType);

  // let fibreType = req.body.fibreType;
  // if (typeof fibreType === "string") {
  //   fibreType = JSON.stringify(fibreType);
  // }
  // const fibreTypeString = fibreType;

  const con = setUpConnection();
  //console.log(fibreType);
  let sql = `UPDATE fabric SET 
    fabricImage = COALESCE(?, fabricImage),
    fabricName = COALESCE(?, fabricName),
    length = COALESCE(?, length),
    width = COALESCE(?, width),
    fibreType = COALESCE(?, fibreType),
    wovenOrKnit = COALESCE(?, wovenOrKnit),
    fabricType = COALESCE(?, fabricType),
    solidOrPrint = COALESCE(?, solidOrPrint),
    printType = COALESCE(?, printType),
    dominantColour = COALESCE(?, dominantColour),
    purchaseDate = COALESCE(?, purchaseDate),
    purchasedFrom = COALESCE(?, purchasedFrom),
    price = COALESCE(?, price),
    prewashed = COALESCE(?, prewashed),
    notes = COALESCE(?, notes)
    WHERE id = ?`;

  const values = [
    fabricImage,
    fabricName,
    length,
    width,
    fibreType,
    wovenOrKnit,
    fabricType,
    solidOrPrint,
    printType,
    dominantColour,
    purchaseDate,
    purchasedFrom,
    price,
    prewashed,
    notes,
    id,
  ];

  con.query(sql, values, (err, rows) => {
    con.destroy();
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.error("Error updating fabric:", err);
      res.status(500).send({ message: "Server error" });
    }
  });
};

export const getFabricOptions = (req, res) => {
  const { filter } = req.params;
  const con = setUpConnection();

  let sql;
  if (filter === "length") {
    sql = `SELECT DISTINCT length AS value FROM fabric`;
  } else if (filter === "fibreType") {
    sql = `SELECT DISTINCT fibreType AS value FROM fabric`;
  } else if (filter === "wovenOrKnit") {
    sql = `SELECT DISTINCT wovenOrKnit AS value FROM fabric`;
  } else if (filter === "fabricType") {
    sql = `SELECT DISTINCT fabricType AS value FROM fabric`;
  } else if (filter === "solidOrPrint") {
    sql = `SELECT DISTINCT solidOrPrint AS value FROM fabric`;
  } else if (filter === "dominantColour") {
    sql = `SELECT DISTINCT dominantColour AS value FROM fabric`;
  } else {
    return res.status(400).send({ message: "Invalid filter" });
  }

  con.query(sql, (err, rows) => {
    con.destroy();
    if (!err) {
      res.send(rows.map((row) => ({ value: row.value })));
    } else {
      console.error("Error while fetching options:", err);
      res.status(500).send({ message: "Server error" });
    }
  });
};
