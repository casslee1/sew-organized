import express from "express";
import cors from "cors";
import { setUpConnection } from "../utils/setUpConnection.js";

const app = express();

app.use(cors());

export const addPattern = (req, res) => {
  const patternImage = req?.file?.filename || null;

  const {
    userID,
    patternCompany = null,
    otherPatternCompany = null,
    patternNumber = null,
    patternName = null,
    sizeRange = null,
    patternType = null,
    otherPatternType = null,
    printOrPDF = null,
    isPDFPrinted = null,
    cutOut = null,
    sizeCutOut = null,
    fabricRequirements = null,
    notionsRequired = null,
    purchaseDate = null,
    yearReleased = null,
    forWovenOrKnit = null,
    recommendedFabricTypes = null,
    purchasedFrom = null,
    notes = null,
    entryDate = null,
  } = req.body;

  const con = setUpConnection();
  console.log(req.body);

  let sql = `INSERT INTO patterns
    (userID,     
    patternImage,
    patternCompany,
    otherPatternCompany,
    patternNumber,
    patternName,
    sizeRange,
    patternType,
    otherPatternType,
    printOrPDF,
    isPDFPrinted,
    cutOut,
    sizeCutOut,
    fabricRequirements,
    notionsRequired,
    purchaseDate,
    yearReleased,
    forWovenOrKnit,
    recommendedFabricTypes,
    purchasedFrom,
    notes,
    entryDate) 
    VALUES 
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    userID,
    patternImage || null,
    patternCompany || null,
    otherPatternCompany || null,
    patternNumber || null,
    patternName || null,
    sizeRange || null,
    patternType || null,
    otherPatternType || null,
    printOrPDF || null,
    isPDFPrinted || null,
    cutOut || null,
    sizeCutOut || null,
    fabricRequirements || null,
    notionsRequired || null,
    purchaseDate || null,
    yearReleased || null,
    forWovenOrKnit || null,
    recommendedFabricTypes || null,
    purchasedFrom || null,
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

export const getPattern = (req, res) => {
  const con = setUpConnection();
  let sql = `SELECT * FROM patterns`;

  con.query(sql, (err, rows) => {
    con.destroy();
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log("Error while performing Query.", err);
    }
  });
};

export const getPatternName = (req, res) => {
  const con = setUpConnection();
  let sql = `SELECT patternName FROM patterns`;

  con.query(sql, (err, rows) => {
    con.destroy();
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log("Error while performing Query.", err);
    }
  });
};

export const getPatternByID = (req, res) => {
  const { id } = req.params;
  const con = setUpConnection();

  let sql = `SELECT * FROM patterns WHERE id = ?`;

  con.query(sql, [id], (err, rows) => {
    con.destroy();
    if (!err) {
      if (rows.length > 0) {
        res.send(JSON.stringify(rows[0]));
      } else {
        res.status(404).send({ message: "Pattern not found" });
      }
    } else {
      console.log("Error while performing Query.", err);
      res.status(500).send({ message: "Server error" });
    }
  });
};

export const updatePattern = (req, res) => {
  const { id } = req.params;
  const patternImage = req?.file?.filename || null;

  const {
    patternCompany,
    otherPatternCompany,
    patternNumber,
    patternName,
    sizeRange,
    patternType,
    otherPatternType,
    printOrPDF,
    isPDFPrinted,
    cutOut,
    sizeCutOut,
    fabricRequirements,
    notionsRequired,
    purchaseDate,
    yearReleased,
    forWovenOrKnit,
    recommendedFabricTypes,
    purchasedFrom,
    notes,
    entryDate,
  } = req.body;

  const con = setUpConnection();
  console.log(req.body);

  let sql = `UPDATE patterns SET
    patternImage = ?,
    patternCompany = ?,
    otherPatternCompany = ?,
    patternNumber = ?,
    patternName = ?,
    sizeRange = ?,
    patternType = ?,
    otherPatternType = ?,
    printOrPDF = ?,
    isPDFPrinted = ?,
    cutOut = ?,
    sizeCutOut = ?,
    fabricRequirements = ?,
    notionsRequired = ?,
    purchaseDate = ?,
    yearReleased = ?,
    forWovenOrKnit = ?,
    recommendedFabricTypes = ?,
    purchasedFrom = ?,
    notes = ?,
    entryDate = ? 
  WHERE id = ?
  `;

  const values = [
    patternImage || null,
    patternCompany || null,
    otherPatternCompany || null,
    patternNumber || null,
    patternName || null,
    sizeRange || null,
    patternType || null,
    otherPatternType || null,
    printOrPDF || null,
    isPDFPrinted || null,
    cutOut || null,
    sizeCutOut || null,
    fabricRequirements || null,
    notionsRequired || null,
    purchaseDate || null,
    yearReleased || null,
    forWovenOrKnit || null,
    recommendedFabricTypes || null,
    purchasedFrom || null,
    notes || null,
    entryDate || null,
  ];

  con.query(sql, values, (err, rows) => {
    con.destroy();
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log("Error updating pattern.", err);
      res.status(500).send({ message: "Error updating pattern ", error: err });
    }
  });
};

export const deletePattern = (req, res) => {
  const { id } = req.params;
  const con = setUpConnection();

  const sql = `DELETE FROM patterns WHERE id = ?`;

  con.query(sql, [id], (err, rows) => {
    con.destroy();
    if (!err) {
      if (rows.affectedRows > 0) {
        res.send({ message: "Pattern deleted successfully" });
      } else {
        res.status(404).send({ message: "Pattern not found" });
      }
    } else {
      console.error("Error while deleting pattern:", err);
      res.status(500).send({ message: "Server error" });
    }
  });
};
