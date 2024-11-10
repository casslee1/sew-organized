import express from "express";
import cors from "cors";
import { setUpConnection } from "../utils/setUpConnection.js";

const app = express();

app.use(cors());

export const addPattern = (req, res) => {
  const userID = 1;
  const patternImage = req.file ? req.file.filename : null;
  const {
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
    (${userID}, 
    ${patternImage ? `'${patternImage}'` : "NULL"}, 
    ${patternCompany ? `'${patternCompany}'` : "NULL"}, 
    ${otherPatternCompany ? `'${otherPatternCompany}'` : "NULL"}, 
    ${patternNumber ? `'${patternNumber}'` : "NULL"}, 
    ${patternName ? `'${patternName}'` : "NULL"}, 
    ${sizeRange ? `'${sizeRange}'` : "NULL"}, 
    ${patternType ? `'${patternType}'` : "NULL"}, 
    ${otherPatternType ? `'${otherPatternType}'` : "NULL"}, 
    ${printOrPDF ? `'${printOrPDF}'` : "NULL"}, 
    ${isPDFPrinted ? `'${isPDFPrinted}'` : "NULL"}, 
    ${cutOut ? `'${cutOut}'` : "NULL"}, 
    ${sizeCutOut ? `'${sizeCutOut}'` : "NULL"}, 
    ${fabricRequirements ? `'${fabricRequirements}'` : "NULL"}, 
    ${notionsRequired ? `'${notionsRequired}'` : "NULL"}, 
    ${purchaseDate ? `'${purchaseDate}'` : "NULL"}, 
    ${yearReleased ? `'${yearReleased}'` : "NULL"}, 
    ${forWovenOrKnit ? `'${forWovenOrKnit}'` : "NULL"}, 
    ${recommendedFabricTypes ? `'${recommendedFabricTypes}'` : "NULL"}, 
    ${purchasedFrom ? `'${purchasedFrom}'` : "NULL"}, 
    ${notes ? `'${notes}'` : "NULL"},
    ${entryDate ? `'${entryDate}'` : "NULL"})`;

  con.query(sql, (err, rows) => {
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
