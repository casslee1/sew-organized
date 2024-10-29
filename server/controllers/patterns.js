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

export const addPattern = (req, res) => {
  const userID = 1;
  const {
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
    notes) 
    VALUES 
    (${userID}, 
    '${patternImage}', 
    '${patternCompany}', 
    '${otherPatternCompany}', 
    '${patternNumber}', 
    '${patternName}', 
    '${sizeRange}', 
    '${patternType}', 
    '${otherPatternType}', 
    '${printOrPDF}', 
    '${isPDFPrinted}', 
    '${cutOut}', 
    '${sizeCutOut}', 
    '${fabricRequirements}', 
    '${notionsRequired}', 
    '${purchaseDate}', 
    '${yearReleased}', 
    '${forWovenOrKnit}', 
    '${recommendedFabricTypes}', 
    '${purchasedFrom}', 
    '${notes}')`;

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
